import http from './http-common';

const getSearchBook = (id, m_user) => {
  return http.get(`/api/library/book/search?b_id=${id}`);
}

const getAllBook = (id, m_user) => {
  return http.get(`/api/library/book/all`);
}

const BookService = {
  getSearchBook,
  getAllBook
};

export default BookService;