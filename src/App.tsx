import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import CountriesList from './Pages/CountriesList/countries-list';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/countries-list' element={<CountriesList />} />
    </Routes>
  );
}

export default App;