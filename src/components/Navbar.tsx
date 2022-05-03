import React from "react";
import Button from "./Button"

function Navbar() {
  return (
    <header>
      <div className="logo-placeholder">Logo</div>
      <nav className="top-nav">
        <Button text="Log In" color="purple" filled={false} />
        <Button text="Sign Up" color="purple" filled={true} />
      </nav>
    </header>
  );
}

export default Navbar;
