import React from "react";

function PlanNewTrip() {
  return (
    <div className="card w-96">
      <div className="tabs">
        <p className="selected">I know my dates</p>
        <p>I don't know my dates</p>
      </div>
      <div className="flex flex-col w-full rounded-b-3xl items-center py-5 border-purple-900 border-2 border-t-0">
        <h3 className="text-xl mb-5">Plan your new trip</h3>
        <form className="flex flex-col items-center">
          <div>
            <label htmlFor="">Where To: </label>
            <input id="" type="text" className="underline-input" placeholder="Enter your destination"/>
          </div>
          <div>
            <label htmlFor="">Start Date: </label>
            <input id="" type="date" className="underline-input" />
          </div>
          <div>
            <label htmlFor="">End Date: </label>
            <input id="" type="date" className="underline-input" />
          </div>
        </form>
        <button className="mt-5 rounded-lg bg-purple-700 text-white py-2 px-6 w-fit">Start Planning</button>
      </div>
    </div>
  );
}

export default PlanNewTrip;
