import React, { useState } from "react";
import Header from "./Header";

const AddData = () => {
  const [input, changeInput] = useState({
    
    Nation: "",
    Year: "",
    Population:""

  });

 const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
 }

 const submitValue=()=>{
    console.log(input)
 }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Nation
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Nation"
                  value={input.Nation}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Year"
                  value={input.Year}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Population
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Population"
                  value={input.Population}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success"onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
