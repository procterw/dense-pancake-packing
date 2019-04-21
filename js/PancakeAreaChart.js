import { getPKRadius } from './geometry.js';
import { forceData } from './data.js';
import { PAN_RADIUS } from './constants.js';

const WIDTH = 200;
const HEIGHT = 200;

export const PancakeAreaChart = (selection, nPancakes) => {

  const { links, nodes, forces } = forceData[nPancakes];

  const svg = selection.append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .attr('transform', "scale(0.8, 0.8)");

  const simulation = d3.forceSimulation(nodes)
    .force("link", 
      d3.forceLink(links)
        .id(d => d.id)
        .strength(d => links[d.index].weak ? forces.weak : forces.strong)
        // .strength(d => links[d.index].weak ? 0.6 : 2.2)
    )
    .force("charge", d3.forceManyBody().strength(-120))
    .force("center", d3.forceCenter(WIDTH / 2, HEIGHT / 2))
    .force('collision', d3.forceCollide().radius(getPKRadius(nPancakes)));
      
    const pan = svg.append("g")
      .append("circle")
      .attr("fill", "#596275")
      .attr("stroke", "#303952")
      .attr("stroke-width", 8)
      .attr("cx", WIDTH / 2)
      .attr("cy", HEIGHT / 2)
      .attr("r", PAN_RADIUS + 8);

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", getPKRadius(nPancakes) - 3)
      .attr("fill", '#f7d794')
      .attr("stroke", "#f5cd79")
      .attr("stroke-width", 5)
      .call(drag(simulation));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2)
      .attr("stroke", "white")
      .attr("stroke-opacity", d => d.weak ? 0.4 : 1);

    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });
};


function drag(simulation) {
  
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}