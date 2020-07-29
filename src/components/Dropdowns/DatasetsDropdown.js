import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// Consts
import BASE_URL from "../../constants/constants";

/*
 * Dropdown component listing all the available Datasets
 */

class DatasetsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedDataset: "",
      selectedDataSetId: "",
    };
  }

  /*
   * Fetch dataset information from the server after the Dropdown component is added to the DOM
   * and update both parent and local state
   */

  componentDidMount() {
    fetch(BASE_URL + "/datasets/search", {
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => {
        let datasets = {};
        for (let i = 0; i < data.results.datasets.length; i++) {
          datasets[data.results.datasets[i].id] = data.results.datasets[i];
        }
        this.setState({ datasets: datasets });
        const firstDataset = datasets[Object.keys(datasets)[0]];
        this.setState({
          selectedDataSetId: firstDataset.id,
          selectedDataset: firstDataset.name,
        });
        this.updateParentState(firstDataset.name, firstDataset.id);
      })
      .catch((err) => {
        this.setState({ datasets: {} });
      });
  }
  /*
   * Update the datasetName and datasetId on the parent component
   * @param {string} datasetName
   * @param {string} datasetId
   */
  updateParentState(datasetName, datasetId) {
    this.props.updateState({
      datasetName: datasetName,
      datasetId: datasetId,
    });
  }

  toggle(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  /*
   * Update both parent and local components state
   */
  handleClick = (e) => {
    this.setState({
      selectedDataset: e.currentTarget.textContent,
      selectedDataSetId: e.currentTarget.id,
    });
    this.updateParentState(e.currentTarget.textContent, e.currentTarget.id);
  };

  render() {
    const datasets = this.state.datasets;

    const datasetList = [];
    /*
     * This loop builds the dropdown items list
     */
    for (const property in datasets) {
      datasetList.push(
        <DropdownItem
          default
          onClick={this.handleClick}
          key={datasets[property].id}
          id={datasets[property].id}
        >
          {datasets[property].name}
        </DropdownItem>
      );
    }
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        style={{
          borderRadius: "25px",
          backgroundColor: "#212120",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <DropdownToggle caret nav style={{ color: "white", fontSize: 12 }}>
          {this.state.selectedDataset}
        </DropdownToggle>
        <DropdownMenu>{datasetList}</DropdownMenu>
      </Dropdown>
    );
  }
}

export default DatasetsDropdown;
