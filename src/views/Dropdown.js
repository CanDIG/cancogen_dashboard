import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// Consts
import BASE_URL from "../constants/constants";

class DatasetsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedDataset: "Datasets",
      selectedDataSetId: "",
    };
  }

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
        this.setState({ selectedDataSetId: firstDataset.id });
        this.setState({ selectedDataset: firstDataset.name });
        this.updateParentState(firstDataset.name, firstDataset.id);
      })
      .catch((err) => {
        this.setState({ datasets: {} });
      });
  }

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
    for (const property in datasets) {
      datasetList.push(
        <DropdownItem
          center
          default
          style={{justifyContent:'center'}}
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
          "padding-left": "10px",
          "padding-right": "10px",
        }}
      >
        <DropdownToggle caret nav style={{ color: "white", fontSize: 12}}>
          {this.state.selectedDataset}
        </DropdownToggle>
        <DropdownMenu>{datasetList}</DropdownMenu>
      </Dropdown>
    );
  }
}

export default DatasetsDropdown;
