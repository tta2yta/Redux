
//Create a Redux store.
const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:


  //Get state from Redux store.
  const store= Redux.createStore(reducer)


  const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
   const currentState= store.getState()