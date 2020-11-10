import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  }
});

export default function SkeletonForm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="row">
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
        <div className="col-md-4 col-12">
          <Skeleton animation="wave" height={60} />
        </div>
      </div>
      <div className="row">
        <Skeleton animation="wave" />
      </div>
    </div>
  );
}
