import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class PCHeader extends React.Component{
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
    render(){
        let {getFieldProps} = this.props.form;
        let userShow = this.state.hasLogined?<Menu.Item key="logout" class="register"><Button type="primary" htmlType="button">{this.state.userNickName}</Button>&nbsp;&nbsp;<Button type="dashed" htmlType="button">个人中心</Button>&nbsp;&nbsp;<Button type="ghost" htmlType="button">退出</Button></Menu.Item>:<Menu.Item key="register" class="register"><Icon type="appstore"/>注册/登录</Menu.Item>;
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" title="" class="logo">
                            <img src="./src/images/1.jpg" alt="log" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item>
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}

                        </Menu>

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


                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}

export default PCHeader = Form.create({})(PCHeader);
