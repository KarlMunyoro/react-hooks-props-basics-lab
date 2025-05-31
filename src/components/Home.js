import React from "react";

function Home({props = {}, color, name, city}) {
  console.log(props.color)
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
