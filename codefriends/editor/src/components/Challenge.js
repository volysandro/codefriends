import React, { Component} from "react";
import {render} from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Challenge extends Component {
    render(){
        return (
                <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {this.props.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {this.props.identifier}
                    </Typography>
                    <Typography color="textSecondary">
                      {this.props.created_at}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {this.props.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Solve</Button>
                  </CardActions>
                </Card>
        )
    }
}

export default Challenge
