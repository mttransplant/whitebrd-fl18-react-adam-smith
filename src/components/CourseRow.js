import React from "react"

const CourseRow = ({course}) =>
    <tr>
        {/*TODO: make both the title and edit button link to course editor*/}
        <td>{course.title}</td>
        <td className="d-none d-sm-table-cell">{course.ownedBy}</td>
        <td className="d-none d-sm-table-cell">{course.lastModified}</td>
        <td>
            <span className="pull-right">
                Edit Delete
            </span>
        </td>
    </tr>

export default CourseRow