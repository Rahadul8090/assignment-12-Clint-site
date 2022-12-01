// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apikey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);  
// console.log(app)  
// export default app    


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FcApproval, FcApprove } from "react-icons/fc";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL3ronYET0pAVwi_yRge5I3yTtwJf0CbE",
  authDomain: "assignment-12-1392d.firebaseapp.com",
  projectId: "assignment-12-1392d",
  storageBucket: "assignment-12-1392d.appspot.com",
  messagingSenderId: "759886595180",
  appId: "1:759886595180:web:17ca27c7d96a4c74640449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default  app                                                                            