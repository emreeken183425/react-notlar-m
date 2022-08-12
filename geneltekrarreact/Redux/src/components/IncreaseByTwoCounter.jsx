import React, { Component } from 'react';
import { ıncreaseByTwoCounter, increaseCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                 <button onClick={e=>{
                    this.props.dispatch(ıncreaseByTwoCounter())
                } }>2 ARTIR</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(ıncreaseByTwoCounter,dispatch)}
    }
    
    export default connect(mapDispatchToProps)(IncreaseByTwoCounter)