import { Container } from "react-bootstrap";
import { Signup } from "./Signup";
import { Login } from "./Login";

import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../pages/Profile";

function App() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Routes>
							<Route path="/signup" element={<Signup/>}/>
							<Route path="/login" element={<Login/>}/>
							<Route path="/profile" element={<Profile/>}/>
							<Route path="/" element={<Profile/>}/>
							<Route></Route>
						</Routes>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
