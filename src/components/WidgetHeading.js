import React from 'react'

const WidgetHeading = () =>
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

        <h2>Heading Widget</h2>
        <div className="form">
            <div className="form-group row">
                <label htmlFor="headingText" className="col-form-label">
                    Enter text for header
                </label>
                <input className="form-control" type="text" id="headingText" placeholder="Heading Text"/>
            </div>
            <div className="form-group row">
                <label htmlFor="headingSize" className="col-form-label">Heading Size</label>
                <select className="form-control custom-select" id="headingSize">
                    <option selected>Choose size</option>
                    <option value="HEADING1">Heading 1</option>
                    <option value="HEADING2">Heading 2</option>
                    <option value="HEADING3">Heading 3</option>
                </select>
            </div>
            <div className="form-group row">
                <label htmlFor="widgetName" className="col-form-label">Widget name</label>
                <input className="form-control" type="text" id="widgetName" placeholder="Name the widget (optional)"/>
            </div>
        </div>
        <h2>Preview</h2>
        <h1>This is and example Header</h1>
    </div>
export default WidgetHeading