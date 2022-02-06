import React, { createContext, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../Firebase/firebase'


const UserAuthContext = createContext();

export function UserAuthContextProvider({children}) {

	const [user, setUser] = React.useState('');

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth , email, password);
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth,email, password);
	}

	React.useEffect(() => {

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
		});
		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<UserAuthContext.Provider value={{ user, signUp, logIn }}>
			{ children }
		</UserAuthContext.Provider>
	)

}

export function useUserAuth() {
	return useContext(UserAuthContext);
}