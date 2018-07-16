import React from 'react';
import { Row, Col } from 'antd';
export default class MobileFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <p class="footer">&copy;&nbsp;2018 ReactNews.all Right reserved.</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
