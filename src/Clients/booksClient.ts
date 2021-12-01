import axios from 'axios';
import { Book } from '../models/books.models';

axios.defaults.baseURL = 'https://henri-potier.techx.fr';
// this is a basic implementation of the get books api,
// in case we have more api calls we'll create a library for it that handles failures and retrials and creates an axios config
const getBooks = async () => {
  const { data } = await axios.get<Array<Book>>('/books');
  return data;
};

export { getBooks };
