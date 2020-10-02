import React, { useState } from "react";
import { Link } from "gatsby";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { logout } from "../../utils/auth";
import { navigate } from "@reach/router";
import { useFirebase } from "gatsby-plugin-firebase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    width: "100%",
    height: "60px",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    width: "90%",
  },
  headerNav: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Header = () => {
  const classes = useStyles();
  const [firebase, setFirebase] = useState();

  useFirebase((fb) => {
    setFirebase(fb);
  }, []);
  const handleClick = () => {
    logout(firebase).then(() => navigate(`/`));
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerTitle}>
        <Typography variant="h6"> HDB HYDRO </Typography>
      </div>
      <List className={classes.headerNav}>
        <ListItem onClick={handleClick}>
          <ListItemText primary=" Logout " />
          <ListItemIcon>
            {" "}
            <ExitToAppIcon style={{ color: "white" }} />{" "}
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};
export default Header;
