import React from "react"

const CourseRow = ({course}) =>
    <tr>
        {/*TODO: make both the title and edit button link to course editor*/}
        <td>{course.title}</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>

export default CourseRow