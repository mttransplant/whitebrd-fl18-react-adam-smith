import React, {Component} from "react"
import {Route} from 'react-router-dom'
import ModuleList from "../components/ModuleList";

//Note: Much of this is from https://github.com/jannunzi/webdev-fall-2018/blob/master/src/components/CourseEditor.js

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;
        const course = this.props.courses.find(
            course => course.id === courseId
        );
        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson
        }
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            course = {this.state.course}
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            updateModules={this.props.updateModules}/>
                    </div>
                    <div className="col-8">Lesson Tabs</div>
                </div>
            </div>
        )
    }
}