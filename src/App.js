import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './FireBase/firebase.initialize';


initializeAuthentication();
const provider = new GoogleAuthProvider();


function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
     const user = result.user;
     console.log(user); 
  
  })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn} >Google Siign In</button>
    </div>
  );
}

export default App;
