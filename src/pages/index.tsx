import type { NextPage } from 'next';
import Head from 'next/head';
import { BooksList } from '../modules/books/components/BooksList/BooksList';
import { useBooksList } from '../modules/books/components/BooksList/useBooksList.hook';
import { PageLayout } from '../modules/core/components/Layout/PageLayout';

const Home: NextPage = () => {
  const { books, error } = useBooksList();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <BooksList books={books} />
      </PageLayout>
    </div>
  );
};

export default Home;
