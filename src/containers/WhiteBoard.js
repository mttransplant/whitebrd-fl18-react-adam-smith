import React, {Component} from "react"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
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

    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Route exact
                               path="/"
                               render={() =>
                                   <CourseTable
                                       courses={this.state.courses}/>
                               }/>
                        <Route path="/course/table"
                               render={() =>
                                   <CourseTable
                                       courses={this.state.courses}/>
                               }/>
                        <Route path="/course/grid"
                               render={() =>
                                   <CourseGrid
                                       courses={this.state.courses}/>}/>
                        <Route exact
                               path="/course/:courseId/edit"
                               render={(props) =>
                                   <CourseEditor
                                       {...props}
                                       updateModules={this.updateModules}
                                       deleteModule={this.deleteModule}
                                       courses={this.state.courses}/>}/>

                    </div>

                </Router>
            </div>

        )
    }
}