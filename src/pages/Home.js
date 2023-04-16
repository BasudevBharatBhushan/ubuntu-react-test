import React, { useState } from "react";
import Admin from "./Admin";
import Civilian from "./Civilian";
import Distributor from "./Distributor";

const Home = () => {
  const [component, setComponent] = useState(null);

  const handleAdmin = () => {
    setComponent(<Admin />);
  };

  const handleCivilian = () => {
    setComponent(<Civilian />);
  };

  const handleDistributor = () => {
    setComponent(<Distributor />);
  };

  return (
    <div>
      <button onClick={handleAdmin}>Admin</button>
      <button onClick={handleCivilian}>Civilian</button>
      <button onClick={handleDistributor}>Distributor</button>
      {component}
    </div>
  );
};

export default Home;
