import React from "react";
import Hero from "../components/Hero";
import LoginCard from "../components/LoginCard";
import PlanNewTrip from "../components/PlanNewTrip";

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <div className="card-grid">
        <PlanNewTrip />
        <LoginCard />
      </div>
    </div>
  );
}

export default LandingPage;
