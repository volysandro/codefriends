import React, { Component} from "react";
import {render} from "react-dom";

import EditorOptions from "./EditorOptions";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            challenges: []
        };
        this.meta_style = {
            position: "absolute",
            left: "0",
            width: "20%",
            height: "100%",
            top: "64px",
        }
    }

    render() {
        return (<div style={this.meta_style}>
            <EditorOptions languageStateHandler={this.props.languageStateHandler} />
        </div>)
    }
}

export default Options