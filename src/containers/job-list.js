import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectJob, getJobs } from '../actions/index'
import { bindActionCreators } from 'redux'

class JobList extends Component{
    componentDidMount () {
        this.props.getJobs()
    }
    renderList () {
        return this.props.jobs.map((job) => 
            <li 
                key={job.id} 
                onClick={() => this.prop.selectJob(job)}
                className='list-group-item'>
                {job.title}
            </li>
        )
    }
    
    render () {
        if (!this.props.jobs) {
            return <div>Loading jobs...</div>
        }

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    console.log('state:', state)
    return {
        jobs: state.jobs
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectJob, getJobs }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)