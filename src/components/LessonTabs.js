import React, {Component} from "react"
import LessonTab from "./LessonTab";


export default class LessonTabs extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return(
            <ul className="nav nav-tabs">
                {
                    console.log(this.props.selectedLesson)
                }
                {
                    // lessons.map((lesson, index) =>
                    //     <LessonTab
                    //         selected = {selectedLesson === lesson}
                    //         selectedLesson = {selectedLesson}
                    //         lesson = {lesson}
                    //         key = {index}/>
                    // )
                }
                <li>
                    <button className="nav-item pull-right">+</button>
                </li>
            </ul>
        )
    }
}

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