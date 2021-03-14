import React, { Component} from "react";
import {render} from "react-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class EditorOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            languages: [],
            language: '',
            default_text: '',
        };
        this.meta_style = {
            width: "100%",
            "margin-left": "10px",
            "margin-top": "20px",

        }
        this.language_select_style = {
            width: "70%",
        }
    }

    componentDidMount() {
     fetch("/api/languages/list")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            languages: result
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    renderLanguages() {
      const languagesList = [];
      for(let i = 0; i < this.state.languages.length; i++) {
          let name = this.state.languages[i].name;
          let unique_name = this.state.languages[i]["unique_name"];
          let default_code = this.state.languages[i]["default_code"];
          languagesList.push(<MenuItem value={unique_name}>{name}</MenuItem>);
      }

      return languagesList;
  }


      setLanguage = (event) => {
        this.setState({ language: event.target.value });
        this.state.languages.forEach(language =>{
            if(language.unique_name == event.target.value){
                this.setState({default_code: language.default_code})
                this.props.languageStateHandler({
                    language: language,
                    default_code: language.default_code,
                })
            }
        })
         };


    render() {
        return (
            <div style={this.meta_style}>
                <h1>Editor Options:</h1>
                <FormControl style={this.language_select_style}>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.language}
                      onChange={this.setLanguage}
                      autoWidth
                    >
                        {this.renderLanguages()}
                    </Select>
                </FormControl>
            </div>

        )
    }
}

export default EditorOptions