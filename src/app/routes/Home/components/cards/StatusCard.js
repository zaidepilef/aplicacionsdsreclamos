import React from "react";

import Widget from "components/Widget/index";

const StatusCard = (props) => {
  const { title, subTitle, color, colorTitle, colorSubTitle, icon} = props;
  return (
    <Widget styleName={`px-2 bg-${color}`}>
      <div className="d-flex flex-row justify-content-center mt-1 mb-4">
          <span
            className={`size-70 text-${colorTitle} d-flex flex-row justify-content-center align-items-center`}>
            { icon }</span>
      </div>
      <div className="text-center">
        <h2 className={`jr-fs-l jr-font-weight-bold text-${colorTitle} mb-2`}>{title}</h2>
        <span className={`text-${colorSubTitle}`}>{subTitle}</span>
      </div>
    </Widget>
  );
};

export default StatusCard;