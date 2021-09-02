import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardActions } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function AboutMe({ aboutme }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        alignItems: "center",
        borderColor: "red",
        justifyContent: "space-between",
      }}
    >
      <img
        style={{
          margin: matches ? "4vh" : "2vh",
          borderRadius: "50%",
        }}
        width="140vh"
        src={aboutme?.avatar}
        alt="avatar"
      ></img>

      <Card
        style={{
          borderRadius: 25,
          width: matches ? "60%" : "90%",
          // margin: 10,
        }}
      >
        <CardContent>
          <Typography color="textSecondary">{aboutme?.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            style={{ borderRadius: 25, margin: "0 auto", display: "flex" }}
            href="./data/Hamed Eslami CV_20201125.pdf"
          >
            Download CV
          </Button>
        </CardActions>
      </Card>
      <Card
        style={{
          borderRadius: 25,
          width: matches ? "20%" : "90%",
          margin: 10,
          marginTop: matches ? 0 : 20,
        }}
      >
        <CardContent>
          {aboutme?.skills?.map((s) => {
            return (
              <>
                <Typography>{s[0]}</Typography>
                <LinearProgress
                  style={{
                    borderRadius: 25,
                    height: 10,
                  }}
                  variant="determinate"
                  color="primary"
                  value={s[1]}
                />
              </>
            );
          })}
        </CardContent>
      </Card>

      <br></br>
    </div>
  );
}
