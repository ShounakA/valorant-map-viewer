import React, { Component } from "react";
import * as d3 from 'd3';
import ReactDOM from 'react-dom'
class Map extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isBuyPeriod: this.props.isBuyPeriod,
            currMap:'Bind',
            width:this.props.width,
            height:this.props.height
        }
    }
    componentDidMount(){
        this.props.setResetCallable({
            resetPan: this.resetPan
         });
         this.props.setMapCallable({
             updateMap: this.updateMap
         })
         this.setState({svgRef: this.svg})
        this.drawMap(this.props.map);
    }
    componentDidUpdate(){
        let layer1 = d3.select("#attack-barrier")
        let layer2 = d3.select("#defense-barrier")
        
        if (this.props.isBuyPeriod){
            layer1.style('display', null);
            layer2.style('display', null);
        }
        else{
            layer1.style('display', 'none');
            layer2.style('display', 'none');
        }
        
    }
    resetPan(event){
        let map = d3.select("#Bind")
        function zoomed() {
            map.attr("transform", d3.event.transform)
        }
        var zoom = d3.zoom().on("zoom", zoomed);
        map.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    }
    drawMap(mapcur){
        d3.xml("./valorant-map-viewer/"+mapcur.file).then(
            (map) => {
                this.svg.node().append(map.documentElement)
                d3.select("#"+mapcur.name).attr("class","svg-content-responsive").attr("viewBox",["0","0",this.state.width, this.state.height].join(' '))
                this.drawCharacterLayer("#"+mapcur.name)
                this.setState({currMap: mapcur.name})
                var bind = d3.select("#"+mapcur.name).call(d3.zoom().scaleExtent([0.55,5]).on("zoom", function () {
                    bind.attr("transform", d3.event.transform)
            }))
            }
        )
    }
    updateMap(mapfile, mapname, ref){
        var svgRef = ref.current.svg;
        var myState = ref.current
        var mapFile = mapfile;
        var mapName = mapname;
        d3.xml("./valorant-map-viewer/"+mapFile).then(
            (map) => {
                d3.select("#"+myState.state.currMap).remove();
                svgRef.node().append(map.documentElement);
                d3.select("#"+mapName).attr("class","svg-content-responsive").attr("viewBox",["0","0",myState.state.width, myState.state.height].join(' '))
                myState.drawCharacterLayer("#"+mapName);
                myState.setState({currMap: mapName})
                var bind = d3.select("#"+mapName).call(d3.zoom().scaleExtent([0.55,5]).on("zoom", function () {
                    bind.attr("transform", d3.event.transform)

            }))
            }
        )
    }
    drawCharacterLayer(id){
        d3.select(id).append("g")
        .attr("id", "Draggables")
    }
    render(){
        return <div className="svg-container splitter" ref={element => (this.svg = d3.select(element))}></div>
    }
}
export default Map