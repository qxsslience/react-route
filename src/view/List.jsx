import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props)
        return (
            <div className='nav'>
                {/* 在这里读取传进来的id值 */}
                {/* {this.props.match.params.id} */}
                <ul>
                    <li>
                        内容1
                    </li>
                    <li>
                        内容2
                    </li>

                </ul>
            </div>
        )
    }
}
export default List