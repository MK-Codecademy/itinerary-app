import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card title="Check out your plan" buttonText="Login" />
    </div>
  );
}

export default App;
