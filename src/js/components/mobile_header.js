import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
import { StaticRouter } from 'react-router'
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userId:0
        };
    };
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleClick(e){
        if (e.key == 'register'){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else{
            {
                this.setState({current:e.key});
            }

        }
    };
    handleSubmit(e){
        //页面开始向api提交数据
        e.preventDefault();
        var myFetchOptions={
            method:'GET'
        };
        var formData = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).then(response=>response.json()).then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.userId});
        });
        message.success("请求成功");
        this.setModalVisible(false);
    };
    login(){
        this.setModalVisible(true);
    };
    render(){
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined?
        <Icon type="inbox"></Icon>
        :
        <Icon type="setting" onClick={this.login.bind(this)}></Icon>
        return(
            <div id="mobileheader">
                <header>
                    <img src="./src/images/1.jpg" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() =>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okTest="关闭">
                            <Tabs type="card">
                               <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                        <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                        <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label="确认密码">
                                        <Input type="password" placeholder="请确认您的密码" {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                               </TabPane>
                            </Tabs>

                        </Modal>
            </div>
        );
    };
}

export default MobileHeader = Form.create({})(MobileHeader)