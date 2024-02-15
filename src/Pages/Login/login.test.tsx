import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './login';

describe('Login Component', () => {
    it('renders Login component with all elements', () => {
        const { queryAllByText, getByLabelText, getByRole } = render(
            <Router>
                <Login />
            </Router>
        );

        // Check if at least one element with the text 'Login' is present.
        const loginElements = queryAllByText('Login');
        expect(loginElements.length).toBeGreaterThan(0);

        // Check if the title is rendered.
        //expect(getByText('Login')).toBeInTheDocument();

        // Check if the email input is rendered.
        expect(getByLabelText('E-mail')).toBeInTheDocument();

        // Check if the password input is rendered.
        expect(getByLabelText('Password')).toBeInTheDocument();

        // Check if the login button is rendered.
        const loginButton = getByRole('button', { name: 'Login' });
        expect(loginButton).toBeInTheDocument();
    });
});