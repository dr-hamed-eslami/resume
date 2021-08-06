import React from "react";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function Home({ data, home }) {
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
        src={data?.face}
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
        <Typography variant="h5">{data?.name}</Typography>
        <p>
          {home?.sloganPrefix}
          {home?.slogans[0]}
        </p>
        <br />
        <div>
          <LinkedInIcon />
          <MailIcon />
        </div>
      </div>
    </div>
  );
}
