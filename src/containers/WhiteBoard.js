import React, {Component} from "react"
import CourseService from "../services/CourseService"
import CourseTable from "./CourseTable"
import CourseGrid from "./CourseGrid"
import "./WhiteBoard.style.client.css"


// TODO: Add link on Plus Circles to create course

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
                {/*<nav className="navbar fixed-top navbar-expand-md text-white navbar-dark bg-primary justify-content-start">*/}
                    {/*<span className="col-auto fa fa-bars fa-lg"/>*/}
                    {/*<span className="col-md-3 collapse navbar-collapse" id="navTitle">*/}
                        {/*<h4>Course Manager</h4>*/}
                    {/*</span>*/}
                    {/*<span className="form-group pull-left col-7">*/}
                        {/*<input className="form-control" type="text" placeholder="New Course Title"/>*/}
                    {/*</span>*/}
                    {/*<span className="col-auto fa-stack fa-lg">*/}
                        {/*<i className="fa fa-circle fa-stack-2x"/>*/}
                        {/*<i className="fa fa-plus-circle fa-stack-2x"/>*/}
                    {/*</span>*/}
                {/*</nav>*/}
                <CourseTable
                    courses={this.state.courses}/>
                <div id="addButton" className="btn-btm-rt">
                    <span className="fa fa-plus-circle fa-3x"></span>
                </div>
            </div>

        )
    }
}