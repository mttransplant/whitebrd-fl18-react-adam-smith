import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course}) =>
    <div className="col-sm-12 col-md-4 col-lg-2 my-2">
        <div className="card">
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"
                 alt="stock example"/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.ownedBy}</p>
                {/*TODO: direct link to course editor*/}
                <Link to="#" className="btn btn-primary">More…</Link>
            </div>
        </div>
    </div>

export default CourseCard