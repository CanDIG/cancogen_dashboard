import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// Consts
import BASE_URL from '../../constants/constants';

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
 * Component for bar chart graphs
 * @param {string} datasetId
 * * @param {string} table
 * * @param {string} field
 * * @param {string} title
 */
function BarChart({
  datasetId, table, field, title,
}) {
  const [chartOptions, setChartOptions] = useState({
    credits: {
      enabled: false,
    },
    chart: {
      type: 'bar',
      height: '200px; auto',
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: [],
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
      fetch(`${BASE_URL}/count`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataset_id: datasetId,
          logic: {
            id: 'A',
          },
          components: [
            {
              id: 'A',
              patients: {},
            },
          ],
          results: [
            {
              table,
              fields: [field],
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const counts = data.results[table][0][field];
          const categories = [];
          const dataList = Object.keys(counts).map((key) => {
            categories.push(
              key.charAt(0).toUpperCase() + key.slice(1),
            );
            return counts[key];
          });

          setChartOptions({
            xAxis: {
              categories,
            },
            series: [
              {
                data: dataList,
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

BarChart.propTypes = {
  datasetId: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BarChart;