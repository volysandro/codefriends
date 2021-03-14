import React, { Component} from "react";
import {render} from "react-dom";
import AceEditor from 'react-ace';
import ChallengesAvailable from './ChallengesAvailable';
import Header from "./Header"
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Header />
            <div className="ace_editor">
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    setReadOnly="false"
                    onChange={this.onChange}
                    style={{ height: '100%', width: '100%' }}
                    ref={instance => { this.ace = instance; }}
                />
            </div>
                <ChallengesAvailable />
            </div>
        );
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)