import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import CourseRow from "./CourseRow";
import ModuleListItem from "./ModuleListItem";

export default class ModuleList extends Component {
    constructor(props) {
        super(props)
        const course = this.props.course

        this.state = {
            course: course,
            newModuleName: "New Module",
            modules: course.modules
        }
    }

    formChanged = (event) => {
        this.setState({
            newModuleName: event.target.value
        })
    }

    addNewModule = () => {
        let modules = this.state.course.modules;
        let module = {
            title: this.state.newModuleName,
            id: (new Date()).getTime().toString()
        }
        modules.push(module)
        this.setState({
            newModuleName: "New Module",
            modules: modules
        })
        this.props.updateModules(this.state.course.id,modules)
    }

    render() {
        return(
            <div>
                <div className="nav-pad bg-dark">
                    <ul className="list-group">
                        <li className="list-group-item active">
                            Modules
                        </li>
                        <li className="list-group-item bg-secondary">
                            <input value={this.state.newModuleName} onChange={this.formChanged} className="form-control"/>
                            <button onClick={this.addNewModule} className="btn btn-primary btn-block">Add</button>
                        </li>
                        {
                            this.state.course.modules.map((module, index) =>
                                (
                                    <ModuleListItem
                                        selected={this.props.selectedModule === module}
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.props.deleteModule}
                                        key={index}
                                        module={module}/>
                                ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

