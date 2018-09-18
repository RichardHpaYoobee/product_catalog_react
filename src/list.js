import React, { Component } from 'react';



class List extends Component {


    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {

        const { error, isLoaded, currentItems } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loader"></div>;
        } else {
            return (
                <ul id="productList" className="ist-group list-group-flush">
                    {currentItems.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.id} - {item.product_name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default List;
