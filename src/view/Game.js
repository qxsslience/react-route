import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Game extends Component {
    goHomeHandle = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.goHomeHandle}> 去Home</button>
            </div>
        )
    }
}
//高阶组件
export default withRouter(Game)