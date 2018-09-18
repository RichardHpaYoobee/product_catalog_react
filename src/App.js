import React, { Component } from 'react';

import Sidebar from './sidebar';
import Pagenation from './pagenation';
import List from './list';
import './App.css'

const recPerPage = 100;

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            totalRecords: 0,
            allItems: [],
            currentItems: [],
            page: 1,
            recPerPage: 0,
            currentPage: 1,
            totalPages: 1
        }
    }

    componentDidMount() {
      fetch("https://rhpa-productlist.herokuapp.com/allProducts")
        .then(res => res.json())
        .then(
          (result) => {
              var currentRecords = [];
              for (var i = 0; i < recPerPage; i++) {
                  currentRecords.push(result[i]);
              }

            this.setState({
              isLoaded: true,
              allItems: result,
              totalRecords: result.length,
              currentItems: currentRecords,
              recPerPage: 10,
              totalPages: Math.ceil(result.length/recPerPage)
            });

          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container text-center">
                    <h1 className="title">Online Shopping Catalog - {process.env.REACT_APP_APPURL}</h1>
                </div>
            </nav>
                <nav className="navbar navbar-light bg-light fixed-top fixed-top-2">
                    <div className="container">
                        <div className="col-12">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 border-bottom">
                                <h2 className="h2">Products in the Catalog</h2>
                                <nav aria-label="Page navigation example">
                                  <Pagenation
                                    {...this.state}
                                  />
                                </nav>
                            </div>
                        </div>
                    </div>
                </nav>

                <Sidebar />

                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <List
                                    {...this.state}
                                />
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}

export default App;
