import React from 'react'
import {Link} from 'react-router-dom'
import CourseNav from '../components/CourseNav'
import CourseCard from "../components/CourseCard";

const CourseGrid = ({courses, createCourse}) =>
    <div className="bg-grey">
        <CourseNav
            createCourse={createCourse}/>
        <div className="nav-pad">
            <table className="table">
                <thead className="thead-light secondary-header">
                <th scope="col">Title</th>
                <th className="d-none d-sm-table-cell" scope="col">Owned by</th>
                <th className="d-none d-sm-table-cell" scope="col">Last Modified</th>
                <th scope="col">
                <span className="pull-right">
                    <Link to="/course/table" className="fas fa-grip-horizontal">table</Link>
                    <i className="mx-1 fas fa-sort-alpha-down">sort</i>
                </span>
                </th>
                </thead>
            </table>
        </div>
        <div className="container-fluid card-deck">
            <div className="row">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        course={course}/>
                ))}
            </div>
        </div>
    </div>
export default CourseGrid