import { connect } from "react-redux";
import { useEffect, useState } from "react";
import BookListItem from "./book-list-item";
import styles from "./book-list.module.scss";
import { updateList } from "../redux/book-slice";
import {
  requestBookList,
  LIMIT_PER_PAGE,
  sortTypeArray,
} from "./common/common-functions";

function BookList(props) {
  const [pagination, setPagination] = useState([]);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const title = props.bookList.title;
  const number = props.bookList.number;
  const sortType = props.bookList.sortType;
  const list = props.bookList.list;
  const currentPage = props.bookList.page;
  const updateList = props.updateList;
  const pageCount = Math.ceil(number / LIMIT_PER_PAGE);

  useEffect(() => {
    let tmpPagination = [];
    if (pageCount <= 6) {
      for (let i = 1; i <= pageCount; i++) {
        tmpPagination.push(i);
      }
      setShowArrowLeft(false);
      setShowArrowRight(false);
    } else if (pageCount >= 9) {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          tmpPagination.push(i);
        }
        tmpPagination.push("...");
        tmpPagination.push(pageCount);

        setShowArrowLeft(currentPage !== 1);
        setShowArrowRight(true);
      } else if (currentPage > pageCount - 4) {
        tmpPagination.push(1);
        tmpPagination.push("...");
        for (let i = pageCount - 4; i <= pageCount; i++) {
          tmpPagination.push(i);
        }
        setShowArrowLeft(true);
        setShowArrowRight(currentPage !== pageCount);
      } else {
        tmpPagination.push(1);
        tmpPagination.push("...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          tmpPagination.push(i);
        }
        tmpPagination.push("...");
        tmpPagination.push(pageCount);

        setShowArrowLeft(true);
        setShowArrowRight(true);
      }
    } else {
      //pageCount: 7 or 8
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          tmpPagination.push(i);
        }
        tmpPagination.push("...");
        tmpPagination.push(pageCount);

        setShowArrowLeft(currentPage !== 1);
        setShowArrowRight(true);
      } else {
        // currentPage >= 5
        tmpPagination.push(1);
        tmpPagination.push("...");
        for (let i = pageCount - 4; i <= pageCount; i++) {
          tmpPagination.push(i);
        }

        setShowArrowLeft(true);
        setShowArrowRight(currentPage !== pageCount);
      }
    }
    setPagination(tmpPagination);
  }, [pageCount, currentPage]);

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const sortType = parseInt(e.target.options[selectedIndex].value); //int:0 1 2

    requestBookList(updateList, title, sortType);
  };

  const handlePageChange = (e) => {
    //update current page number and send request get books on this page
    let newCurrentPage = currentPage;
    switch (e.target.name) {
      case "previous-arrow":
        newCurrentPage = currentPage - 1;
        requestBookList(updateList, title, sortType, newCurrentPage);
        break;
      case "next-arrow":
        newCurrentPage = currentPage + 1;
        requestBookList(updateList, title, sortType, newCurrentPage);
        break;
      case "...":
        break;
      default:
        newCurrentPage = Number(e.target.name);
        requestBookList(updateList, title, sortType, newCurrentPage);
    }
  };

  return (
    <>
      {number !== 0 && (
        <div className={styles["list-container"]}>
          <div className="list-header">
            <div className="list-number">
              {number} results found for <strong>{title}</strong>
            </div>
            <div className="list-sort">
              <label className="list-sort-label" htmlFor="sortTypes">
                Sort by:
              </label>
              <select
                className="list-sort-dropdown"
                name="sortTypes"
                id="sortTypes"
                onChange={handleSelectChange}
              >
                {sortTypeArray.map((item, index) => {
                  if (index === sortType) {
                    return (
                      <option value={index} key={index} selected>
                        {item}
                      </option>
                    );
                  } else {
                    return (
                      <option value={index} key={index}>
                        {item}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>
          <div className="list-content">
            {list.map((book, index) => {
              return <BookListItem book={book} key={index} />;
            })}
          </div>
          <div className="list-footer">
            <div className="list-footer-pagination">
              {showArrowLeft && (
                <button className="arrow-left-btn" onClick={handlePageChange}>
                  <img
                    alt="previous page"
                    src="/arrow_left.png"
                    name="previous-arrow"
                  />
                </button>
              )}
              <div className="pagination-number">
                {pagination.map((item, index) => {
                  return (
                    <button
                      className={
                        item === "..."
                          ? "pagination-number-item"
                          : item === currentPage
                          ? "pagination-number-item current"
                          : "pagination-number-item number"
                      }
                      key={index}
                      name={item}
                      onClick={handlePageChange}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {showArrowRight && (
                <button className="arrow-right-btn" onClick={handlePageChange}>
                  <img
                    alt="next page"
                    src="/arrow_right.png"
                    name="next-arrow"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default connect(
  (state) => {
    const { bookList } = state;
    return { bookList };
  },
  { updateList }
)(BookList);
