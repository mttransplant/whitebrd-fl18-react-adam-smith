import React from 'react';
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css"

ReactDom.render(
    <div>
        <h1>hello there</h1>
        <CourseTable
            courses={myCourses}/>
    </div>,
    document.getElementById('root')
)