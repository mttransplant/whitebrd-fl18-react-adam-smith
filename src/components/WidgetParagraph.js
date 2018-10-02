import React from 'react'

const WidgetParagraph = () =>
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
                <option selected>Paragraph</option>
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
        <h2>Paragraph Widget</h2>
        <div className="form">
            <div className="form-group row">
                <label htmlFor="paragraphText" className="col-form-label">
                    Paragraph Text
                </label>
                <textarea className="form-control" rows="3" id="paragraphText" placeholder="Lorem ipsum"></textarea>
            </div>
            <div className="form-group row">
                <label htmlFor="widgetName" className="col-form-label">Widget name</label>
                <input className="form-control" type="text" id="widgetName" placeholder="Name the widget (optional)"/>
            </div>
        </div>
        <h2>Preview</h2>
        <p>Lorem ipsum</p>

    </div>
export default WidgetParagraph