import { PancakeAreaChart } from './PancakeAreaChart.js';

const init = () => {

  const nPancakeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map(String);

  const charts = d3.select('#charts')
    .data(nPancakeArr)
    .enter()
    .append('div')
    .attr('class', 'chart');

  charts.append('h4')
    .text(d => `${d} pancake${+d > 1 ? 's' : ''}`);

  charts.each(function(d) {
    PancakeAreaChart(d3.select(this), d);
  });

  // PancakeAreaChart(d3.select('#charts'), "8");

};

init();
