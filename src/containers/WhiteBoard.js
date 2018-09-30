import React, {Component} from "react"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService"
import CourseTable from "./CourseTable"
import CourseGrid from "./CourseGrid"
import "./WhiteBoard.style.client.css"

export default class WhiteBoard extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
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


                    </div>

                </Router>
            </div>

        )
    }
}