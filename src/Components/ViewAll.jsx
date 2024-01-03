import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [publicData, changePublicData] = useState({
    data: [],
    source: [
      {
        measures: ["Population"],
        annotations: {
          source_name: "Census Bureau",
          source_description:
            "The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.",
          dataset_name: "ACS 5-year Estimate",
          dataset_link: "http://www.census.gov/programs-surveys/acs/",
          table_id: "B01003",
          topic: "Diversity",
          subtopic: "Demographics",
        },
        name: "acs_yg_total_population_5",
        substitutions: [],
      },
    ],
  });

  const fetchData=()=>{

    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then(
        (response)=>{
          changePublicData(response.data)
        }
      );
  }

  useEffect(()=>{fetchData()},[])

  return (
    <div>
      <Header />
      <div className="container">
        <row>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">  Sl No</th>
                      <th scope="col">Nation</th>
                      <th scope="col">Year</th>
                      <th scope="col">Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicData.data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">1</th>
                          {/* <td>{value.ID Nation}</td> */}
                          <td>{value.Nation}</td>
                          <td>{value.Year}</td>
                          {/* <td>{value.ID Year}</td> */}
                          <td>{value.Population}</td>
                          {/* <td>{value.Slug Nation}</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </row>
      </div>
    </div>
  );
};

export default ViewAll;
