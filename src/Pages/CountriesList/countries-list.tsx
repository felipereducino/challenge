import { useState, useEffect } from 'react';
import getCountries, { Country } from '../../Services/getCountries';
import { useNavigate } from 'react-router-dom';
import { CountriesListContainer } from './countries-list.styles';

// Define a functional component named 'CountriesList'.
function CountriesList() {
  // Define state variables using the 'useState' hook to manage the component's state.
  const [searchInput, setSearchInput] = useState(''); // State variable for the search input.
  const [countries, setCountries] = useState<Country[]>([]); // State variable for storing the fetched countries.
  const navigate = useNavigate(); // Hook for navigating between different views.

  // Function to filter countries by its official name based on the search input.
  const filterCountries = () => {
    return countries.filter((country) =>
      country.name.official.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  // Function to handle the 'Go back' button click event.
  const handleGoBack = () => {
    navigate(-1); // Use the 'navigate' hook to go back to the previous view.
  };

  // Effect hook to fetch countries when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch countries.
    const fetchCountries = async () => {
      try {
        // Call the 'getCountries' function to fetch the list of countries.
        const countriesData: Country[] = await getCountries();
        // Update the 'countries' state with the fetched data.
        setCountries(countriesData);
      } catch (error) {
        // Handle errors by logging them to the console.
        console.error(error);
      }
    };

    // Call the 'fetchCountries' function when the component mounts.
    fetchCountries();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts.

  // Render the component's UI.
  return (
    <CountriesListContainer>
      {/* Search input field with an event handler to update the 'searchInput' state. */}
      <input
        placeholder='Search for Country or Capital'
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* 'Go back' button with a click event handler to go back to the previous view. */}
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {/* Table to display the list of filtered countries. */}
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Country Flag</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the filtered countries and render a table row for each country. */}
          {filterCountries().map((country, index) => (
            <tr key={index}>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.flag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CountriesListContainer>
  );
}

// Export the 'CountriesList' component to make it available for use in other files.
export default CountriesList;