import {combineReducers} from 'redux';
import {CREATE_WIDGET,DELETE_WIDGET,UPDATE_WIDGET,FIND_WIDGET,FIND_ALL_WIDGETS_FOR_TOPIC,FIND_ALL_WIDGETS} from '../actions';
import CourseService from "../services/CourseService";

let myCourseService = new CourseService;
let initialState = myCourseService.findAllCourses();

const widgets = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            myCourseService.createWidget(action.topicId,action.widget);
            return state = myCourseService.findAllCourses();
        case DELETE_WIDGET:
            myCourseService.deleteWidget(action.widgetId);
            return state = myCourseService.findAllCourses();
        case UPDATE_WIDGET:
            myCourseService.updateWidget(action.widgetId,action.widget);
            return state = myCourseService.findAllCourses();
        case FIND_WIDGET:
            return myCourseService.findWidget(action.widgetId);
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return myCourseService.findWidgets(action.topicId);
        case FIND_ALL_WIDGETS:
            return state;
        default:
            return state
    }
};

const widgetReducer = combineReducers({widgets});

export default widgetReducer