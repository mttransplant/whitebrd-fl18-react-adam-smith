import stockCourses from "./courses"

let courses = stockCourses

export default class CourseService {
    createCourse = course => {
        courses.push(course)
    }

    findAllCourses = () => {
        return courses;
    }

    findCourseById = courseId => {
        return courses.find((course) => {
            return course.id === courseId
        })
    }

    updateCourse = (courseId, course) => {
        for (var i in courses) {
            if (courses[i].id === courseId) {
                courses[i] = course
            }
        }
    }

    deleteCoruse = courseId => {
        courses = courses.filter((course) =>
            course.id !== courseId
        )
    }
}