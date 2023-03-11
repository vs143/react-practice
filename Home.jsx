import React from "react";
import Data from "./Data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2> this is Home page</h2>
      {Data.map((element, index) => {
        return (
          <div>
          <Link to={`/${element.id}`}>
            <div className="data" key={index}>
              <h4>ID:{element.id} </h4>
              <h4> {element.name} </h4>
              <h4>{element.email}</h4>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
