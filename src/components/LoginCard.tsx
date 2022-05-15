import React from "react";
import Button from "./Button";

const LoginCard = () => {
  return (
    <div className="card w-96">
      <div className="card-content ">
        <h3 className="card-header pt-10">Check out your plan</h3>
        <div className="pb-10">
          <Button text="Log in" color="purple" filled />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
