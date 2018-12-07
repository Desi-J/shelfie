import React, {Component} from 'react';


class Dashboard extends Component {
    render() {
        let {itemList} = this.props
       return(
           <div>{itemList}</div>
       );
    }
}

export default Dashboard;