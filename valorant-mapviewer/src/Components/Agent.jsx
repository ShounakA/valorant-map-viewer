import React, { Component } from "react";
import * as d3 from 'd3';
import ReactDOM from 'react-dom'
class Agent extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            name: this.props.name,
            cdn: this.props.cdn,
            team: this.props.team,
        }
    }
    componentDidMount(){
        var team = this.state.team;
        var cdn = this.state.cdn;
        var name = this.state.name;
        this.addPlayer();
    }
    
    addPlayer(){
        var team = this.state.team;
        var cdn = this.state.cdn;
        var name = this.state.name;
        var layer = d3.select("#Draggables")

        layer.append('g')
        .attr("id", team+name)

        layer = d3.select('#'+team+name)
        
        let teamcolor ='#24E8AD'
        if (team==='attack')
            teamcolor = '#FF5859'
        layer.append("circle")
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 12)
        .style("fill", teamcolor)
        .style("stroke", teamcolor)
        .style('stroke-width', 5)
        layer.append("image")
        .attr("href", cdn)
        .attr('x', 35)
        .attr('y', 35)
        .attr('width',30)
        .attr('height', 30)
        

        //make draggable
        let translateX = 0
        let translateY = 0
        const handleDrag = d3.drag()
        .subject(function() {
        const me = d3.select(this);
        return { x: translateX, y: translateY }
        })
        .on('drag', function() {
        const me = d3.select(this);
        const transform = `translate(${d3.event.x}, ${d3.event.y})`;
        translateX = d3.event.x;
        translateY = d3.event.y;
        me.attr('transform', transform);
        });

        handleDrag(layer);
    }
    render(){
        return <div>{this.state.name}</div>;
    }
}
export default Agent;