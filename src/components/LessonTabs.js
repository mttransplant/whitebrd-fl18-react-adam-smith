import React from "react"
import LessonTab from "./LessonTab";

const LessonTabs = ({selectedModule, selectedLesson, selectLesson, addLesson}) =>
    <ul className="nav nav-tabs">
        {
            selectedModule.lessons.map((lesson, index) =>
                <LessonTab
                    selected = {selectedLesson === lesson}
                    selectLesson = {selectLesson}
                    lesson = {lesson}
                    key = {index}/>
            )
        }
        <li>
            <button onClick={addLesson} className="col-1 nav-item fa fa-plus my-2"/>
        </li>
    </ul>

export default LessonTabs