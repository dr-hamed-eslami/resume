import IconButton from "@material-ui/core/IconButton";

import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function LeftBar({ open, setOpen }) {
  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          ["Home", "home", "fa-house-user"],
          ["Profession", "profession", "fa-user-tie"],
          ["Honors", "honors", "fa-award"],
          ["Educations", "educations", "fa-user-graduate"],
        ].map((text, index) => (
          <ListItem button key={text[1]}>
            <ListItemIcon>
              <i className={"fa " + text[2] + " fa-lg"}></i>
            </ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
