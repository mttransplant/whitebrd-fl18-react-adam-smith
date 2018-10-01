import React, {Component} from "react"
import {Link, Route} from 'react-router-dom'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";

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
                <nav className="navbar fixed-top text-white bg-dark navbar-dark justify-content-start">
                    <Link to="/course/table" className="btn btn-dark nav-item"><h4>X</h4></Link>
                    <h4>{this.state.course.title}</h4>
                    {console.log(this.state.selectedModule.lessons)}
                    <LessonTabs

                        selectedModule = {this.state.selectedModule}
                        selectedLesson = {this.state.selectedLesson}
                        selectLesson = {this.selectLesson}/>
                </nav>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            course = {this.state.course}
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            updateModules={this.props.updateModules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        )
    }
}