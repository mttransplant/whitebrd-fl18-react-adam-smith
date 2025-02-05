import React, {Component} from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseService from "../services/CourseService"
import CourseTable from "./CourseTable"
import CourseGrid from "./CourseGrid"
import CourseEditor from "./CourseEditor"

export default class WhiteBoard extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    createCourse = title => {
        const newCourse = {
            title: title,
            id: (new Date()).getTime().toString()
        }
        this.courseService.createCourse(newCourse)
        this.setState({
            courses:this.courseService.findAllCourses()
        })
    }
    deleteModule = module => {
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    updateModules = (courseId,modules) => {
        this.courseService.updateModules(courseId, modules)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    addLesson = (moduleId,lesson) => {
        this.courseService.addLesson(moduleId,lesson)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    addTopic = (lessonId, topic) => {
        this.courseService.addTopic(lessonId, topic)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
        this.setState({
            courses:this.courseService.findAllCourses()
        })
    }
    createWidget = (topicId, widget) => {
        this.courseService.createWidget(topicId, widget)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    findWidgets = (topicId) => {
        this.courseService.findWidgets(topicId)
    }
    findWidget = (widgetId) => {
        this.courseService.findWidget(widgetId)
    }
    updateWidget = (widgetId, widget) => {
        this.courseService.updateWidget(widgetId, widget)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    deleteWidget = (widgetId) => {
        this.courseService.deleteWidget(widgetId)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Route exact
                               path="/"
                               render={() =>
                                   <CourseTable
                                       createCourse={this.createCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
                               }/>
                        <Route path="/course/table"
                               render={() =>
                                   <CourseTable
                                       createCourse={this.createCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
                               }/>
                        <Route path="/course/grid"
                               render={() =>
                                   <CourseGrid
                                       createCourse={this.createCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route exact
                               path="/course/:courseId/edit"
                               render={(props) =>
                                   <CourseEditor
                                       {...props}
                                       addLesson={this.addLesson}
                                       addTopic={this.addTopic}
                                       updateModules={this.updateModules}
                                       deleteModule={this.deleteModule}
                                       courses={this.state.courses}/>}/>

                    </div>

                </Router>
            </div>

        )
    }
}