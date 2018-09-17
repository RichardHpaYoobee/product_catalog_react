import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
      fetch("https://rhpa-productlist.herokuapp.com/allProducts")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loader"></div>;
        } else {
            return (
                <ul id="productList" className="ist-group list-group-flush">
                    {items.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.product_name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default List;
