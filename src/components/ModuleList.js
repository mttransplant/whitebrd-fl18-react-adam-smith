import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ModuleList extends Component {
    constructor(props) {
        super(props)
        const course = this.props.course

        this.state = {
            course: course
        }
    }
    render() {
        return(
            <div>
                <nav className="navbar fixed-top text-white bg-dark navbar-dark justify-content-start">
                    <Link to="/course/table" className="btn btn-dark"><h4>X</h4></Link>
                    <h4>{this.state.course.title}</h4>
                </nav>
                <div className="nav-pad">
                    <p>Module List</p>
                </div>
            </div>
        )
    }
}

