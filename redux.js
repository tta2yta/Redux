
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


   //Define a Redux action.
   // Define an action here:

const action ={type:'LOGIN', text:'current user'}


// Dispatch the action here:

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  
  store.dispatch(loginAction);