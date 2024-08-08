// Importing React and Component from the 'react' library
import React, { Component } from 'react';

// Defining the ItemList class component which extends React's Component class
class ItemList extends Component {
  // The render method is required for class components
  render() {
    // Destructuring the items prop from this.props
    const { itemsall } = this.props;

    // The JSX to be rendered by this component
    return (
      <div>
        {/* Iterating over the items array and rendering each item in a div */}
        {itemsall.map((item, index) => (
          // The key prop is required for each element in the list for efficient rendering
          <div key={index}>{item}
          
          </div>
        ))}
      </div>
    );
  }
}

// Exporting the ItemList component as the default export
export default ItemList;
