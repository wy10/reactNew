import React from 'react';
import MobileHeader from '../components/mobile_header.js';
import MobileFooter from '../components/mobile_footer.js';
import MobileList from '../components/mobile_list.js';
import {Tabs,Carousel,Tabs} from 'antd';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
    render(){
         const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div class="carousel">
                            <Carousel {...settings}>
                                <div><img src="./src/images/w1.jpg"/></div>
                                <div><img src="./src/images/w2.jpg"/></div>
                                <div><img src="./src/images/w3.jpg"/></div>
                                <div><img src="./src/images/w4.jpg"/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}

