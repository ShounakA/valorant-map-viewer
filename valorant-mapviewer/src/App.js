import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Haven from "./Map";

class App extends Component{
  constructor(props){
      super(props);
      this.atkRef = React.createRef()
      this.defRef = React.createRef()
      this.state = {
        isBuyChecked: true,
        resetCallable: null,
        currentTeam: 'attack',
        agents: [{name:'Breach',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/breach/breach-cutout2-compressed.png', color: '#9E644B',refs: React.createRef() , callable:null}
                ,{name:'Brimstone',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/brimstone/brimstone-cutout-compressed.png', color: '#468EB7',refs: React.createRef(),callable:null}
                ,{name:'Cypher',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/cypher/cypher-cutout-compressed.png',color:'#A9AD96',refs: React.createRef(),callable:null}
                ,{name:'Jett',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/jett/jett-cutout3-compressed.png',color:'#55D1E0',refs: React.createRef(),callable:null}
                ,{name:'Omen',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/omen/omen-cutout-compressed.png',color:'#543EFF',refs: React.createRef(),callable:null}
                ,{name:'Pheonix',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/phoenix/phoenix-cutout-compressed.png',color:'#F0753A',refs: React.createRef(),callable:null}
                ,{name:'Raze',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/raze/raze-cutout-compressed.png',color:'#F6AD40',refs: React.createRef(),callable:null}
                ,{name:'Sage',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/sage/sage-cutout-compressed.png',color:'#21CEAF',refs: React.createRef(),callable:null}
                ,{name:'Sova',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/sova/sova-cutout-compressed.png',color:'#325FFF',refs: React.createRef(),callable:null}
                ,{name:'Viper',cdn:'https://blitz-cdn.blitz.gg/blitz/val/agents/viper/viper-cutout-compressed.png',color:'#2AC849',refs: React.createRef(),callable:null}],
      }
  }
  handleChange(e){
    this.setState({isBuyChecked: e.target.checked})
  };
  setResetCallable(callable){
    this.setState({resetCallable:callable})
  }
  setAgentCallables(callables){
    let temp = this.state.agents
    for (let i=0;i<temp.length;i++){
      temp[i].callable=callables[i]
    }
    this.setState({agents:temp})
  }
  handlePanReset(event){
    this.state.resetCallable.resetPan(event);
  }
  handleAgent(key){
    let agent =this.state.agents[key]
    console.log(agent)
    agent.callable.addPlayer(key,this.state.currentTeam,agent.color, agent.name)
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
      <div className="agent-button" style={{background:item.color}} onClick={this.handleAgent.bind(this, key)}>
        <img ref={item.refs} width={80} height={52} className="agent-img" id={"btn"+ item.name} src={item.cdn} onPointerEnter={this.handleHoverOn.bind(this,item.refs)} onPointerLeave={this.handleHoverOff.bind(this,item.refs)}/><br/>
        <label className="" to={"btn"+item.name}>{item.name}</label>
      </div>
    )
  }
  setAttack(event){
    this.setState({currentTeam:'attack'})
    this.atkRef.current.style={background:'#FF5859'}
    this.defRef.current.style={background:null}
  }
  setDefense(event){
    this.setState({currentTeam:'defense'})
    this.defRef.current.style={background:'#24E8AD'}
    this.atkRef.current.style={background:null}
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="splitter">
          <div id="config">
            <label to="barrier">Barrier ON/OFF</label>
            <input id="barrier" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.isBuyChecked}/>
            <br/>
            <button onClick={this.handlePanReset.bind(this)}>Reset</button><br/>
            <button ref={this.atkRef} onClick={this.setAttack.bind(this)}>Attackers</button>
            <button ref={this.defRef} onClick={this.setDefense.bind(this)}>Defenders</button>
            <div className="agents">
              {this.renderAgents()}
            </div>
          </div>
          <Haven width={"495"} height={"444"} isBuyPeriod={this.state.isBuyChecked} setResetCallable={this.setResetCallable.bind(this)} setAgentCallables={this.setAgentCallables.bind(this)}/>
        </div>
      </div>
    );
  }

}

export default App;
