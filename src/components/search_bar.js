import React, { Component } from "react";

// This is a class component
class SearchBar extends Component {
   // all JS classes have a special function called constructor
   // this is the first and only function called automatically whenever a new instance of the class is created
   constructor(props) {
      // since Component has its own constructor function,
      // when we define a method that is already defined on the parent class
      // we can call that parent method on the parent class by calling 'super'
      super(props);

      // whenever we use state, we initialize it by creating a new object
      // and assigning it to this state
      this.state = { search: '' }
   }

   // class components must have a render method
   render() {
      return (
         <div className="search-bar">
            <input
               // this makes it a controlled component, the value only changes when the state changes
               value={this.state.search}
               // always use setState to change the state value
               onChange={ event => this.setState({ search: event.target.value }) }
            />
         </div>
      );
   }
}

export default SearchBar;



// This is a function component, they don't have constructor method as classes have

// const SearchBar = () => {
//    return <input />; // returns JSX
// }
