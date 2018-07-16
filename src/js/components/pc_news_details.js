import React from 'react';
import {Row,Col} from 'antd';
import { Card, Form } from 'antd';

class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:""
        };
    };
    componentDidMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+"161028202106247",myFetchOptions).then(response => response.json()).then(
            json=>{
                this.setState({newsItem:json});
                document.title = this.state.newsItem.title+"-React News|React 新闻";
            })
    };
    createMark(){
        return {__html:'<h3>hahhah</h3>'};
    };
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMark()}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PCNewsDetails = Form.create({})(PCNewsDetails)