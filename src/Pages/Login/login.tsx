import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Loader, LoginButton, LoginContainer, LoginForm, LoginInput, LoginLabel, LoginTitle } from './login.styles';

// Mocked email and password for testing purposes.
const MOCKED_EMAIL = 'felipe@email.com';
const MOCKED_PASSWORD = '12345';

// Define the Login component.
function Login() {
    // State variables to manage the component's state.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Hook for navigating between different views.
    const navigate = useNavigate();

    // Determine whether the login button should be disabled based on input validation.
    const isLoginButtonDisabled = !email || !password;

    // Function to handle the login process.
    const handleLogin = () => {
        // Set loading state to true to show a loader.
        setIsLoading(true);
        // Simulate an asynchronous login process with a setTimeout.
        setTimeout(() => {
            // Check if the entered credentials match the mocked values.
            if (email === MOCKED_EMAIL && password === MOCKED_PASSWORD) {
                // If valid, navigate to the '/countries-list' route.
                navigate('/countries-list');
            } else {
                // If invalid, set an error message.
                setErrorMessage('Invalid credentials');
            }
            // Set loading state back to false after the simulated login process.
            setIsLoading(false);
        }, 2000); // Simulated login delay of 2000 milliseconds (2 seconds).
    };

    // Function to handle the form submission.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Check if the login button is not disabled before calling the handleLogin function.
        if (!isLoginButtonDisabled) {
            handleLogin();
        }
    };

    // Render the component's UI.
    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                {/* Title of the login form. */}
                <LoginTitle>Login</LoginTitle>

                {/* Input field for email with an event handler to update the 'email' state. */}
                <LoginLabel htmlFor="email">E-mail</LoginLabel>
                <LoginInput
                    placeholder='your e-mail address'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Input field for password with an event handler to update the 'password' state. */}
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                    placeholder='your password'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Login button with a loader displayed when loading. */}
                <LoginButton type="submit" disabled={isLoginButtonDisabled || isLoading}>
                    {isLoading ? <Loader /> : 'Login'}
                </LoginButton>

                {/* Display an error message if there is one. */}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </LoginForm>
        </LoginContainer>
    );
}

// Export the Login component to make it available for use in other files.
export default Login;