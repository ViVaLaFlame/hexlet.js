let library = [];

const addBook = (title, author, year, genre, pageCount) => {
  const book = {
    title,
    author,
    year,
    genre,
    pageCount,
  };
  library.push(book);
};

const removeBook = (title) => {
  library = library.filter((book) => book.title !== title);
};

const findBooksByAuthor = (author) => {
  library.filter((book) => book.author === author);
};

const filterBooksByGenre = (genre) => {
  library.filter((book) => book.genre === genre);
};

const genreReport = () => {
  const report = {};
  library.forEach((book) => {
    if (report[book.genre]) {
      report[book.genre] += 1;
    } else {
      report[book.genre] = 1;
    }
  });
  return report;
};

const averagePagesReport = () => {
  const totalBooks = library.length;
  const totalPageCount = library.reduce((sum, book) => sum + book.pageCount, 0);
  return totalPageCount / totalBooks;
};
