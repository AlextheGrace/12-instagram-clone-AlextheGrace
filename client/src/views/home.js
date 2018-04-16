import React from "react";
import { PhotoFeed } from '../containers';


const Home = () => {
  return (
    <div className="Home">
      <p>Home</p>
      <div class="ui two column centered grid">
      <PhotoFeed />
      </div>
    </div>
  );
};


export default Home;
 