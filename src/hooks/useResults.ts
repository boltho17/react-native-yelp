import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        searchApi('Pizza').then();
    }, [])

    const searchApi = async (searchTerm: string) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'oslo',
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            console.log(e);
            setErrorMessage('Noe gikk galt. Prøv igjen!')
        }
    }
    return [searchApi, results, errorMessage]
}
