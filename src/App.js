import React, { useEffect, useState } from "react";
import Home from "./components/parts/home/Home";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import LeftBar from "./components/layout/LeftBar";

function App() {
  const [data, setData] = useState(null);
  const [home, setHomeData] = useState(null);
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
    getData("/data/data.json", setData);
  }, []);

  return (
    <>
      <TopBar title={data?.name} setOpen={setOpen}></TopBar>
      <div>
        <LeftBar data={data} open={open} setOpen={setOpen}></LeftBar>
        <Home data={data} home={home}></Home>
      </div>
      <BottomBar></BottomBar>
    </>
  );
}

export default App;
