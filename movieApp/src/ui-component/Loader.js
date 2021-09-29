import React from "react";

// material-ui
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1301,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AppLinearProgress = withStyles((theme) => ({
  barColorPrimary: {
    //   backgroundColor: black,
  },
}))(LinearProgress);

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
    // <Backdrop className={classes.backdrop} open>
    //   <CircularProgress color="inherit" />
    // </Backdrop>
  );
};

export default Loader;
