import { useEffect, useState } from 'react';

export default function useFetch() {
    
    const [data, setData] = useState({});
    const [error, setError] = useState(undefined);
    const [isLoading ,setIsLoading] = useState(true);
    
    async function fetchData() {
        setIsLoading(true);
        setError(undefined);

        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.API_KEY}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            setData(data);
        } catch(error) {
            setError(error.message);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, isLoading, fetchData };
}