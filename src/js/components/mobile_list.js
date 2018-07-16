import React from 'react';
import { Row, Col, Form } from 'antd';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class MobileList extends React.Component{

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
         const newsList = news.length?news.map((newsItem,index)=>(
            <Router>
            <div key={index} className="m_article list-item special_section clearfix">
                <Link>
                <div className="m_article_img">
                    <img src={newsItem.thumbnail_pic_s}/>
                </div>
                <div className="m_article_info">
                    <div className="m_article_title">
                        <span>{newsItem.title}</span>
                    </div>
                    <div className="m_article_desc clearfix">
                        <div classNmae="m_article_desc_l">
                            <span className="m_article_channel">{newsItem.realtype}</span>
                            <span className="m_article_channel">{newsItem.data}</span>
                        </div>
                    </div>
                </div>
                </Link>

            </div>
            </Router>)):"没有加载到任何新闻";
        return(
            <div>
            <Row>
            <Col span={24}>{newsList}</Col>
            </Row>
            </div>

        );
    };
}

export default MobileList = Form.create({})(MobileList)
