import React, { useEffect, useState } from "react";
import Home from "./components/parts/home/Home";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import LeftBar from "./components/layout/LeftBar";
import AboutMe from "./components/parts/home/AboutMe";

function App() {
  const [data, setData] = useState(null);
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
    getData("/data.json", setData);
  }, []);

  return (
    <>
      <TopBar title={data?.general.name} setOpen={setOpen}></TopBar>
      <div>
        <LeftBar open={open} setOpen={setOpen}></LeftBar>
        <Home data={data?.general} home={data?.home}></Home>
        <AboutMe aboutme={data?.aboutme}></AboutMe>
      </div>
      <BottomBar></BottomBar>
    </>
  );
}

export default App;
