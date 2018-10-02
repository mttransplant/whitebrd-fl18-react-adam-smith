import React from 'react'
import './WidgetList.style.client.css'
import WidgetHeading from "./WidgetHeading";
import WidgetOfList from "./WidgetOfList";
import WidgetImage from "./WidgetImage";
import WidgetLink from "./WidgetLink";
import WidgetParagraph from "./WidgetParagraph";

const WidgetList = ({widgets}) =>
    <div className="container-fluid">

        <div className="form-group text-right">
            <div className="col-7"></div>
            <div className="col-auto">
                <button className="btn btn-success mx-1" type="submit">Save</button>
                <label htmlFor="previewToggle" className="col-form-label mx-1">
                    Preview
                </label>
                {/*This was adopted from https://www.w3schools.com/howto/howto_css_switch.asp*/}
                <div className="switch mx-1">
                    {/*<input type="checkbox" id="previewToggle">*/}
                        {/*<span className="slider round"></span>*/}
                    {/*</input>*/}
                    <input type="checkbox" id="previewToggle" className="slider round"/>
                </div>
            </div>
        </div>


        <ul className="list-group">
            <li className="list-group-item" id="widget-heading">
                <WidgetHeading/>
            </li>
            <li className="list-group-item" id="widget-of-list">
                <WidgetOfList/>
            </li>
            <li className="list-group-item" id="widget-image">
                <WidgetImage/>
            </li>
            <li className="list-group-item" id="widget-link">
                <WidgetLink/>
            </li>
            <li className="list-group-item" id="widget-paragraph">
                <WidgetParagraph/>
            </li>
        </ul>

        <div id="addWidgetButton" className="btn-btm-rt">
            <span className="fas fa-plus-circle fa-2x"/>
        </div>
    </div>

export default WidgetList