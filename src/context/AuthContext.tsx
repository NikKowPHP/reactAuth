import  {
	ReactNode,
	useContext,
	createContext,
	useState,
	useEffect,
} from "react";
import { auth } from "../firebase";
import { User } from "../types/user";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

type AuthContextType = {
	currentUser: User | null;
	signup: (
		email: string | undefined,
		password: string | undefined
	) => Promise<any>;
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


	function signup(email: string, password: string) {
		// return createUserWithEmailAndPassword(auth, email, password);
		return createUserWithEmailAndPassword(auth, email, password);
	}
	function login(email: string, password: string) {
		// return createUserWithEmailAndPassword(auth, email, password);
		return signInWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login
	};

	return <AuthContext.Provider value={value}>
		{!loading && children}
		</AuthContext.Provider>;
}
