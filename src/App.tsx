import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import PlanNewTrip from "./components/PlanNewTrip"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PlanNewTrip />
    </div>
  );
}

export default App;
