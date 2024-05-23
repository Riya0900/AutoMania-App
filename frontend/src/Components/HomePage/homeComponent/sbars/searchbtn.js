import useStyles from "./searchbtn.style";
import React from "react";

export default function SearchButton() {
  const classes = useStyles();
  return <button className={classes.searchbtn1}>Search</button>;
}
