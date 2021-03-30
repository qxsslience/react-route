import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/new'>新闻</Link>
                    </li>
                    <li>
                        <Link to='/home'>首页</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav