import React, { Component } from "react";
import * as d3 from 'd3';
import ReactDOM from 'react-dom'
class Haven extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isBuyPeriod: this.props.isBuyPeriod,
            currMap:'Bind'
        }
    }
    componentDidMount(){
        this.props.setResetCallable({
            resetPan: this.resetPan
         });
         this.props.setAgentCallables(
             [{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer},{addPlayer:this.addPlayer}]
         )
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
        d3.xml("./"+mapcur.file).then(
            (map) => {
                this.svg.node().append(map.documentElement)
                d3.select("#"+mapcur.name).attr("class","svg-content-responsive")
                this.drawCharacter("#"+mapcur.name)
                this.setState({currMap: mapcur.name})
                var bind = d3.select("#"+mapcur.name).call(d3.zoom().on("zoom", function () {
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
        d3.xml("./"+mapFile).then(
            (map) => {
                d3.select("#"+myState.state.currMap).remove();
                svgRef.node().append(map.documentElement);
                d3.select("#"+mapName).attr("class","svg-content-responsive")
                myState.drawCharacter("#"+mapName);
                myState.setState({currMap: mapName})
                var bind = d3.select("#"+mapName).call(d3.zoom().on("zoom", function () {
                    bind.attr("transform", d3.event.transform)

            }))
            }
        )
    }
    drawCharacter(id){
        d3.select(id).append("g")
        .attr("id", "Draggables")
    }
    addPlayer(event, team, color, name){
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
        .attr('r', 5)
        .style("fill", teamcolor)
        layer.append("circle")
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 5)
        .style("fill", 'none')
        .style("stroke", color)
        .style('stroke-width', 3)

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
        return <div className="svg-container splitter" ref={element => (this.svg = d3.select(element))}></div>
    }
}
export default Haven