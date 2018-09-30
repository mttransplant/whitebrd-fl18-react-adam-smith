import React from "react"

const CourseRow = ({course}) =>
    <tr>
        {/*TODO: make both the title and edit button link to course editor*/}
        <td scope="col">{course.title}</td>
        <td className="d-none d-sm-table-cell" scope="col">{course.ownedBy}</td>
        <td className="d-none d-sm-table-cell" scope="col">{course.lastModified}</td>
        <td scope="col">
            <span className="pull-right">
                Edit Delete
            </span>
        </td>
    </tr>

export default CourseRow