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
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/cart'>购物车</Link>
                    </li>
                    {/* 传递参数 */}
                    <li>
                        <Link to={{
                            pathname: '/list',
                            search: '?name=songsong',
                            hash: '#the-hash',//hash可以作为唯一的索引值
                            state: { fromDataboard: true }//可以作为权限的判断，如值为true，允许进入页面，反之则不允许
                        }}>列表</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav