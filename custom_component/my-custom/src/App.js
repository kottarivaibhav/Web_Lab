// Importing React and Component from the 'react' library
import React, { Component } from 'react';

// Importing the ItemList component from the specified path
import ItemList from './ItemList'; // Adjust the path as per your project structure

// Defining the Main class component which extends React's Component class
class Main extends Component {
  // The render method is required for class components
  render() {
    // Defining an array of items
    const itemsall = ['Cat', 'Dog', 'Chicken', 'Cow', 'Sheep', 'Horse'];

    // The JSX to be rendered by this component
    return (
      <div>
        <h1>List of Items</h1>
        {/* Rendering the ItemList component and passing the items array as a prop */}
        <ItemList itemsall={itemsall} />
      </div>
    );
  }
}

// Exporting the Main component as the default export
export default Main;
