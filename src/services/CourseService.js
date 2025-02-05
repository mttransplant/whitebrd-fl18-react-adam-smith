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

    deleteCourse = courseId => {
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

    createWidget = (topicId, widget) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    for (var l in courses[i].modules[j].lessons[k].topics) {
                        if (courses[i].modules[j].lessons[k].topics[l].id === topicId) {
                            courses[i].modules[j].lessons[k].topics[l].widgets.push(widget)
                        }
                    }
                }
            }
        }
    }

    findWidgets = (topicId) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    for (var l in courses[i].modules[j].lessons[k].topics) {
                        if (courses[i].modules[j].lessons[k].topics[l].id === topicId) {
                            return courses[i].modules[j].lessons[k].topics[l].widgets
                        }
                    }
                }
            }
        }
    }

    findWidget = (widgetId) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    for (var l in courses[i].modules[j].lessons[k].topics) {
                        for (var m in courses[i].modules[j].lessons[k].topics[l].widgets) {
                            if (courses[i].modules[j].lessons[k].topics[l].widgets[m].id === widgetId) {
                                return courses[i].modules[j].lessons[k].topics[l].widgets[m]
                            }
                        }

                    }
                }
            }
        }
    }

    updateWidget = (widgetId, widget) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    for (var l in courses[i].modules[j].lessons[k].topics) {
                        for (var m in courses[i].modules[j].lessons[k].topics[l].widgets) {
                            if (courses[i].modules[j].lessons[k].topics[l].widgets[m].id === widgetId) {
                                courses[i].modules[j].lessons[k].topics[l].widgets[m] = widget
                            }
                        }

                    }
                }
            }
        }
    }

    deleteWidget = (widgetId) => {
        for (var i in courses) {
            for (var j in courses[i].modules) {
                for (var k in courses[i].modules[j].lessons) {
                    for (var l in courses[i].modules[j].lessons[k].topics) {
                        courses[i].modules[j].lessons[k].topics[l].widgets =
                            courses[i].modules[j].lessons[k].topics[l].widgets.filter(
                                widget => widget.id !== widgetId
                            )
                    }
                }
            }
        }
    }
}