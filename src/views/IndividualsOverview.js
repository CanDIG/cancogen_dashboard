import React, { useState, useEffect, useRef } from 'react';
// reactstrap components
import {
  Card, CardBody, CardTitle, Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

import CustomOfflineChart from '../components/Graphs/CustomOfflineChart';
import LoadingIndicator, {
  trackPromise,
  usePromiseTracker,
} from '../components/LoadingIndicator/LoadingIndicator';
import BoxPlotChart from '../components/Graphs/BoxPlotChart';
import { notify, NotificationAlert } from '../utils/alert';

import { CHORD_METADATA_URL } from '../constants/constants';

/*
 * Return the aggregation value of a key from an array of objects.
 * @param {objectArray}... List of objects
 * @param {property} Property to be grouped by
 */
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property].charAt(0).toUpperCase()
      + obj[property].slice(1).toLowerCase().replace('_', ' ');
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += 1;
    delete acc.undefined;
    return acc;
  }, {});
}

/*
 * Return a specific extra property grouped by gender
 * @param {data}... Object
 * @param {property}... Property to be grouped by
 */
function groupExtraPropertieByGender(data, property) {
  const extraPropertieList = {};
  for (let i = 0; i < data.results.length; i += 1) {
    const key = data.results[i].sex.charAt(0).toUpperCase()
      + data.results[i].sex.slice(1).toLowerCase().replace('_', ' ');
    if (!extraPropertieList[key]) {
      extraPropertieList[key] = [];
    }
    extraPropertieList[key].push(
      parseFloat(data.results[i].extra_properties[property]),
    );
  }
  return extraPropertieList;
}

/*
 * Return the aggregation of diseases
 * @param {data}... Object
 */
function countDiseases(data) {
  const diseases = {};
  for (let i = 0; i < data.results.length; i += 1) {
    for (let j = 0; j < data.results[i].phenopackets.length; j += 1) {
      for (
        let k = 0;
        k < data.results[i].phenopackets[j].diseases.length;
        k += 1
      ) {
        const key = data.results[i].phenopackets[j].diseases[k].term.label;
        if (!diseases[key]) {
          diseases[key] = 0;
        }
        diseases[key] += 1;
      }
    }
  }
  return diseases;
}

/*
 * Return the aggregation of a especific property under extra_property
 * @param {data}... Object
 * @param {property}... Property to be grouped by
 */
function getCounterUnderExtraProperties(data, property) {
  const education = {};
  for (let i = 0; i < data.results.length; i += 1) {
    const key = data.results[i].extra_properties[property];
    if (!education[key]) {
      education[key] = 0;
    }
    education[key] += 1;
  }

  return education;
}

function IndividualsOverview({ updateState }) {
  const [individualCounter, setIndividualCount] = useState(0);
  const [ethnicityObject, setEthnicityObject] = useState({ '': 0 });
  const [genderObject, setGenderObject] = useState({ '': 0 });
  const [doBObject, setDoBObject] = useState({ '': 0 });
  const [diseasesObject, setDiseasesObject] = useState({ '': 0 });
  const [diseasesSum, setDiseasesSum] = useState(0);
  const [educationObject, setEducationObject] = useState({ '': 0 });
  const [boxPlotObject, setBoxPlotObject] = useState({ '': [] });
  const [didFetch, setDidFetch] = useState(false);

  const { promiseInProgress } = usePromiseTracker();

  const notifyEl = useRef(null);

  const countIndividuals = (data) => {
    setIndividualCount(data.results.length);
  };

  const countEthnicity = (data) => {
    setEthnicityObject(groupBy(data.results, 'ethnicity'));
  };

  const countGender = (data) => {
    setGenderObject(groupBy(data.results, 'sex'));
  };

  const countDateOfBirth = (data) => {
    setDoBObject(groupBy(data.results, 'date_of_birth'));
  };

  useEffect(() => {
    updateState({ datasetVisible: false });
    trackPromise(
      fetch(`${CHORD_METADATA_URL}/api/individuals?page_size=10000`)
        .then((response) => response.json())
        .then((data) => {
          countIndividuals(data);
          countEthnicity(data);
          countGender(data);
          countDateOfBirth(data);
          const diseases = countDiseases(data);
          setDiseasesObject(diseases);
          setDiseasesSum(Object.keys(diseases).length);
          setEducationObject(getCounterUnderExtraProperties(data, 'education'));
          setBoxPlotObject(groupExtraPropertieByGender(data, 'weight'));
          setDidFetch(true);
        })
        .catch(() => {
          notify(
            notifyEl,
            'The resources you requested were not available.',
            'warning',
          );
          setIndividualCount('Not available');
          setDiseasesSum('Not available');
        }),
    );
    return () => {
      updateState({ datasetVisible: true });
    };
  }, [didFetch]);

  return (
    <>
      <div className="content">
        <>
          <NotificationAlert ref={notifyEl} />
          <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-02 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Individuals</p>
                        {promiseInProgress === true ? (
                          <LoadingIndicator />
                        ) : (
                          <CardTitle tag="p">{individualCounter}</CardTitle>
                        )}
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Diseases</p>
                        {promiseInProgress === true ? (
                          <LoadingIndicator />
                        ) : (
                          <CardTitle tag="p">{diseasesSum}</CardTitle>
                        )}
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12" sm="12">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <CustomOfflineChart
                      datasetName=""
                      dataObject={genderObject}
                      chartType="pie"
                      barTitle="Gender"
                      height="400px; auto"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <CustomOfflineChart
                      datasetName=""
                      dataObject={diseasesObject}
                      chartType="pie"
                      barTitle="Diseases"
                      height="400px; auto"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12" sm="12">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <CustomOfflineChart
                      datasetName=""
                      dataObject={ethnicityObject}
                      chartType="bar"
                      barTitle="Ethnicity"
                      height="400px; auto"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <BoxPlotChart
                      chartTitle="Weight"
                      plotObject={boxPlotObject}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12" sm="12">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <CustomOfflineChart
                      datasetName=""
                      dataObject={doBObject}
                      chartType="pie"
                      barTitle="Date of Birth"
                      height="400px; auto"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12">
              <Card>
                <CardBody>
                  {promiseInProgress === true ? (
                    <LoadingIndicator />
                  ) : (
                    <CustomOfflineChart
                      datasetName=""
                      dataObject={educationObject}
                      chartType="bar"
                      barTitle="Education"
                      height="400px; auto"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      </div>
    </>
  );
}

IndividualsOverview.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default IndividualsOverview;
