import React from 'react';
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CourseService from "./services/CourseService";

let myCourses = new CourseService();

ReactDom.render(
    <div>
        <h1>hello there</h1>
        {
            console.log(myCourses.findAllCourses())
        }
    </div>,
    document.getElementById('root')
)