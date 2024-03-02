import React, {
	ReactNode,
	useContext,
	createContext,
	useState,
	useEffect,
} from "react";
import { auth } from "../firebase";
import { User } from "../types/user";

type AuthContextType = {
	currentUser: User | null;
	signup: (email: string, password: string) => Promise<any>;
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

	function signup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
