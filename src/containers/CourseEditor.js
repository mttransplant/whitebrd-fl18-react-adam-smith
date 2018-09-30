import React, {Component} from "react"
import {Route} from 'react-router-dom'

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;
        const course = this.props.courses.find(
            course => course.id === courseId
        );

        this.state = {
            course: course
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <h2>{this.state.course.title}</h2>
                        <p>Module List</p>
                    </div>
                    <div className="col-8">Lesson Tabs</div>
                </div>
            </div>
        )
    }
}