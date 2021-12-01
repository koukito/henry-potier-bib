// useAxios hook (first draft)

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Offer } from '../models/books.models';

axios.defaults.baseURL = 'https://henri-potier.techx.fr';

// this hook can be refactored to be more generic
const useCommercialOffers = (isbns: Array<string>) => {
  const [response, setResponse] = useState<Array<Offer>>(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(`/books/${isbns.join(',')}/commercialOffers`)
      .then((res) => {
        setResponse(res.data.offers);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (isbns.length > 0) {
      fetchData();
    }
  }, [isbns.length]);

  // custom hook returns value
  return { response, error, loading };
};

export default useCommercialOffers;
