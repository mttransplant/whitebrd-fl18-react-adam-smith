import stockCourses from "./courses"

var courses = stockCourses

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

    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }

    updateModules = (courseId, modules) => {
        for (var i in courses) {
            if (courses[i].id === courseId) {
                courses[i].modules = modules
            }
        }
    }

    addModule = (courseId,module) => {
        for (var i in courses) {
                if (courses[i].id === courseId) {
                    courses[i].modules.push(module)
                }
        }
    }

    addLesson = (moduleId,lesson) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                if (courses[i].modules[j].id === moduleId) {
                    courses[i].modules[j].lessons.push(lesson)
                }
            }
        }
    }

    addTopic = (lessonId,topic) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    if (courses[i].modules[j].lessons[k].id === lessonId) {
                        courses[i].modules[j].lessons[k].topics.push(topic)
                    }
                }
            }
        }
    }
}