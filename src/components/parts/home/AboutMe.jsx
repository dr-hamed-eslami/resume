import React from "react";

export default function AboutMe({ aboutme }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "red",
        // padding: 0,
        // margin: 0,
      }}
    >
      <img
        style={{
          marginTop: "5vh",
          borderRadius: "50%",
        }}
        width="120vh"
        src={aboutme?.avatar}
        alt="avatar"
      ></img>
      <p>{aboutme?.description}</p>
      <div></div>
    </div>
  );
}
