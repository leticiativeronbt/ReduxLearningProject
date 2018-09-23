import React, { Component } from 'react'

import Navbar from './NavBar'
import JobList from '../containers/JobList'
import JobDetail from '../containers/JobDetail'

import './stylus/main.styl'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <JobList />
        <JobDetail />
      </div>
    )
  }
}
