import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';
import BASE_URL, { CHORD_METADATA_URL } from '../../constants/constants';
import IndividualTable from './IndividualTable';
import { notify, NotificationAlert } from '../../utils/alert';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../../assets/css/VariantsSearch.css';

function VariantsTable({ rowData, datasetId }) {
  const [individualsRowData, setIndividualsRowData] = useState([]);
  const notifyEl = useRef(null);

  const columnDefs = [
    { headerName: 'Reference Name', field: 'referenceName' },
    { headerName: 'Start', field: 'start' },
    { headerName: 'End', field: 'end' },
    { headerName: 'Reference Bases', field: 'referenceBases' },
    { headerName: 'Alternate Bases', field: 'alternateBases' },
  ];
  let gridOptions = {};

  function onSelectionChanged() {
    const selectedRows = gridOptions.api.getSelectedRows();

    fetch(`${BASE_URL}/search`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          datasetId: gridOptions.context.datasetId,
          logic: {
            id: 'A',
          },
          components: [
            {
              id: 'A',
              variants: {
                start: selectedRows[0].start,
                end: selectedRows[0].end,
                referenceName: selectedRows[0].referenceName,
              },
            },
          ],
          results: [
            {
              table: 'patients',
              fields: ['patientId'],
            },
          ],
        },
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.results.patients.length === 0) {
          throw new Error('The variant you selected does not have associated individuals.');
        }

        let patientParams = '';

        for (let i = 0; i < data.results.patients.length; i += 1) {
          patientParams += `id=${data.results.patients[i].patientId}&`;
        }

        fetch(`${CHORD_METADATA_URL}/api/individuals?${patientParams}`)
          .then((response) => response.json())
          .then((chordData) => {
            if (chordData.results === undefined) {
              setIndividualsRowData([]);
              throw new Error('The variant you selected does not have associated individuals.');
            }
            setIndividualsRowData(chordData.results);
          }).catch((err) => {
            notify(
              notifyEl,
              err.message,
              'warning',
            );
          });
      }).catch((err) => {
        notify(
          notifyEl,
          err.message,
          'warning',
        );
      });
  }

  gridOptions = {
    defaultColDef: {
      editable: false,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 20,
      minHeight: 300,
    },
    onSelectionChanged,
    rowSelection: 'single',
    rowData: null,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    enableRangeSelection: true,
    paginationAutoPageSize: true,
    pagination: true,
  };

  return (
    <>
      <NotificationAlert ref={notifyEl} />
      <div className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
          context={{ datasetId }}
        />
      </div>

      <IndividualTable individualsRowData={individualsRowData} />
    </>
  );
}

VariantsTable.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
  datasetId: PropTypes.string.isRequired,
};

export default VariantsTable;
