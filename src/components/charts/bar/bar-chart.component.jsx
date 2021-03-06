import React from 'react';
import { Bar } from 'react-chartjs-2';

import { chartBarAPI } from '@/services/api';
import { Container, ContentBox, Title } from "../chart.styled";

import { data, options } from "../chart.config";

// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

export default class BarChartComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      annualResultGraph: []
    };
  }

  componentDidMount () {
    this.loadGraphicResult()
        .catch(err => console.error('loadGraphicResult >', err));
  }

  loadGraphicResult = async () => {
    const response = await chartBarAPI.get('/anual-result');
    this.setState({ annualResultGraph: response.data });
  };

  render () {
    const { annualResultGraph } = this.state;
    let resultData = annualResultGraph
        .filter((item, idx) => idx < 6)
        .map(item => item);

    let dataBarsChart = data;
    dataBarsChart.labels = resultData.map((result) => result.label);
    dataBarsChart.datasets[0].data = resultData.map((result) => result.value);

    return (
        <Container>
          <Title>BARS CHART</Title>
          <ContentBox>
            <Bar data={dataBarsChart} options={options} />
          </ContentBox>
        </Container>
    );
  }
};

// PieChartComponent.propTypes = { };

// PieChartComponent.defaultProps = { };
