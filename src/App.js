import './App.css';
import React, { Component } from 'react';
import Resume from './Resume.js';

class App extends Component {
  constructor() {
    super();

    // let's get this working with just name for now
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      city: "",
      phoneNumber: "",
      experience: [
        {
          Company: "",
          Title: "",
          StartDate: "",
          EndDate: "",
          Description: "",
        }
      ], // lists of objects, a button creates a new instance
      education: [],
      certifications: [],
      skills: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //Method that watches form input
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="section" id="input">
          <h1>General Information</h1>
          <form id="topForm">
            <input type="text" onChange={this.handleChange} id="firstName" placeholder="First Name" />
            <input type="text" onChange={this.handleChange} id="lastName" placeholder="Last Name" />
            <input type="email" onChange={this.handleChange} id="emailAddress" placeholder="E-mail" />
            <input type="tel" onChange={this.handleChange} id="phoneNumber" placeholder="Phone" />
            <input type="text" onChange={this.handleChange} id="city" placeholder="City" />
          </form>

          <h1>Work History</h1>
          <form id="middleForm">
          </form>

          <h1>Education</h1>
          <form id="bottomForm">
          </form>

          <h1>Certifications</h1>
          <form id="certForm">
          </form>

          <h1>Skills</h1>
          <p>gotta figure out how this part is gonna work</p>
        </div>
        <div className="section" id="output">
          <Resume info={this.state} />
          <h1>This is where the output goes</h1>
        </div>
      </div>
    );
  }
}

export default App;
