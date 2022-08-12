import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {decreaseCounter, increaseCounter} from '../redux/actions/counterActions'
class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreaseCounter())
                } }>AZALT</button>
            </div>
        
        );
    }
}

function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(decreaseCounter,dispatch)}
    }
    
    export default connect(mapDispatchToProps)(DecreaseCounter)