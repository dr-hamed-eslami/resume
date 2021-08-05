import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Home(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderColor: "red",
        // paddingTop: "10vh",
        padding: 0,
        margin: 0,
        // height: "80vh",
        // backgroundColor: "red",
      }}
    >
      <img
        style={{
          marginTop: "5vh",
          borderRadius: "50%",
        }}
        width="200vh"
        src={props.data?.image}
        alt="Face"
      ></img>
      <div
        style={{
          marginTop: "5vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{props.data?.name}</Typography>
        <p>I'm a{props.data?.slogans[0]}</p>
      </div>
    </div>
  );
}
