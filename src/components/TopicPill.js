import React from 'react'

const TopicPill = ({selected, selectTopic, topic}) =>
    <li className="nav-item">
        <a onClick={() => selectTopic(topic)} className={selected ? "nav-link active" : "nav-link"}>
            {topic.title}
        </a>
    </li>

export default TopicPill