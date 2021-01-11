import React from "react";
import Jumbotron from "../components/Jumbotron";
import {SavedList} from "../components/SavedList";

const Saved = (props) => {
  return (
    <div>
      <Jumbotron title={props.title} />
      <SavedList />
    </div>
  );
};

export default Saved;