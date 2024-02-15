import axios, { AxiosResponse } from "axios";

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      ell: {
        official: string;
        common: string;
      };
      tur: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    ell: string;
    tur: string;
  };
  translations: {
    ara: {
      official: string;
      common: string;
    };
    // ... (other translations)
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    "2018": number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

// Define an asynchronous function called 'getCountries' that returns a Promise of an array of Country objects.
const getCountries = async (): Promise<Country[]> => {
  try {
    // Make an HTTP GET request to 'https://restcountries.com/v3.1/all' using axios.
    const response: AxiosResponse<Country[]> = await axios.get('https://restcountries.com/v3.1/all');

    // Extract the data (an array of Country objects) from the response.
    const data: Country[] = response.data;

    // Sort the countries alphabetically by their common names (case-insensitive).
    const sortedCountries = data.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Return the sorted array of countries.
    return sortedCountries;
  } catch (error: any) {
    // If an error occurs during the HTTP request, catch it and throw a new Error with a descriptive message.
    throw new Error('Error fetching countries: ' + (error.message || 'Unknown error'));
  }
};

// Export the 'getCountries' function so that it can be used in other parts of the application.
export default getCountries;