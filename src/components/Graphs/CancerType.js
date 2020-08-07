import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Consts
import BASE_URL from "../../constants/constants.js";

// Hook
// Used to keep the previous value of a state or prop
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/*
 * Pie graph component for type of cancer data
 * @param {string} datasetId
 */

function CancerType({ datasetId }) {
  const [chartOptions, setChartOptions] = useState({
    credits: {
      enabled: false,
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Cancer type",
    },
    series: [
      {
        colorByPoint: true,
        showInLegend: false,
        data: [],
      },
    ],
  });

  const prevDatasetId = usePrevious(datasetId);

  useEffect(() => {
    if (prevDatasetId !== datasetId && datasetId) {
      fetch(BASE_URL + "/count", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dataset_id: datasetId,
          logic: {
            id: "A",
          },
          components: [
            {
              id: "A",
              diagnoses: {},
            },
          ],
          results: [
            {
              table: "diagnoses",
              fields: ["cancerType"],
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const cancerType = data.results.diagnoses[0].cancerType;
          const graphData = [];
          for (const name in cancerType) {
            graphData.push({ name: name, y: cancerType[name] });
          }
          setChartOptions({
            series: [
              {
                data: graphData,
              },
            ],
          });
        });
    }
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default CancerType;
