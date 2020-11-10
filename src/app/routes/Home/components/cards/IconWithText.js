
import React from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';
import Widget from "components/Widget/index";

const IconWithText = ({data}) => {
  const {imageIcon, title, subTitle} = data;
  return (
    <Widget styleName="p-4">
      <div className="media align-items-center flex-nowrap">
        <div className="mr-lg-4 mr-3">
          <AssignmentIcon className="img-fluid"/>
        </div>
        <div className="media-body">
          <h1 className="jr-font-weight-bold mb-0">{title}</h1>
          <p className="text-grey mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};

export default IconWithText;