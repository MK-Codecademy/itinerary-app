import React from "react";
import Hero from "../components/Hero";
import PlanNewTrip from "../components/PlanNewTrip";

function LandingPage() {
  // replace second PlanNewTrip card with the Log In/Sign Up card when ready
  return (
    <div className="landing-page">
      <Hero />
      <div className="card-grid">
        <PlanNewTrip />
        <PlanNewTrip />
      </div>
    </div>
  );
}

export default LandingPage;
