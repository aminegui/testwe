import useSWR from 'swr';
import { BookEndpoint } from '../../api/endpoints/book.endpoints';
import { BookFetchers } from '../../api/fetchers/bookFetchers';
export const useBooksList = () => {
  const { data, error } = useSWR(
    BookEndpoint.GET_BOOKS,
    () => BookFetchers.getBooks(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
    }
  );
  return {
    books: data,
    error,
  };
};
