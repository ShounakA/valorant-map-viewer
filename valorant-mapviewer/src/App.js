import React, { Component } from "react";
import './App.css';
import Map from "./Components/Map";
import Agent from "./Components/Agent";
class App extends Component{
  constructor(props){
      super(props);
      this.atkRef = React.createRef()
      this.defRef = React.createRef()
      this.state = {
        isBuyChecked: true,
        resetCallable: null,
        mapCallable: null,
        maps: [{name:'Select a Map',file:''},{name:'Bind',file:'bind-map.svg'},{name:'Haven', file:'haven-map.svg'},{name:'Split', file:'split-map.svg'}],
        mapRef: React.createRef(),
        currentTeam: 'attack',
        currentMap:'',
        players: {attack:[],defense:[]},
        agents: [{name:'Breach',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/breach/breach-cutout2-compressed.png', color: '#9E644B',refs: React.createRef()}
                ,{name:'Brimstone',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/brimstone/brimstone-cutout-compressed.png', color: '#468EB7',refs: React.createRef()}
                ,{name:'Cypher',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/cypher/cypher-cutout-compressed.png',color:'#A9AD96',refs: React.createRef()}
                ,{name:'Jett',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/jett/jett-cutout3-compressed.png',color:'#55D1E0',refs: React.createRef()}
                ,{name:'Omen',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/omen/omen-cutout-compressed.png',color:'#543EFF',refs: React.createRef()}
                ,{name:'Pheonix',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/phoenix/phoenix-cutout-compressed.png',color:'#F0753A',refs: React.createRef()}
                ,{name:'Raze',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/raze/raze-cutout-compressed.png',color:'#F6AD40',refs: React.createRef()}
                ,{name:'Sage',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/sage/sage-cutout-compressed.png',color:'#21CEAF',refs: React.createRef()}
                ,{name:'Sova',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/sova/sova-cutout-compressed.png',color:'#325FFF',refs: React.createRef()}
                ,{name:'Viper',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/viper/viper-cutout-compressed.png',color:'#2AC849',refs: React.createRef()}],
      }
  }
  handleChange(e){
    this.setState({isBuyChecked: e.target.checked})
  };
  handlePanReset(event){
    this.resetPan(event);
  }
  handleAgent(key){
    let team = this.state.currentTeam
    let agent =this.state.agents[key]
    let players = this.state.players
    let found = false;
    let isAgentOnField = (name) => {
      console.log('Trying to add '+name)
      players[team].forEach(curragent => {
        if (curragent.name === name){
          found=true;
        }
      });
      return found;
    }
    var isOnField = isAgentOnField(agent.name);
    if (players[team].length<5 && !isOnField){
        let curragent = {cdn:agent.cdn, name:agent.name};
        players[team].push(curragent)
        this.setState({players:players})
    }else{
      console.log('Team full or Agent already on map')
    }
    
  }
  handleHoverOn(ref){
    ref.current.width =84
    ref.current.height=56
  }
  handleHoverOff(ref){
    ref.current.width =80
    ref.current.height=52
  }
  renderAgents(){
    return this.state.agents.map((item,key)=>
      <div key={key} className="agent-button" style={{background:item.color}} onClick={this.handleAgent.bind(this, key)}>
        <img ref={item.refs} width={80} height={52} className="agent-img" id={"btn"+ item.name} src={item.cdn} onPointerEnter={this.handleHoverOn.bind(this,item.refs)} onPointerLeave={this.handleHoverOff.bind(this,item.refs)} alt={item.name}/><br/>
        <label className="" to={"btn"+item.name}>{item.name}</label>
      </div>
    )
  }
  renderAttackFieldAgents(){
    if (this.state.players.attack.length>0){
      return this.state.players.attack.map((item,key)=> 
        <Agent name={item.name} cdn={item.cdn} team='attack' key={item.name} onDelete={this.removeFieldAgent.bind(this)}/>
      );
    }else{
      return <h4>No Attackers on Field</h4>
    }

  }
  renderDefenseFieldAgents(){
      if (this.state.players.defense.length>0){
        return this.state.players.defense.map((item,key)=> 
          <Agent name={item.name} cdn={item.cdn} team='defense' key={item.name} onDelete={this.removeFieldAgent.bind(this)}/>
        );
      }
      else{
        return <h4>No Defenders on Field</h4>
      }
  }
  setAttack(event){
    this.setState({currentTeam:'attack'})
  }
  setDefense(event){
    this.setState({currentTeam:'defense'})
  }
  renderMapSelection(){
    return this.state.maps.map( (item, index) => (index===0)? <option hidden disabled selected key={index} value={item.file}>{item.name}</option>:<option key={index} value={item.file}>{item.name}</option> )
  }
  onMapChange(event){
    var lowerName = event.target.value.split("-")[0]
    var mapName = (lowerName.substr(0,1)).toUpperCase() + lowerName.substr(1,lowerName.length)
    this.setState({players: {attack:[],defense:[]}})
    this.setState({currentMap:mapName});
  }
  removeFieldAgent(name, team){
    let players = this.state.players
    console.log('Trying to remove ' + name + ' ' + 'from ' + team)
    const tempTeam = this.state.players[team].filter( item => item.name !== name);
    players[team]=tempTeam;
    this.setState({players:players})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="splitter">
          <div id="config">
            <select onChange={this.onMapChange.bind(this)}>
              {this.renderMapSelection()}
            </select>
            <label to="barrier">Barrier ON/OFF</label>
            <input id="barrier" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.isBuyChecked}/>
            <br/>
            <button onClick={this.handlePanReset.bind(this)}>Reset</button><br/>
            <Map mapRef={this.state.mapRef} width={"908"} height={"908"} isBuyPeriod={this.state.isBuyChecked} map={this.state.currentMap}/>
            <button ref={this.atkRef} onClick={this.setAttack.bind(this)}>Attackers</button>
            <button ref={this.defRef} onClick={this.setDefense.bind(this)}>Defenders</button>
            <div className="agents">
              {this.renderAgents()}
            </div>
            <div>
              <h3>Attack</h3>
              {this.renderAttackFieldAgents()}
            </div>
            <div>
              <h3>Defense</h3>
              {this.renderDefenseFieldAgents()}
            </div>
          </div >
          <div id="map-canvas" ref={this.state.mapRef} className="svg-container splitter">
            
          </div>
        </div>
      </div>
    );
  }

}

export default App;
