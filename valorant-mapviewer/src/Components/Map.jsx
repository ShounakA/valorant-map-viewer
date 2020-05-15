import React, { Component } from "react";
import * as d3 from 'd3';
import Haven from './maps/Haven';
import Bind from './maps/Bind';
import Split from './maps/Split';
// Factory for the Map current map displayed. When created based on map id will display the coresponding map.
class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBuyPeriod: this.props.isBuyPeriod,
            currMap:this.props.map,
            width:this.props.width,
            height:this.props.height,
            mapRef:this.props.mapRef
        }
    }
    static getDerivedStateFromProps(props, state){
        if (props.map !== state.currMap){
            return {currMap:props.map}
        }
        return null;
    }
    drawDrawingBoardLayer(){
        d3.select('svg').append('g').attr('id','ui');
        d3.select('svg').append('g').attr('id','canvas');
    }
    render(){
        switch (this.state.currMap) {
            case 'Bind':
                return <Bind height={this.state.height} width={this.state.width}></Bind>
            case 'Haven':
                return <Haven height={this.state.height} width={this.state.width}></Haven>
            case 'Split':
                return <Split height={this.state.height} width={this.state.width}></Split>
            default:
                return <div>No Map Selected, or Errored</div>;
        }
    }
}
export default Map