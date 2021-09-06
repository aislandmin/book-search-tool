import axios from "axios";

export const LIMIT_PER_PAGE = 10;

export const sortTypeArray = [
  "Best match(default)",
  "Title alphabetically",
  "More recently published",
];

export const requestBookList = async (
  updateList,
  title,
  sortType = 0,
  page = 1,
  limit = LIMIT_PER_PAGE
) => {
  try {
    let url =
      "https://openlibrary.org/search.json?title=" +
      title +
      "&fields=title,author_name,isbn,publish_date,first_publish_year&page=" +
      page +
      "&limit=" +
      limit;

    switch (sortType) {
      case 1: //1: Title alphabetically
        //url += "&sort=title"; //this doesn't work, why?
        break;
      case 2: //2: More recently published
        url += "&sort=new";
        break;
      default:
        //0: Best match(default)
        break;
    }

    const response = await axios({
      url,
      method: "GET",
    });

    const bookList = {
      title,
      sortType,
      page,
      number: response.data.numFound,
      list: response.data.docs,
    };
    updateList(bookList);
  } catch (error) {
    alert("Error: " + error);
  }
};
