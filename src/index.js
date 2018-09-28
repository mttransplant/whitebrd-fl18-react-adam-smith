import React from 'react';
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CourseService from "./services/CourseService";

let myCourses = new CourseService();
let newCourse =     {
    "id": "345",
    "title": "CS5400",
    "modules": []
}

ReactDom.render(
    <div>
        <h1>hello there</h1>
        {
            console.log(myCourses.findAllCourses())
        }
        {
            myCourses.createCourse(newCourse)
        }
        {
            console.log(myCourses.findAllCourses())
        }
        {
            console.log(myCourses.findCourseById("234"))
        }
    </div>,
    document.getElementById('root')
)