import React from "react";
import CardBox from "components/CardBox";
import Search from "./Search";
import "date-fns";

const MenuTop = props => {
  const { query, setQuery } = props;

  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <form className="row">
          <div className="col align-self-center"></div>
          <Search query={query} setQuery={setQuery} />
        </form>
      </CardBox>
    </div>
  );
};
export default MenuTop;
