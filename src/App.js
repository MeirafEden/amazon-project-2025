import React, { useContext, useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";
import Routing from "./Router.js";
import {auth} from "./Utility/firebase.js";
import{Type} from "./Utility/action.type.js";


function App() {
  const [{user}, dispatch] = useContext(DataContext)
  // return (
    useEffect(()=>{
 auth.onAuthStateChanged((authUser) => {
  if(authUser){
console.log(authUser);
dispatch({
  type:Type.SET_USER,
  user:authUser
})

  }else {
dispatch({
  type:Type.SET_USER,
  user:null,
  });
    }
    });
   
    }, []);

   return <Routing />;

  }
export default App;


