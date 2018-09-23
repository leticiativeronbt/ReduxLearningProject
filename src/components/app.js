import React, { Component } from 'react'

import JobList from '../containers/job-list'
import JobDetail from '../containers/job-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <JobList />
        <JobDetail />
      </div>
    )
  }
}
