import React, { Component } from "react";
import * as d3 from 'd3';

class Bind extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            // isBuyPeriod: this.props.isBuyPeriod,
            name:'Bind',
            svg: 'bind-map.svg',
            svg_id: 'Bind',
            width:this.props.width,
            height:this.props.height,
            map_canvas_id:'map-canvas'

        }
    }
    componentDidMount(){
        this.drawMap(this.state.name, this.state.svg);
    }
    componentDidUpdate(){
        // let layer1 = d3.select("#attack-barrier")
        // let layer2 = d3.select("#defense-barrier")
        
        // if (this.props.isBuyPeriod){
        //     layer1.style('display', null);
        //     layer2.style('display', null);
        // }
        // else{
        //     layer1.style('display', 'none');
        //     layer2.style('display', 'none');
        // }
        
    }
    componentWillUnmount(){
        d3.select('#'+this.state.svg_id).remove();
    }
    drawMap(mapname, mapfile){
        let id = this.state.map_canvas_id;
        d3.xml("./valorant-map-viewer/"+mapfile).then(
            (map) => {
                let me = d3.select("#"+id);
                console.log(me)
                me.node().append(map.documentElement)
                d3.select("#"+mapname).attr("class","svg-content-responsive").attr("id",this.state.svg_id).attr("viewBox",["0","0",this.state.width, this.state.height].join(' '))
                this.drawCharacterLayer("#"+mapname)
                // this.drawDrawingBoardLayer();
                var bind = d3.select("#"+mapname).call(d3.zoom().scaleExtent([0.55,5]).on("zoom", function () {
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
        return <div>Bind</div>;
    }
}
export default Bind