import React from 'react'
import {Link} from 'react-router-dom'
import CourseRow from '../components/CourseRow'
import CourseNav from '../components/CourseNav'

const CourseTable = ({courses}) =>
    // DONE: build out add new course header
    <div>
        <CourseNav/>
        <div className="nav-pad">
            <table className="table">
                <thead className="thead-light secondary-header">
                <th scope="col">Title</th>
                <th className="d-none d-sm-table-cell" scope="col">Owned by</th>
                <th className="d-none d-sm-table-cell" scope="col">Last Modified</th>
                <th scope="col">
                <span className="pull-right">
                    <Link to="/course/grid" className="fas fa-grip-horizontal">grid</Link>
                    <i className="mx-1 fas fa-sort-alpha-down">sort</i>
                </span>
                </th>
                </thead>
                <tbody>
                {
                    courses.map((course, index) =>
                        (
                            <CourseRow
                                key={index}
                                course={course}/>
                        ))
                }
                </tbody>
            </table>
        </div>
    </div>
export default CourseTable