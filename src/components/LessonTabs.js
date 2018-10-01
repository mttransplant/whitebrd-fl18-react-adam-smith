import React from "react"
import LessonTab from "./LessonTab";


// export default class LessonTabs extends Component {
//     constructor(props) {
//         super(props)
//     }
//
//
//
//     render() {
//         return(
const LessonTabs = ({selectedModule, selectedLesson, selectLesson}) =>
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
            <button className="col-1 nav-item fa fa-plus my-2"/>
        </li>
    </ul>

//         )
//     }
// }

export default LessonTabs

// const LessonTabs = ({selectedModule, selectLesson, selectedLesson}) =>
//     <ul className="nav nav-tabs">
//         {
//             console.log(selectedModule)
//         }
//         {
//             // lessons.map((lesson, index) =>
//             //     <LessonTab
//             //         selected = {selectedLesson === lesson}
//             //         selectedLesson = {selectedLesson}
//             //         lesson = {lesson}
//             //         key = {index}/>
//             // )
//         }
//         <li>
//             <button className="nav-item pull-right">+</button>
//         </li>
//     </ul>
//
// export default LessonTabs