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
        {
            console.log(myCourses.findAllCourses())
        }
        {
            myCourses.createCourse(newCourse)
        }
        {
            console.log(myCourses.findAllCourses()[2].title)
        }
        {
            console.log(myCourses.findCourseById("234"))
        }
        {
            myCourses.updateCourse("345",updatedCourse)
        }
        {
            console.log(myCourses.findAllCourses()[2].title)
        }
    </div>,
    document.getElementById('root')
)