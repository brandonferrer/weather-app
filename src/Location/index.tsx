import React from "react";
import LocationAutoComplete from "../shared/components/LocationAutoComplete";

export default function Location() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <LocationAutoComplete />
      </div>
    </div>
  );
}
