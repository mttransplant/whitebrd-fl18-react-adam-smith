import React from 'react'
import TopicPill from "./TopicPill";

const TopicPills = ({selectedLesson, selectedTopic, selectTopic, addTopic}) =>
    <div className="nav-pad">
        <ul className="nav nav-pills">
            {
                selectedLesson.topics.map((topic, index) =>
                    <TopicPill
                        selected = {selectedTopic === topic}
                        selectTopic={selectTopic}
                        topic = {topic}
                        key={index}/>
                )
            }
            <li>
                <button onClick={addTopic} className="col-1 nav-item fa fa-plus mx-1"/>
            </li>

        </ul>
    </div>

export default TopicPills