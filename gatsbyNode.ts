const path = require(`path`);
import { GatsbyNode } from 'gatsby';
import { getBooks } from './src/Clients/booksClient';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions;
  // fetch the list of books server side and pass it to the books page
  // to avoid the heavy load of fetching at runtime (client side)
  const booksList = await getBooks();

  createPage({
    path: '/books',
    component: path.resolve(`./src/components/Books.tsx`),
    context: {
      booksList,
      currency: '€'
    }
  });
};
