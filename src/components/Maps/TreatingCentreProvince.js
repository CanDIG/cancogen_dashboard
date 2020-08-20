import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from 'highcharts/modules/map';
import mapDataCanada from '@highcharts/map-collection/countries/ca/ca-all.geo.json';
import PropTypes from 'prop-types';

// Consts
import BASE_URL from '../../constants/constants';

// Initialize HighchartsMap
HighchartsMap(Highcharts);

function fetchData(datasetId, chartOptionsUpdate) {
  fetch(`${BASE_URL}/count`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dataset_id: datasetId,
      logic: {
        id: 'A',
      },
      components: [
        {
          id: 'A',
          enrollments: {},
        },
      ],
      results: [
        {
          table: 'enrollments',
          fields: [
            'treatingCentreProvince',
          ],
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const dataCount = [];

      // Highcharts Map requires a specific set of codes for provinces
      // and territories, as represented by hcProvCodes below.
      const hcProvCodes = [
        'ca-ab', 'ca-bc', 'ca-mb', 'ca-nb', 'ca-nl', 'ca-nt', 'ca-ns',
        'ca-nu', 'ca-on', 'ca-pe', 'ca-qc', 'ca-sk', 'ca-yt'];
      const provShortCodes = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
      const provFullNames = [
        'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
        'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
        'Quebec', 'Saskatchewan', 'Yukon Territory'];

      if (data) {
        const { treatingCentreProvince } = data.results.enrollments[0];

        for (const name in treatingCentreProvince) {
          if (provShortCodes.includes(name)) {
            const tempDataCount = [];
            tempDataCount.push(hcProvCodes[provShortCodes.indexOf(name)]);
            tempDataCount.push(treatingCentreProvince[name]);
            dataCount.push(tempDataCount);
          } else if (provFullNames.includes(name)) {
            const tempDataCount = [];
            tempDataCount.push(hcProvCodes[provFullNames.indexOf(name)]);
            tempDataCount.push(treatingCentreProvince[name]);
            dataCount.push(tempDataCount);
          }
        }
      }

      const chart = {
        series: [
          {
            data: dataCount,
          },
        ],
      };
      chartOptionsUpdate(chart);
    });
}

function TreatingCentreProvince({ datasetId }) {
  const [chartOptions, setChartOptions] = useState(
    {
      title: {
        text: 'Treating Centre Province',
      },
      credits: {
        enabled: false,
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      colorAxis: {
        min: 0,
        minColor: '#E6E7E8',
        maxColor: '#005645',
      },
      series: [
        {
          type: 'map',
          name: 'Province',
          mapData: mapDataCanada,
          states: {
            hover: {
              color: '#BADA55',
            },
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}',
          },
        },
      ],
    },
  );

  useEffect(() => {
    // Mimic the didUpdate function
    try {
      if (datasetId) {
        fetchData(datasetId, setChartOptions);
      }
    } catch (err) {
      console.log(err);
    }
  }, [datasetId]);

  return (
    <div>
      <HighchartsReact
        contructorType="mapChart"
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
}

TreatingCentreProvince.propTypes = {
  datasetId: PropTypes.string.isRequired,
};

export default TreatingCentreProvince;
