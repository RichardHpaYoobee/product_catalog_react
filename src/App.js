import React, { Component } from 'react';

import Sidebar from './sidebar';
import Pagenation from './pagenation';
import List from './list';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container text-center">
                    <h1 className="title">Online Shopping Catalog</h1>
                </div>
            </nav>
                <nav className="navbar navbar-light bg-light fixed-top fixed-top-2">
                    <div className="container">
                        <div className="col-12">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 border-bottom">
                                <h2 className="h2">Products in the Catalog</h2>
                                <nav aria-label="Page navigation example">
                                  <Pagenation />
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
                                <List />
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}

export default App;
