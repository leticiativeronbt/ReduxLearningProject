import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activeJob } from '../actions/index'
import { bindActionCreators } from 'redux'

class JobDetail extends Component{
  render(){
    if(!this.props.job){
      return <div>Select a Job to get started.</div>
    }

    return(
      <div>
        <h3>Job details</h3>
        <div>Title: {this.props.job.title}</div>
        <div>Company: {this.props.job.company}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    job: state.activeJob
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ activeJob: activeJob }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail)
