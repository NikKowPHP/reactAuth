import {
	ReactNode,
	useContext,
	createContext,
	useState,
	useEffect,
} from "react";
import { auth } from "../firebase";
import { User } from "../types/user";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth"; 

type AuthContextType = {
	currentUser: User | null;
	signup: (email: string, password: string) => Promise<any>;
	login: (email: string, password: string) => Promise<any>;
	logout: () => Promise<any>;
	isLoggedIn: boolean;
};

type AuthProviderProps = {
	children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	function signup(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	function login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	function logout() {
		return signOut(auth);
	}


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null)  => {
			
				setCurrentUser(user);
				user ? setIsLoggedIn(true) : setIsLoggedIn(false)

			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value: AuthContextType = {
		currentUser,
		signup,
		login,
		logout,
		isLoggedIn,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
