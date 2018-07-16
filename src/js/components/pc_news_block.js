import React from 'react';
import { Card, Form } from 'antd';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import PCIndex from '../components/pc_index.js';

class PCNewsBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:""
        };
    };

    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions).then(response=>response.json()).then(json=>{this.setState({news:json})})


    };
    render(){

        const {news} = this.state;
        const newsList = news.length?news.map((newsItem,index)=>(<li key={index}>
            <Router>
                <div>
                    <Link to="/">{newsItem.title}</Link>

                </div>
            </Router>

            </li>)):"没有加载到任何新闻";
        return(
            <div class="topNewsList">
                <Card>
                    <ul>{newsList}</ul>
                </Card>
            </div>

        );
    };
}

export default PCNewsBlock = Form.create({})(PCNewsBlock)
