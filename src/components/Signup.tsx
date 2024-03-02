import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export function Signup() {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
	const { signup } = useAuth();


	function handleSubmit(e) {
		e.preventDefault();
		signup(emailRef.current?.value, passwordRef.current.value)
	}


	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Email</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control type="email" ref={passwordConfirmRef} required />
						</Form.Group>
						<Button className="w-100" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
				<div className="w-100 text-center mt-2"></div>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? Log In
			</div>
		</>
	);
}
