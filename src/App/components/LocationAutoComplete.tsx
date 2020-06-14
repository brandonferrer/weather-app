import React, { useEffect, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import { throttle } from "lodash";
import { GOOGLE_API_KEY } from "../../shared/constants";

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };
const placesService = { current: null };

interface PlaceType {
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      }
    ];
  };
  place_id: string;
}

interface DetailsType {
  formattedAddress: string;
  name: string;
  lat: number;
  lng: number;
}

const LocationAutoComplete = ({ setSearchData }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<PlaceType | null>(null);
  const [valueDetails, setValueDetails] = React.useState<DetailsType | null>(
    null
  );
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<PlaceType[]>([]);
  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle(
        (
          request: { input: string },
          callback: (results?: PlaceType[]) => void
        ) => {
          (autocompleteService.current as any).getPlacePredictions(
            { ...request, types: ["(cities)"] }, // Limit to cities so user can only get weather by city
            callback
          );
        },
        200
      ),
    []
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: PlaceType[]) => {
      if (active) {
        let newOptions = [] as PlaceType[];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  useEffect(() => {
    if (value !== null) {
      if (!placesService.current && (window as any).google) {
        // Using places without map requires you to pass an element
        placesService.current = new (window as any).google.maps.places.PlacesService(
          document.createElement("div")
        );
      }

      const request = {
        placeId: value.place_id,
        fields: ["geometry", "name", "formatted_address"],
      };

      // @ts-ignore
      placesService.current.getDetails(request, (result) => {
        const mapValueDetails: DetailsType = {
          name: result.name,
          formattedAddress: result.formatted_address,
          lat: result.geometry.location.lat(),
          lng: result.geometry.location.lng(),
        };

        setValueDetails(mapValueDetails);
      });
    }
  }, [value]);

  useEffect(() => {
    // Report search data to parent
    setSearchData(valueDetails);
  }, [valueDetails, setSearchData]);

  return (
    <Autocomplete
      id="google-autocomplete"
      style={{ width: "100%", paddingBottom: "1rem", paddingTop: "1rem" }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search City by Name 📍"
          variant="standard"
          fullWidth
          size="small"
        />
      )}
      renderOption={(option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [
            match.offset,
            match.offset + match.length,
          ])
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};

export default LocationAutoComplete;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));
