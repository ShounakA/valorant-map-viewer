import React, { Component } from "react";
import * as d3 from 'd3';

class Haven extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isBuyPeriod: this.props.isBuyPeriod
        }
    }
    componentDidMount(){
        this.drawMapBounds();
        this.drawSites();
        this.drawObstacles();
        this.drawHighestObstacles();
        this.drawBuyBarriers();
        this.drawWindows();
        this.drawInnerWalls();
        

    }
    componentDidUpdate(){
        let layer1 = d3.select("#Barrier")
        if (this.props.isBuyPeriod)
            layer1.style('display', null);
        else
            layer1.style('display', 'none');

    }
    drawMapBounds(){
        this.svg.append("g")
        .attr("id","MapBounds")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#MapBounds")
        layer1.append("path")
        .attr("d", "m -7.3499119,309.16075 v -7.41672 H -7.9512683 V 253.62716 H -39.154986 V 194.33221 H -80.431422 V 176.3311 h 1.623388 v -29.73703 h -21.618486 l -33.04632,-36.45605 17.19791,-23.292783 h 37.041671 V 58.780505 h 40.207218 v -75.087209 h 23.591226 V -28.815477 H 0.47247024 v -7.370535 H 2.7403274 v -8.220982 H 20.78869 v -8.031993 h 71.012277 v 15.54427 h 35.718753 v -15.54427 h 32.41145 v 36.616442 l 27.4269,45.475259 v 13.205544 h 11.83538 v 39.64124 h 8.12649 25.726 33.85249 v 71.611532 h 31.67505 v -27.62899 h 40.29088 l 19.52736,31.17031 v 52.95646 l -20.07941,27.0253 H 271.0113 v 79.46949 h -19.94062 v -11.88263 h -23.90699 v 4.44122 h 15.92224 v 63.4428 h -44.37104 v -2.07135 h -12.02713 v -15.7689 h -32.07234 v 2.87317 h -38.55363 v 21.31472 H 67.285102 v 9.68854 H 12.160763 v -36.20069 h 0.560498 v -7.75681 H 12.177468 V 309.61496 H 0.56696427 v -0.43114 z")
        .style("fill", "#e8e8e8")
        .style( "fill-opacity", "1")
        .style("stroke","#000000")
        .style("stroke-width","2")
        .style("stroke-linecap","butt")
        .style("stroke-linejoin","miter" )
        .style("stroke-miterlimit", "4")
        .style("stroke-dasharray", "none")
        .style("stroke-opacity", "1")
        .classed("svg-content-responsive", true)
        
    }
    drawInnerWalls(){
        this.svg.append("g")
        .attr("id","InnerWalls")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#InnerWalls")
        
        layer1.append("path")//1
        .attr("d", "m 262.70526,168.44675 v 53.20621 h 35.78469 v -53.22631 h -35.78454 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//2
        .attr("d", "m 227.0125,220.27083 v 17.4625 h 15.875 v 31.48542 h -43.92084 v 67.73333 h -19.05 v -20.10833 h -28.575 v 19.57917 h 0.79375 v 0.52916 h -35.98333 v -39.6875 h -12.7 v -39.42292 h 32.27917 v -12.7 H 139.7 v 12.7 h 83.87291 v -37.57083 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//3
        .attr("d", "m 193.14583,181.64167 v 12.7 h 18.25625 v -47.625 h 15.875 V 143.0125 H 228.6 v 11.64167 h 14.2875 v 30.95625 h -16.40417 v 15.61041 h 0.52917 v 0.26459 H 203.2 v 1.05833 h -0.26459 v -1.05833 h -3.96875 v 8.99583 h -7.14375 v -27.51667 h -0.52916 v -0.79375 h 0.52916 V 182.7 h 1.05834 v -1.05833 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//4
        .attr("d", "m 12.964583,265.77917 v 19.31458 h 31.220833 v 0.52917 h 23.283333 v 7.14375 h -0.529167 v 0.26458 h 1.058334 v 4.23333 H 88.370832 V 257.84166 H 77.787499 v -12.43541 h 0.529167 v -0.26459 h -1.852084 v 20.63751 H 58.208333 V 262.075 h -1.852084 v 3.175 h -3.704166 v 1.85208 h -21.43125 v -1.32291 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//5
        .attr("d", "m 56.356249,213.65625 v 39.6875 h 1.852084 v -39.6875 h 18.256249 v 12.7 h 1.322917 v -12.7 h 57.943751 v 13.22917 H 139.7 v -13.22917 h 15.875 V 190.6375 h -0.52917 v -0.52917 h -30.95625 v 15.875 h -0.52916 v 0.52917 H 100.0125 v -0.52917 h -0.529168 v -26.9875 h -3.96875 v 26.45834 h -0.529167 v 0.52916 H 60.854166 v -0.52916 h -0.79375 v 0.52916 H 48.418749 v 7.67292 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//6
        .attr("d", "m -17.197916,237.46875 v -87.3125 h -37.570833 v -43.12708 h 35.454166 V 82.6875 H 40.216666 V 119.2 h 8.466667 v 7.14375 H 29.104166 L 15.875,138.77917 v 11.37708 H -7.9374999 V 182.7 H 15.875 v 10.58333 l 12.170833,12.7 H 33.3375 v 7.67292 h -8.995834 v 23.28333 H 23.8125 v 0.52917 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//7
        .attr("d", "M -18.785416,58.610417 H -3.7041666 V 31.358334 H -11.641667 V 7.2812499 H 20.6375 V -22.0875 h -2.910417 v 21.16666667 h -36.512499 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//8
        .attr("d", "m 17.727083,-44.312498 v 10.583333 h 0.529167 v 0.264583 h 2.38125 v -10.847916 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//9
        .attr("d", "m 91.810416,-16.266666 v 7.6729161 H 124.35417 L 124.61875,23.95 h -16.93333 v 38.893751 h 2.11666 v 15.610416 h -5.29166 v 4.497917 h 11.1125 V 94.59375 h 39.68749 v 5.82083 h 2.38125 v -17.197913 -0.79375 h 4.7625 v -3.439583 h -19.05 V 58.610417 h 11.64167 V 29.770834 l -26.9875,-46.0375 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//10
        .attr("d", "M 12.964583,31.358334 V 58.610417 H 71.702082 V 119.2 h -7.937499 v 6.61458 c 0,0 0.529166,0 0.529166,0 v 0.26459 0.26458 h 23.8125 v 0.52917 h 0.264583 v -0.52917 h 6.614583 v 7.9375 h 0.529167 v 28.04583 h 3.96875 V 150.15625 H 155.575 v -20.6375 h 35.71875 v 0.52917 h 0.52916 V 154.125 h -0.52916 v 1.05833 h 0.52916 V 157.3 h -0.52916 v 1.32292 h 0.26458 v -0.52917 -0.52917 h 1.32292 v 1.5875 h 0.26458 v -29.10416 h 33.60208 v 0.52916 h 0.52917 v 2.64584 h 1.85208 v -0.26459 H 228.6 v -6.35 h -10.31875 l -11.37709,-11.64166 v -4.23334 h -1.85208 V 125.55 h -18.25625 v -0.52917 h -6.61458 v -0.52916 h -0.52917 V 125.55 h -21.96042 v -13.75833 h -2.38125 v 3.175 H 115.62292 V 122.375 H 83.608332 V 82.952084 H 95.249999 V 78.454167 H 83.608332 V 62.843751 h 8.466667 V 30.829168 h -7.9375 l 0.264583,19.579166 h -0.529166 v 0.529167 H 28.575 V 50.408334 H 28.045833 V 31.622918 H 28.575 v -0.264584 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//11
        .attr("d", "M -18.785416,58.610417 H -3.7041666 V 31.358334 H -11.641667 V 7.2812499 H 20.6375 V -22.0875 h -2.910417 v 21.16666667 h -36.512499 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//12
        .attr("d", "m 199.23125,78.983334 h -19.05 v 3.439583 h 17.4625 v 0.529167 h 0.52916 1.05834 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//13
        .attr("d", "m 204.52291,82.422917 v 7.408333 h 0.52917 v 8.466667 h 1.85208 v -3.175 h 0.52917 v -0.79375 h -0.52917 v -3.439583 h 0.52917 v -0.79375 h -0.52917 v -7.672917 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//14
        .attr("d", "m 198.96666,309.43542 h 11.64167 v -3.96875 h -11.64167 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//15
        .attr("d", "m 198.96666,309.43542 h 11.64167 v -3.96875 h -11.64167 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//16
        .attr("d", "m 198.96666,309.43542 h 11.64167 v -3.96875 h -11.64167 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//17
        .attr("d", "m 198.96666,309.43542 h 11.64167 v -3.96875 h -11.64167 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//doors
        .attr("d", "m 137.31874,245.14167 -1.05834,-1e-5 -3.175,-6.87917 1.05834,10e-6 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//Doors
        .attr("d", "m 142.6104,233.76458 h -1.05833 l -4.23334,-6.87917 1.05834,1e-5 z")
        .style("fill", "#000000")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

    }
    drawSites(){
        this.svg.append("g")
        .attr("id","SpikeSites")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#SpikeSites")

        layer1.append("path")//Site A
        .attr("d", "M 70.379166,5.1645833 V -51.720831 h -49.2125 v 7.9375 H 20.6375 V 5.1645833 c 12.269238,0 34.436346,0 49.741666,0 z")
        .style("fill", "#ae8d3c")
        .style("stroke", "#ae8d3c")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//Site B
        .attr("d", "M 31.485416,193.54792 H 80.962499 V 138.77917 H 31.485416 Z")
        .style("fill", "#ae8d3c")
        .style("stroke", "#ae8d3c")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//Site C
        .attr("d", "m 12.964583,388.28125 h 54.768749 v -24.07708 h 0.79375 v -46.83125 h -0.79375 v -7.9375 H 12.7 Z")
        .style("fill", "#ae8d3c")
        .style("stroke", "#ae8d3c")
        .style("stroke-linejoin", "miter")
    }
    drawObstacles(){
        //24 obstacles according to svg doc
        this.svg.append("g")
        .attr("id","Ground2")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#Ground2")

        layer1.append("path")//1
        .attr("d", "m 235.47916,237.73333 v -8.46666 h -4.23333 v -3.70417 h -4.23333 v 12.17083 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//2
        .attr("d", "m 203.2,202.54375 v 15.34583 h -11.90625 v -7.40833 h 7.67291 v -8.99583 H 203.2 Z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//3
        .attr("d", "M 265.90625,126.34375 H 254.26458 V 94.858333 H 206.90416 V 90.625 h 51.85834 v 32.01458 h 7.40833 v 3.70417 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//4
        .attr("d", "m 266.17083,122.375 h -7.14375 V 90.360417 h -52.3875 v -7.14375 L 267.22916,82.6875 v 39.6875 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//5
        .attr("d", "m 175.41875,249.375 v -3.70417 h 3.96875 v 3.70417 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//6
        .attr("d", "M 191.82291,186.40417 179.3875,186.13958 V 154.125 h 12.43541 v 3.175 h -8.99583 v 25.4 h 8.99583 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//7
        .attr("d", "m 183.09166,182.43542 v -24.87084 h 8.20209 v 24.87084 c 2.40263,0 -7.85867,0 -8.20209,0 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//8
        .attr("d", "m 148.43125,150.15625 v 7.9375 h 7.14375 v -7.9375 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//9
        .attr("d", "m 92.604166,122.375 v -7.9375 h -9.260417 v 7.9375 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//10
        .attr("d", "m 83.872916,126.34375 v 4.23333 h 4.497916 v -4.23333 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//11
        .attr("d", "m 77.787499,225.5625 h 7.9375 v 0.52917 h 0.529167 v 19.31458 h -0.529167 v 0.52916 h -7.14375 -0.264583 v -3.70416 h 5.291666 v -12.96458 h -5.820833 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//12
        .attr("d", "m 78.316666,241.96666 h 5.027083 v -12.43541 h -5.55625 v 12.43541 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//13
        .attr("d", "m 207.43333,305.46667 v -7.9375 h -8.46667 v 7.9375 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//14
        .attr("d", "M 198.96666,293.29583 H 203.2 v 4.23334 h -4.23334 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//15
        .attr("d", "m 152.13541,336.6875 h 19.84375 v -11.90625 h 7.9375 v -7.9375 h -27.78125 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//16
        .attr("d", "m 43.920833,285.09375 v 8.46667 h 8.202083 v -8.46667 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//17
        .attr("d", "m 52.387499,285.09375 v 8.46667 h 15.08125 v -8.46667 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//18
        .attr("d", "M 67.733332,378.75625 V 364.73333 H 44.185416 v 23.54792 h 22.225 v -9.525 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//19
        .attr("d", "m 43.920833,388.28125 v -3.43958 h -7.14375 v 3.43958 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//20
        .attr("d", "M 30.691666,82.6875 V 74.75 h -8.202083 v 7.9375 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//21
        .attr("d", "M 18.25625,82.6875 H 22.225 v -4.233333 h -3.96875 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//22
        .attr("d", "m 28.575,-51.720831 v 7.672916 h -7.408334 v -7.672916 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//23
        .attr("d", "m -95.249999,145.65833 v -6.35 h -10.583331 l 5.82083,6.35 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//24
        .attr("d", "m -109.00833,87.714584 v 2.116666 h 12.699998 v -2.116666 z")
        .style("fill", "#505050")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")
    }
    drawHighestObstacles(){
        //21 obstacles 
        this.svg.append("g")
        .attr("id","Ground3")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#Ground3")

        layer1.append("path")//1
        .attr("d", "m 52.122916,11.25 -8.995833,-30.95625 9.260416,-2.645833 8.73125,30.9562495 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//2
        .attr("d", "m 91.810416,-16.266666 v -0.529167 h -7.9375 V -0.65625 h 15.081249 v -7.9374999 h -7.143749 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//3
        .attr("d", "m 159.01458,-16.002083 -6.35,2.910416 4.49792,7.6729171 5.82083,-3.96875 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//4
        .attr("d", "m 187.58958,43.529167 v 3.439584 h 3.175 v 2.645833 h 7.67292 v -6.085417 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//5
        .attr("d", "m 205.05208,90.360417 h -7.40833 v -7.408333 h 7.40833 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//6
        .attr("d", "M 179.65208,125.28542 V 114.4375 h 7.67292 v 10.05417 h -1.05834 V 125.55 h -6.61458 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//7
        .attr("d", "m 266.17083,146.71667 h -7.14375 v 7.67291 h 7.14375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//8
        .attr("d", "m 242.8875,269.21875 v 0.26458 h 7.9375 v -7.9375 h -7.9375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//9
        .attr("d", "M 179.3875,257.57708 V 249.375 h -8.20209 v 8.73125 h 8.20209 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//10
        .attr("d", "m 110.33125,213.65625 v 7.9375 h 7.14375 v -7.9375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//11
        .attr("d", "M 90.487499,30.829168 V 23.95 h -6.614583 v 6.879168 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//12
        .attr("d", "M -3.7041666,7.2812499 V 14.689583 H -11.90625 V 7.2812499 Z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//13
        .attr("d", "m 116.15208,329.01458 h -7.9375 v -7.67291 h 7.9375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//14
        .attr("d", "m 13.49375,352.82708 h 6.614583 v -7.67291 H 13.49375 Z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//15
        .attr("d", "m 0.52916666,308.37708 v -7.14375 H -6.6145832 v 7.14375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//16
        .attr("d","m 52.122916,341.45 h 7.672917 v -32.27917 h -7.9375 V 341.45 Z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//17
        .attr("d","m 60.060416,309.17083 h 7.672916 v 7.67292 h -7.672916 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//18
        .attr("d","m 60.060416,205.45417 v -7.40834 h 35.454166 v 7.40834 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//19
        .attr("d","m 64.029166,185.61042 h -19.84375 v -38.89375 h 19.84375 v 11.64166 h 7.9375 v 15.34584 h -7.9375 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//20
        .attr("d","m 14.022916,174.49792 h 2.910417 v -16.66875 h -2.910417 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//21
        .attr("d","m 95.249999,134.28125 h -6.614583 v -7.9375 h 6.614583 z")
        .style("fill", "#ff00ff")
        .style("stroke", "#ff00ff")
        .style("stroke-linejoin", "miter")
    }
    drawWindows(){
        this.svg.append("g")
        .attr("id","Windows")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#Windows")

        layer1.append("path")//1
        .attr("d", "m 191.02916,181.1125 h 2.91042 v -21.16667 h -2.91042 z")
        .style("fill", "#2ab4dc")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//1
        .attr("d", "m 78.316666,244.87708 h -2.38125 v -18.25625 h 2.38125 z")
        .style("fill", "#2ab4dc")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//1
        .attr("d", "M 17.727083,-22.0875 H 20.6375 v -11.377082 h -2.910417 z")
        .style("fill", "#2ab4dc")
        .style("stroke", "#000000")
        .style("stroke-linejoin", "miter")
        
    }
    drawBuyBarriers(){
        this.svg.append("g")
        .attr("id","Barrier")
        .attr("transform", "translate(134.76376 53.438987)")
        
        let layer1 = d3.select("#Barrier")

        layer1.append("path")//1
        .attr("d", "m 121.17917,-16.266666 h 1.05833 v -20.637499 h -1.05833 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//2
        .attr("d","m 108.74375,257.84166 h 1.32292 v -44.18541 h -1.32292 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//3
        .attr("d","m 116.15208,358.11875 h 1.32292 v -21.16667 h -1.32292 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//4
        .attr("d","m 210.60833,306.525 v 1.32292 h 16.66875 V 306.525 Z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//5
        .attr("d","m 224.89583,220.27083 h 1.32292 v -18.78541 h -1.32292 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//6
        .attr("d","m 193.14583,146.98125 v 1.32292 h 18.25625 v -1.32292 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//7
        .attr("d","m 96.837499,162.32708 v 16.66875 h 1.322916 v -16.66875 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//8
        .attr("d","m 205.31666,110.73333 h 1.32292 V 98.297917 h -1.32292 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")

        layer1.append("path")//9
        .attr("d","m 92.074999,30.829168 v 1.322916 h 15.610421 v -1.322916 z")
        .style("fill", "#0000ff")
        .style("stroke", "#0000ff")
        .style("stroke-linejoin", "miter")
    }
    render(){
        return <div className="svg-container splitter">
                <svg className="svg-content-responsive" preserveAspectRatio="xMinYMin meet"
                    viewBox={"0 0 " +this.props.width + " " + this.props.height}
                    ref={element => (this.svg = d3.select(element))}>
                </svg>       
        </div>
    }
}
export default Haven