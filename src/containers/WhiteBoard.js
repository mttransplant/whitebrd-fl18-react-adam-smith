import React, {Component} from "react"
import CourseService from "../services/CourseService"
import CourseTable from "./containers/CourseTable"

export default class WhiteBoard extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }

}