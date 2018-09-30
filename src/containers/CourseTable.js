import React from 'react'
import CourseRow from '../components/CourseRow'

const CourseTable = ({courses}) =>
    <div>
        {/*TODO: build out add new course header*/}
        <table className="table">
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