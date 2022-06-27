import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class categoriList extends Component {

    // constructor(props){
    //     super(props);
    //     state:{};
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroupItem>emre eken</ListGroupItem>
                <ListGroupItem>emre eken</ListGroupItem>
                <ListGroupItem>emre eken</ListGroupItem>
                <ListGroupItem>emre eken</ListGroupItem>
             

            </div>
        );
    }
}

export default categoriList;