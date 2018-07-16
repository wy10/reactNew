import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,hashHistory,Switch} from 'react-router-dom';
import {Button} from 'antd';
import PCNewsDetails from '../src/js/components/pc_news_details.js';
import PCIndex from '../src/js/components/pc_index.js';
import MobileIndex from '../src/js/components/mobile_index.js';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component{
    render(){
        return(
            <div>

                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router>
                        <div>
                            <Route path="/" component={PCIndex}/>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}/>
                        </div>
                    </Router>
                </MediaQuery>

            </div>
        )
    }
}

ReactDOM.render(
    <Root/>,
    document.getElementById('mainContainer')
)
