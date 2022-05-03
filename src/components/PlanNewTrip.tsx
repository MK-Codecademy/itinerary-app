import React, { useState } from "react";

function PlanNewTrip() {
  const [selectedTab, setSelectedTab] = useState("knownDates")

  const changeTab = (e: any): void => {
    setSelectedTab(e.currentTarget.getAttribute("data-value"))
  }

  const isSelected = (selected: string) => selected === selectedTab

  return (
    <div className="card w-96">
      <div className="tab-wrapper">
        <div
          data-value="knownDates"
          onClick={changeTab}
          className={isSelected("knownDates") ? "tab selected" : "tab"}
        >
          I know my dates
        </div>
        <div
          data-value="unknownDates"
          onClick={changeTab}
          className={isSelected("unknownDates") ? "tab selected" : "tab"}
        >
          I don't know my dates
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-header">Plan your new trip</h3>

        {isSelected('knownDates') ? (
        <form className="card-form-wrapper">
          <div className="form-item">
            <label htmlFor="">Where To: </label>
            <input id="" type="text" className="underline-input" placeholder="Enter your destination"/>
          </div>
          <div className="form-item">
            <label htmlFor="">Start Date: </label>
            <input id="" type="date" className="underline-input" />
          </div>
          <div className="form-item">
            <label htmlFor="">End Date: </label>
            <input id="" type="date" className="underline-input" />
          </div>
        </form>
        ) : (
        <form className="card-form-wrapper">
          <div className="form-item">
            <label htmlFor="">Where To: </label>
            <input id="" type="text" className="underline-input" placeholder="Enter your destination"/>
          </div>
          <div className="form-item">
            <label htmlFor="">Duration: </label>
            <input id="" type="number" className="underline-input" />
            <label htmlFor="">days </label>
          </div>
        </form>
        )}

        <button className="mt-5 rounded-lg bg-purple-700 text-white py-2 px-6 w-fit">Start Planning</button>
      </div>
    </div>
  );
}

export default PlanNewTrip;
