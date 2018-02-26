import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import getForecast from './weatherData.js';

class WeekPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: []
    };
  }
}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
    </div>
  </Router>
)

const Weekly = () => (
  <div>
    <h2>Week</h2>
    <ul>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
    </ul>
  </div>
)

export default BasicExample