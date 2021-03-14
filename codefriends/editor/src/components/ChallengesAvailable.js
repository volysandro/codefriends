import React, { Component} from "react";
import {render} from "react-dom";

import Challenge from "./Challenge"

class ChallengesAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      challenges: []
    };
    this.meta_style = {
        position: "absolute",
        left: "80%",
        width: "20%",
        top: "64px",
    }
    this.cards_style = {
        width: "95%",
        "margin-top": "10px",
        margin: "0 auto",
    }
  }

  componentDidMount() {
    fetch("/api/challenges/list")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            challenges: result
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

  renderChallenges() {
      const challengesList = [];
      for(let i = 0; i < this.state.challenges.length; i++) {
          let title = this.state.challenges[i].title;
          let identifier = this.state.challenges[i].identifier;
          let description = this.state.challenges[i].description;
          let created_at = this.state.challenges[i]["created_at"];
          challengesList.push(<Challenge title={title} identifier={identifier} description={description} created_at={created_at}/>);
      }

      return challengesList;
  }

  render() {
    return (<div style={this.meta_style}>
     <div style={this.cards_style}>
         <h1>Challenges Available: </h1>
         {this.renderChallenges()}</div>
    </div>
    )
  }
}

export default ChallengesAvailable