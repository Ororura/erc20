import React from "react";
import WithNavBar from "../../component/HOC/HOC";
import 'bootstrap/dist/css/bootstrap.css';
const Main = () => {
  return <div>Test</div>;
};

const MainWithNavBar = WithNavBar(<Main />);

export default MainWithNavBar;