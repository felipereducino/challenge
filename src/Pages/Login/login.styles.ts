import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LoginLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  /* Styles for the disabled state */
  ${(props) =>
    props.disabled &&
    css`
      background-color: #999; /* Change the color for the disabled state */
      cursor: not-allowed;
    `}
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #1877f2; /* Match the button color */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

export const ErrorMessage = styled.div`
  color: #ff4500;
  margin-top: 10px;
  font-size: 14px;
`;