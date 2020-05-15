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
            height:this.props.height,
            drawing_data: { lines:[]},
            active_color:''
        }
    }
    componentDidMount(){
        this.props.setResetCallable({
            resetPan: this.resetPan
         });
         this.props.setMapCallable({
             updateMap: this.updateMap
         })
         this.setState({svg: d3.select(this.myRef.documentElement)})
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
    drawColorPallete(){
        
        let ui = d3.select('#ui')
        let SWATCH_D = 22
        let palette = ui.append('g').attr('transform', "translate(#{4+SWATCH_D/2},#{4+SWATCH_D/2})")
        let swatches = palette.selectAll('swatch')
        .data(["#333333","#ffffff","#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]);
        var myState =  this.myRef;
        // console.log(myState)
        let trash_btn = ui.append('text').html('&#xf1f8;')
        .attr('class', 'btn')
        .attr('dy', '0.35em')
        // .attr('cx', 110)
        // .attr('cy', 50)
        .attr('transform', 'translate(800,50)')
        .on('click', () =>{
            let drawing_data= {lines:[]};
            myState.current.setState({drawing_data:drawing_data});
            this.redraw()
        });
        myState =  this.myRef;
        swatches.enter().append('circle')
        .attr('class', 'swatch')
        .attr('cx', (d,i) => (i*(22+4)/2)+50)
        .attr('cy', (d,i) => (i%2)==0 ? SWATCH_D+50:50)
        .attr('r', SWATCH_D/2)
        // .attr('fill', palClick);

        swatches.each ((d) =>{
            if (d === this.state.active_color){
                d3.select(this).classed('active', true);
            }
        });

    }
    redraw(specific_line){
        let lines_layer = d3.select('#canvas')
        let lines = lines_layer.selectAll('.line')
            .data(this.state.drawing_data.lines)
            
        lines.enter().append('path')
            .attr
            .attr('class', 'line')
            .attr('stroke', (d) => d.color)
            .each( (d) => d.elem = d3.select(this))
            
        if (specific_line)
            specific_line.elem
            .attr('d', (d) => this.render_line(d.points))
        else
            lines
            .attr('d', (d) => this.render_line(d.points))
                
        lines.exit().remove()
    }
    render_line(){
        d3.svg.line()
        .x((d) =>  d[0])
        .y((d) =>  d[1])
        .interpolate('basis')
    }
    drawMap(mapcur){
        d3.xml("./valorant-map-viewer/"+mapcur.file).then(
            (map) => {
                console.log(this.state)
                let me = d3.select(this.myRef.current);
                me.node().append(map.documentElement)
                d3.select("#"+mapcur.name).attr("class","svg-content-responsive").attr("viewBox",["0","0",this.state.width, this.state.height].join(' '))
                this.drawCharacterLayer("#"+mapcur.name)
                this.drawDrawingBoardLayer();
                // this.drawColorPallete();
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
                myState.drawDrawingBoardLayer();
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
    drawDrawingBoardLayer(){
        d3.select('svg').append('g').attr('id','ui');
        d3.select('svg').append('g').attr('id','canvas');
    }
    render(){
        return <div className="svg-container splitter" ref={this.myRef}></div>
    }
}
export default Map