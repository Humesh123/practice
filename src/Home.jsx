import React from "react";

const Home = (props) => {
  console.log("dash : ", props);
  return (<><h1>Welcome { props.location.state.username || props.username}</h1>
  <h2>very nice</h2></>);
};

export default Home;
