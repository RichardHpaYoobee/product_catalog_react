import React, { Component } from 'react';

class Pagenation extends Component {
  render() {
    const { error, isLoaded, totalPages } = this.props;
    var pages = [];

    for (var i = 1; i <= totalPages; i++) {
        var classes = 'page-item tabs';
        if(i == 1){
            classes += ' active'
        }
        pages.push(<li className={classes} onClick={this.changePage.bind(this, i)}><a className="page-link" href="#">{i}</a></li>)
    }
    pages.unshift(<li className="page-item previous"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span className="sr-only">Previous</span></a></li>)
    pages.push(<li className="page-item next"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></a></li>)

    if (isLoaded) {
        return (
            <div>
                <ul id="pagination" className="pagination">
                    {pages}
                </ul>
            </div>
        );
    } else {
        return (<div></div>)
    }

  }

  changePage(page){
      alert(page)
  }
}

export default Pagenation;
