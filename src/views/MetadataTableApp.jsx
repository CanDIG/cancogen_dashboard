import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BASE_URL from '../constants/constants';
import ClinMetadataTable from '../components/Tables/ClinMetadataTable';

function CreateColumns(columnNames, cb) {
  const columnList = [];

  Object.values(columnNames).forEach((name) => {
    const column = {
      Header: (name.charAt(0).toLocaleUpperCase() + name.slice(1)),
      accessor: name,
      filter: 'fuzzyText',
      aggregate: 'count',
      Aggregated: ({ value }) => `${value} `,
    };
    columnList.push(column);
  });
  cb(columnList);
}

function getMetadataData(datasetId, metadata, cb) {
  const datasets = [];
  return fetch(`${BASE_URL}/${metadata}/search`, {
    method: 'POST',
    body: JSON.stringify({ datasetId }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results[metadata].length; i += 1) {
        datasets.push(data.results[metadata][i]);
      }
      cb(datasets);
    });
}

function TableApp({ datasetId }) {
  const [selectedMetadata, setSelectedMetadata] = useState('patients');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  React.useEffect(() => {
    // fetch data
    try {
      getMetadataData(datasetId, selectedMetadata, setData);
    } catch (err) {
      //Need better reporting
      console.log(err);
    }
  }, [selectedMetadata, datasetId]);

  React.useEffect(() => {
    // Separate Effect since state change is async and columns depends on data
    // Not entirely sure if necessary
    try {
      CreateColumns(Object.keys(data[0]), setColumns);
    } catch (err) {
      //Need better reporting
      console.log(err);
    }
  }, [data]);

  const dataM = React.useMemo(() => data, [data]);
  const columnsM = React.useMemo(() => columns, [columns]);

  return (
    <div className="content">
      <ClinMetadataTable columns={columnsM} data={dataM} metadataCallback={setSelectedMetadata} />
    </div>
  );
}

TableApp.propTypes = {
  datasetId: PropTypes.string,
};
TableApp.defaultProps = {
  datasetId: 'patients',
};

export default TableApp;