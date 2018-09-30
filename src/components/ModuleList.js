import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CourseRow from "./CourseRow";
import ModuleListItem from "./ModuleListItem";

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
                <div className="nav-pad bg-dark">
                    <ul className="list-group">
                        <li className="list-group-item active">
                            Modules
                        </li>
                        {
                            this.state.course.modules.map((module, index) =>
                                (
                                    <ModuleListItem
                                        key={index}
                                        module={module}/>
                                ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

