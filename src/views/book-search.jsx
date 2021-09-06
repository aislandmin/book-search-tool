import { connect } from "react-redux";
import { useState } from "react";
import styles from "./book-search.module.scss";
import { updateList } from "../redux/book-slice";
import { requestBookList } from "./common/common-functions";

function BookSearch(props) {
  const [searchTitle, setSearchTitle] = useState("");
  const sortType = props.bookList.sortType;
  const updateList = props.updateList;

  const handleInputChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTitle !== "") {
      requestBookList(updateList, searchTitle, sortType);
    } else {
      alert("Please input the book title you want to search");
    }
  };

  const handleKeyUpEnter = (e) => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // trigger search button click
      handleSearchClick();
    }
  };

  return (
    <div className={styles["search-container"]}>
      <h1 className="search-title">Welcome to Book Search</h1>
      <div className="search-wrapper">
        <input
          className="search-input"
          type="search"
          placeholder="Please input book title"
          name="bookTitle"
          value={searchTitle}
          onChange={handleInputChange}
          onKeyUp={handleKeyUpEnter}
          data-testid="book-title-search-input"
        />
        <button
          className="search-btn"
          type="button"
          onClick={handleSearchClick}
          data-testid="book-title-search-btn"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    const { bookList } = state;
    return { bookList };
  },
  { updateList }
)(BookSearch);
