import React, {Component} from "react"
import CourseService from "../services/CourseService"
import CourseTable from "./CourseTable"

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
                <CourseTable
                    courses={this.state.courses}/>
            </div>
        )
    }
}