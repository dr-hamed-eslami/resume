import React, { useEffect, useState } from "react";
import Home from "./components/parts/home/Home";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import LeftBar from "./components/layout/LeftBar";

function App() {
  const [homeData, setHomeData] = useState(null);
  const [open, setOpen] = useState(false);
  const getData = (address, setData) => {
    fetch(address, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData("/data/home/home.json", setHomeData);
  }, []);

  return (
    <div>
      <TopBar title={homeData?.name} setOpen={setOpen}></TopBar>
      <LeftBar open={open} setOpen={setOpen}></LeftBar>
      <Home data={homeData}></Home>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
