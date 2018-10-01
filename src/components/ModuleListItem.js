import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModule, selected}) =>
    <li className={selected ? "list-group-item active" : "list-group-item bg-secondary"}>
        {module.title}
        <span className="pull-right">
            <button
                onClick={() => selectModule(module)}>
            E
            </button>
            <button
                onClick={() => deleteModule(module)}>
                X
            </button>
        </span>
    </li>

export default ModuleListItem