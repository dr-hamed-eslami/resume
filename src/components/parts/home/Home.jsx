import React from "react";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton, Tooltip } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home({ data, home }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderColor: "red",
        padding: 0,
        margin: 0,
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
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title='Redirect to "https://www.linkedin.com/in/hamed-eslami/"!'
          >
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/hamed-eslami/")
              }
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title='Copy "dr.hamed.eslami@gmail.com" to clipboard!'
          >
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText("dr.hamed.eslami@gmail.com");
                setOpen(true);
              }}
              color="primary"
            >
              <MailIcon />
            </IconButton>
          </Tooltip>

          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Copied "dr.hamed.eslami@gmail.com" to clipboard!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
