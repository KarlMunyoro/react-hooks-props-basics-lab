import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

let github = user.links.github;
let linkedin=user.links.linkedin;
let color = user.color;
let name = user.name;
let city = user.city;

function App() {
  return (
    <div>
      <NavBar />
      <Home props={user} color={color} name={name} city ={city}/>
      <About bio={user.bio} github={github} linkedin={linkedin}/>
    </div>
  );
}

export default App;
