import React, { Component } from 'react';
import Nav from '../components/Nav';


class Home extends Component {
    clickHandle = () => {
        console.log('跳转到购物界面', this.props)
        // this.props.history
        this.props.history.push('/cart')
        // this.props.history.replace('/cart')
    }
    render() {
        return (
            <div>
                <Nav />
                <div>这是Home文件</div>
                <button onClick={this.clickHandle}> 去购物车</button>
            </div>

        )
    }
}
export default Home