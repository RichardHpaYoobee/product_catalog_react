import React, { Component } from 'react';

class Pagenation extends Component {

    constructor(props) {
      super(props);
      this.state = {
          activeTab: 1,
          currentStartID: 0
      };
      this.prevPage = this.prevPage.bind(this);
      this.nextPage = this.nextPage.bind(this);
    }

    render() {
        const { isLoaded, totalPages, recPerPage } = this.props;
        var pages = [];
        var startRec = 0;
        for (var i = 1; i <= totalPages; i++) {
            var classes = 'page-item tabs';
            if(i === this.state.activeTab){
                classes += ' active'
            }
            pages.push(<li key={i} className={classes} onClick={this.onChangePage.bind(this, {pageNumber: i, startRecord: startRec})}><a className="page-link" href="#">{i}</a></li>)
            startRec = startRec + recPerPage;
        }
        pages.unshift(<li key="prev" className="page-item previous" onClick={this.prevPage}><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span className="sr-only">Previous</span></a></li>)
        pages.push(<li key="next" className="page-item next" onClick={this.nextPage}><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></a></li>)

        if (isLoaded) {
            return (
                <div>
                    <p>current Start ID - {this.state.currentStartID}</p>
                    <ul id="pagination" className="pagination">
                        {pages}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }

    onChangePage(page){
        this.setState({
            activeTab: page['pageNumber'],
            currentStartID: page['startRecord']
        });
        this.props.changePage(page);
    }

    prevPage(){
        var currentTab = this.state.activeTab;
        if(currentTab > 1){
            this.setState({
                activeTab: currentTab - 1
            });
            // this.props.changePage({
            //     pageNumber: this.state.activeTab,
            //     startRecord:
            // });
        }
    }

    nextPage(){
        const {  totalPages, recPerPage } = this.props;
        var currentTab = this.state.activeTab;
        if(currentTab < totalPages){
            this.setState({
                activeTab: currentTab + 1
            });
        }
    }
}

export default Pagenation;
