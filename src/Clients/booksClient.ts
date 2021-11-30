import axios from 'axios';
import { Book } from '../models/books.models';
const BOOKS_ENDPOINT = 'https://henri-potier.techx.fr/books';

// this is a basic implementation of the get books api,
// in case we have more api calls we'll create a library for it that handles failures and retrials and creates an axios config
const getBooks = async () => {
  const { data } = await axios.get<Array<Book>>(BOOKS_ENDPOINT);
  return data;
};

export { getBooks };
