import './App.css';
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails.js';
import Resume from './Resume.js';
class App extends Component {
  constructor() {
    super();

    // let's get this working with just name for now
    this.state = {
      name: ""
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
          <form>
            <input type="text" onChange={this.handleChange} id="name" placeholder="Name" />
          </form>
          <h1>A section to add your eductational experience (school name, title of study, date of study)</h1>
          <h1>A section to add your practice experience (company name, position title, main tasks, etc)</h1>
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
