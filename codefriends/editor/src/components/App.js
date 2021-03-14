import React, { Component} from "react";
import {render} from "react-dom";
import AceEditor from 'react-ace';
import ChallengesAvailable from './ChallengesAvailable';
import Options from './Options';
import Header from "./Header";
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: {
                language: "",
                default_code: "",
            },
        }

    }

    languageStateHandler(lan){
        this.setState({
            language: lan,
        })
    }

    render(){
        return (
            <div>
                <Header />
                <Options languageStateHandler={this.languageStateHandler.bind(this)} />
            <div className="ace_editor">
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    setReadOnly="false"
                    onChange={this.onChange}
                    style={{ height: '100%', width: '100%' }}
                    ref={instance => { this.ace = instance; }}
                    value={this.state.language.default_code}
                />
            </div>
                <ChallengesAvailable />
            </div>
        );
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)