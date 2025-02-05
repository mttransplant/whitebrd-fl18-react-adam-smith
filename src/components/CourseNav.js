import React from "react";
import "./CourseNav.style.client.css"

// TODO: Add link on Plus Circles to create course

const CourseNav = ({createCourse}) =>
    <div>
        <nav className="navbar fixed-top navbar-expand-md text-white navbar-dark bg-primary justify-content-start">
            <span className="col-auto fa fa-bars fa-lg"/>
            <span className="col-md-3 collapse navbar-collapse" id="navTitle">
                        <h4>Course Manager</h4>
                    </span>
            <span className="form-group pull-left col-7">
                        <input id="newTitle" className="form-control" type="text" placeholder="New Course Title"/>
                    </span>
            <span onClick={() => createCourse(document.getElementById("newTitle").value)} className="col-auto fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-plus-circle fa-stack-2x"/>
                    </span>
        </nav>
        <div id="addButton" className="btn-btm-rt">
            <span onClick={() => createCourse(document.getElementById("newTitle").value)}  className="fa fa-plus-circle fa-3x"/>
        </div>
    </div>
export default CourseNav