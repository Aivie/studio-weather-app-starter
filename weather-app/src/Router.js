// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Weekly</Link></li>
//         <li><Link to="/daily">Daily</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Weekly}/>
//       <Route path="/daily" component={Daily}/>
//     </div>
//   </Router>
// )

// const Weekly = () => (
//   <div>
//     <h2>Week</h2>
//     <ul>
//         <li>Monday</li>
//         <li>Tuesday</li>
//         <li>Wednesday</li>
//         <li>Thursday</li>
//         <li>Friday</li>
//         <li>Saturday</li>
//         <li>Sunday</li>
//     </ul>
//   </div>
// )

// const Daily = () => (
//   <div>
//     <h2>Daily</h2>
//     <h3>February 12, 2018</h3>
//     <p>1AM</p>
//     <p>2AM</p>
//     <p>3AM</p>
//     <p>4AM</p>
//     <p>5AM</p>
//     <p>6AM</p>
//     <p>7AM</p>
//     <p>8AM</p>
//     <p>9AM</p>
//     <p>10AM</p>
//     <p>11AM</p>
//     <p>12PM</p>
//     <p>1PM</p>
//     <p>2PM</p>
//     <p>3PM</p>
//     <p>4PM</p>
//     <p>5PM</p>
//     <p>6PM</p>
//     <p>7PM</p>
//     <p>8PM</p>
//     <p>9PM</p>
//     <p>10PM</p>
//     <p>11PM</p>
//     <p>12PM</p>
//   </div>
// )

// // const Topics = ({ match }) => (
// //   <div>
// //     <h2>Topics</h2>
// //     <ul>
// //       <li>
// //         <Link to={`${match.url}/rendering`}>
// //           Rendering with React
// //         </Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/components`}>
// //           Components
// //         </Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/props-v-state`}>
// //           Props v. State
// //         </Link>
// //       </li>
// //     </ul>

// //     <Route path={`${match.url}/:topicId`} component={Topic}/>
// //     <Route exact path={match.url} render={() => (
// //       <h3>Please select a topic.</h3>
// //     )}/>
// //   </div>
// // )

// // const Topic = ({ match }) => (
// //   <div>
// //     <h3>{match.params.topicId}</h3>
// //   </div>
// // )

// export default BasicExample