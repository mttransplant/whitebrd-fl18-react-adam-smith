import React, {Component} from "react"
import {Route} from 'react-router-dom'
import ModuleList from "../components/ModuleList";

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
                        <ModuleList course={this.state.course}/>
                    </div>
                    <div className="col-8">Lesson Tabs</div>
                </div>
            </div>
        )
    }
}