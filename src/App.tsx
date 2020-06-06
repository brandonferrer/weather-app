import React, { useState, useEffect } from "react";
import axios from "axios";

function getWeatherData(setAppState: any, axios: any): void {
  let data = localStorage.getItem("data");

  if (data) {
    setAppState(data);
  } else {
    data = axios.get();
    setAppState(data);
  }
}

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getWeatherData(setData, axios);
  }, []);

  return (
    <div>
      <h1>Foo</h1>
    </div>
  );
};

export default App;
