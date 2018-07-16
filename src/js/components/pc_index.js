import React from 'react';
import PCHeader from '../components/pc_header.js';
import PCFooter from '../components/pc_footer.js';
import PCNewsContainer from '../components/pc_newscontainer.js';
export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader/>
                <PCNewsContainer/>
                <PCFooter/>
            </div>
        )
    }
}

