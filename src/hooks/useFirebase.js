import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const processLogin = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerNewUser = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo && userInfo.emailVerified) {
        setUser(userInfo);
      }
    });
  }, [auth]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser({});
  //     }
  //   });
  // });

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});

        setError("");
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return {
    user,
    setUser,
    error,
    setError,
    password,
    setPassword,
    email,
    signInWithGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    processLogin,
    registerNewUser,
    verifyEmail,
    setUserName,
    logOut,
  };
};

export default useFirebase;
