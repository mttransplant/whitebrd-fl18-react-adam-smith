import React, {Component} from "react"
import {Link} from 'react-router-dom'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

//Note: Much of this is from https://github.com/jannunzi/webdev-fall-2018/blob/master/src/components/CourseEditor.js

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;
        const course = this.props.courses.find(
            course => course.id === courseId
        );

        const selectedModule = course.hasOwnProperty("modules") ? course.modules[0] : {modules:[]};
        // console.log(selectedModule)
        const selectedLesson = selectedModule.hasOwnProperty("lessons") ? selectedModule.lessons[0] : {lessons:[]};
        // console.log(selectedLesson)
        const selectedTopic = selectedLesson.topics[0]
        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic: selectedTopic
        }
        this.checkStructure(course)
    }

    checkStructure = course => {
        if (!course.hasOwnProperty("modules")) {
            console.log(course.title+": this course Doesn't have modules")
            this.addModule()
        }
        if (!course.modules[0].hasOwnProperty("lessons")) {
            console.log(course.modules[0].title+": this module Doesn't have lessons")
            this.addLesson()
        }
        // if (!course.modules[0].lessons[0].hasOwnProperty("topics")) {
        //     console.log(course.modules[0].lessons[0].title+": this lesson doesn't have topics")
        //     this.addTopic()
        // }

    }
    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: this.state.selectedModule.lessons[0]
        })
    }

    addModule = () => {
        let newModule = {
            title: "New Module",
            id: (new Date()).getTime().toString(),
            lessons: [{
                title: "New Lesson",
                id: (new Date()).getTime().toString(),
                topics: [{
                    title: "New Topic",
                    id: (new Date()).getTime().toString(),
                    widgets: []
                }]
            }]
        }
        this.props.addModule(this.state.course.id,newModule)
        let newCourse = this.props.courses.find(
            course => course.id === this.courseId
        );
        newModule = newCourse.modules[0];
        this.setState({
            course: newCourse,
            selectedModule: newModule
        })
    }

    addLesson = () => {
        let newLesson = {
            title: "New Lesson",
            id: (new Date()).getTime().toString(),
            topics: [{
                title: "New Topic",
                id: (new Date()).getTime().toString(),
                widgets: []
            }]
        }
        // var newModule = this.state.selectedModule
        // newModule.lessons.push(lesson)
        this.props.addLesson(this.state.selectedModule.id,newLesson)
        // let newCourse = this.props.courses.find(
        //     course => course.id === this.courseId
        // );
        // let newModule = newCourse.modules[0];
        // newLesson = newModule.lessons[0];
        this.setState({
            // course: newCourse,
            // selectedModule: newModule,
            selectedLesson: newLesson
        })
    }
    addTopic = () => {
        let newTopic = {
            title: "New Topic",
            id: (new Date()).getTime().toString(),
            widgets: []
        }
        this.props.addTopic(this.state.selectedLesson.id,newTopic)
        // let newCourse = this.props.courses.find(
        //     course => course.id === this.courseId
        // );
        // let newModule = newCourse.modules[0];
        // let newLesson = newModule.lessons[0];
        this.setState({
            // course: newCourse,
            // selecteModule: newModule,
            // selectedLesson: newLesson
            selectedTopic: newTopic
        })
    }

    render() {
        return(
            <div>
                <nav className="navbar fixed-top text-white bg-dark navbar-dark justify-content-start">

                    <Link to="/course/table" className="col-1 btn btn-dark nav-item fa fa-times fa-2x"/>
                    <h3 className="nav-item col-3 my-1">{this.state.course.title}</h3>
                    <LessonTabs
                        selectedModule = {this.state.selectedModule}
                        selectedLesson = {this.state.selectedLesson}
                        selectLesson = {this.selectLesson}
                        addLesson = {this.addLesson}/>
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
                        <TopicPills
                            selectedLesson = {this.state.selectedLesson}
                            selectedTopic={this.state.selectedTopic}
                            selectTopic={this.selectTopic}
                            addTopic = {this.addTopic}/>
                    </div>
                </div>
            </div>
        )
    }
}