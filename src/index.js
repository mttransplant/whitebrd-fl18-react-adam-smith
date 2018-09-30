import React from 'react';
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css"
import WhiteBoard from "./containers/WhiteBoard";

ReactDom.render(
    <div>
        <h1>hello there</h1>
        <WhiteBoard/>
    </div>,
    document.getElementById('root')
)