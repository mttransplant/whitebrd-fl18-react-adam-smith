import React from 'react'
import CourseRow from '../components/CourseRow'

const CourseTable = ({courses}) =>
    // DONE: build out add new course header
    <div className="nav-pad">
        <table className="table">
            <thead className="thead-light secondary-header">
            <th scope="col">Title</th>
            <th className="d-none d-sm-table-cell" scope="col">Owned by</th>
            <th className="d-none d-sm-table-cell" scope="col">Last Modified</th>
            <th scope="col">
                <span className="pull-right">
                    <i className="fas fa-grip-horizontal">grid</i>
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

export default CourseTable