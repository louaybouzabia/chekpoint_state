import React, { Component } from 'react';
import photo from "./11223344.png";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: ' louay',
        bio: 'student',
        imgSrc: photo,
        profession: ' student'
      },
      shows: true,
      mountingTime: 0,
    }
  }

  componentDidMount() { setInterval(() => { this.setState({ mountingTime: this.state.mountingTime++ }) }, 1000) }
  change = () => {
    this.setState({ shows: !this.state.shows })
  }
  render (){
    return (
      <div>
        {this.state.shows ? <>
          hello im {this.state.Person.fullName}, i am a 
           {this.state.Person.bio}<br></br>
          <img style={{height:"500px"}} src={this.state.Person.imgSrc} ></img>
          <h1>{this.state.mountingTime}</h1>
        </> : null
        }
        <button onClick={this.change}>show</button>
      </div>
    )}}