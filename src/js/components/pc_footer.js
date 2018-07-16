import React from 'react';
import { Row, Col } from 'antd';
import CommonComments from '../components/common_comments.js'
export default class PCFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <p class="footer">&copy;&nbsp;2018 ReactNews.all Right reserved.</p>

                    </Col>
                    <div><CommonComments uniquekey="1222"/></div>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
