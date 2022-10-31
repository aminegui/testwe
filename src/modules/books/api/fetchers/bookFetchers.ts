import axiosClient from '../../../../../axios/axios';
import { BookEndpoint } from '../endpoints/book.endpoints';
import { Book } from '../types/book.types';
export const BookFetchers = {
  getBooks: async () => {
    const res = await axiosClient.get<Book[]>(BookEndpoint.GET_BOOKS);
    return res.data;
  },
};
