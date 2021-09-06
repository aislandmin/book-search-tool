import styles from "./book-list-item.module.scss";

function BookListItem(props) {
  const isbn = props.book.isbn ? props.book.isbn[0] : "";

  return (
    <div className={styles["list-item-container"]}>
      <div className="book-cover">
        <img
          alt={`Book cover of ${props.book.title}`}
          src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
          onError={(event) => {
            event.target.src = "/book_cover.png";
          }}
          onLoad={(event) => {
            if (event.target.height < 5 && event.target.width < 5) {
              event.target.src = "/book_cover.png";
            }
          }}
        />
      </div>
      <div className="book-info">
        <h1 className="book-info-title">{props.book.title}</h1>
        <div className="book-info-author">
          By:&nbsp;
          <span>
            {props.book.author_name &&
              props.book.author_name.reduce((author1, author2) => {
                return author1 + "," + author2;
              })}
          </span>
        </div>
        <div className="book-info-first-published">
          First published in {props.book.first_publish_year}
        </div>
        <div className="book-info-publish-date">
          Published date:&nbsp;
          <span>
            {props.book.publish_date &&
              props.book.publish_date.reduce((date1, date2) => {
                return date1 + "," + date2;
              })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookListItem;
