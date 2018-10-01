import React from "react"
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>
    <tr>
        {/*TODO: make both the title and edit button link to course editor*/}
        <td>
            <Link to={"/course/" + course.id + "/edit"}>{course.title}</Link>
        </td>
        <td className="d-none d-sm-table-cell">{course.ownedBy}</td>
        <td className="d-none d-sm-table-cell">{course.lastModified}</td>
        <td>
            <span className="pull-right">
                <Link to={"/course/" + course.id + "/edit"} className="fa fa-pencil mx-2"/>
                <i onClick={() => deleteCourse(course.id)} className="fa fa-trash mx-2"/>

            </span>
        </td>
    </tr>

export default CourseRow