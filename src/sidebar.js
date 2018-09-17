import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          open: false,
          sideBarClass: 'sidebar'
      };
      this.openSidebar = this.openSidebar.bind(this);
    }


    render() {
        return (
            <div id="sidebar" className={this.state.sideBarClass}>
                <div className="filterIcon" onClick={this.openSidebar}>
                    <i className="fas fa-filter"></i>
                </div>
            </div>
        );
    }

    openSidebar(e){
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
        if(this.state.open === false){
            this.setState({
                sideBarClass: 'sidebar open'
            });
        } else {
            this.setState({
                sideBarClass: 'sidebar'
            });
        }
    }
}

export default Sidebar;
