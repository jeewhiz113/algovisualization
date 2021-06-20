// import React, {useContext, useState} from 'react'

// const AppContext = React.createContext();  //context for the app
// const AppUpdateContext = React.createContext();   //context for the action of updating the context

// export function useAppContext() {
//   return useContext(AppContext);
// }

// export function useAppUpdateContext(){
//   return useContext(AppUpdateContext);
// }

// export function AppProvider({ children }) {
//   //The state provided to the subcomponents are defined here
//   const [pickedSort, setPickedSort] = useState(true);
  
//   const togglePicked = () =>{
//     setPickedSort(!pickedSort);
//   }
//   console.log(pickedSort);
//   return (
//     <AppContext.Provider value = {pickedSort}>
//       <AppUpdateContext.Provider value={togglePicked}>
//         {children}
//       </AppUpdateContext.Provider>

//     </AppContext.Provider>
//   )
// }

// export default AppContext


// import React from "react";

// const NavSelectionContext = React.createContext();

// export default NavSelectionContext;
