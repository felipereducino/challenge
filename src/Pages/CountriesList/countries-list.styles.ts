import styled from 'styled-components';

export const CountriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  input {
    margin-bottom: 10px;
    padding: 8px;
  }

  button {
    background-color: #1877f2;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
      border: 1px solid #ddd;
      padding: 15px;
      text-align: left;
    }

    th {
      background-color: #1877f2;
      color: #fff;
      font-weight: bold;
    }

    td {
      background-color: #f5f5f5;
    }

    tr:hover {
      background-color: #f0f0f0;
    }
  }
`;