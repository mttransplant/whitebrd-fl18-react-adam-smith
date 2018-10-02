import React from 'react'

const WidgetOfList = () =>
    <div className="container">
        <div className="form-group form-inline row float-right">
            <a href="#">
            <span className="fa-stack fa-lg">
                <i className="fas fa-square yellow-square fa-stack-2x"></i>
                <i className="fas fa-arrow-up fa-stack-1x"></i>
            </span>
            </a>
            <a href="#">
            <span className="fa-stack fa-lg">
                <i className="fas fa-square yellow-square fa-stack-2x"></i>
                <i className="fas fa-arrow-down fa-stack-1x"></i>
            </span>
            </a>
            <select className="form-control custom-select">
                <option selected>List</option>
                <option value="HEADING">Heading</option>
                <option value="LIST">List</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="IMAGE">Image</option>
            </select>
            <a href="#">
            <span className="fa-stack fa-lg">
                <i className="fas fa-square red-square fa-stack-2x"></i>
                <i className="fas fa-times fa-stack-1x"></i>
            </span>
            </a>
        </div>

        <h2>List Widget</h2>
        <div className="form">
            <div className="form-group row">
                <label htmlFor="listItems" className="col-form-label">
                    List Items
                </label>
                <textarea className="form-control" rows="4" id="listItems"
                          placeholder="Put each&#10;item in&#10;a separate row"></textarea>
            </div>
            <div className="form-group row">
                <label htmlFor="listType" className="col-form-label">
                    Choose the list type
                </label>
                <select className="form-control custom-select" id="listType">
                    <option value="UNORDERED">Unordered List</option>
                    <option value="ORDERED">Ordered List</option>
                </select>
            </div>
            <div className="form-group row">
                <label htmlFor="widgetName" className="col-form-label">Widget name</label>
                <input className="form-control" type="text" id="widgetName" placeholder="Name the widget (optional)"/>
            </div>
        </div>
        <h2>Preview</h2>
        <ul>
            <li>Put each</li>
            <li>item in</li>
            <li>a separate row</li>
        </ul>
    </div>
export default WidgetOfList