import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal,notification } from 'antd';
import { StaticRouter } from 'react-router'
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class CommonComments extends React.Component{
    constructor(){
        super();
        this.state={
            comments:''
        };
    }
     componentDidMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOptions).then(response => response.json()).then(
            json=>{
                this.setState({comments:json});

            })
    };
    handleSubmit(){
        e.preventDefault();
        var myFetchOptions = {
            method:'GET'
        };
        var formdata = this.props.form.getFieldsVaule();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&comment="+formdata.remark,myFetchOptions).then(response => response.json()).then(
            json=>{
               this.componentDidMount();

            })

    };
    addUserCollection(){
        var myFetchOptions = {
            method:'GET'
        };
        var formdata = this.props.form.getFieldsVaule();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions).then(response => response.json()).then(
            json=>{
               //收藏成功之后进行全局的提醒
               notification['success']({message:'reactnews',description:'收藏文章成功'});

            })
    }
    render(){
        let {getFieldProps} = this.props.form;
        const {comments} = this.state;
        const commentsList = comments.length?
        comments.map((comments,index)=>(
            <Card key={index} title={commnet.UserName} extra={<a href="#">发布{comment.datatime}</a>}>
            <p>{comment.Comments}</p>
            </Card>
            )):"没有评论";
        return(
            <div class="comment">
            <Row>
            <Col span={24}>
            {commentsList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormItem>
            <Input text="textarea" placeholder="随便写" {...getFieldProps('remark',{initiaValue:''})}/>
            </FormItem>
            <Button type="primary" htmlType="submit">提交评论</Button>
            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
            </Form>
            </Col>
            </Row>
            </div>
        )
    }
}

export default CommonComments = Form.create({})(CommonComments)