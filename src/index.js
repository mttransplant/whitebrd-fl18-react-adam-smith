import React from 'react';
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css"
import CourseService from "./services/CourseService";

import CourseTable from "./containers/CourseTable"

let myCourseService = new CourseService();
let myCourses = myCourseService.findAllCourses()
let newCourse =     {
    "id": "345",
    "title": "CS5400",
    "modules": []
}
let updatedCourse = {
    "id": "345",
    "title": "CS5400 - Special Topics",
    "modules": [
        {
            "id": "987",
            "title": "just a test"
        }
    ]
}

ReactDom.render(
    <div>
        <h1>hello there</h1>
        <CourseTable
            courses={myCourses}/>
    </div>,
    document.getElementById('root')
)