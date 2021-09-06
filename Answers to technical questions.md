# Answers to technical questions


## 1. How long did you spend on the coding assignment? 

I spent three evenings to do the coding assignment.

### a. What would you add to your solution if you had more time?

if I had more time, I would add React Router to my solution to enable the navigation among views with diferent URLs.

### b. If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

A web application typically consists of a lot of pages and often involves requesting data from back-end servers to refresh data of pages. 

Routing is the ability to move between different parts of an application when a user enters a URL or clicks an element (link, button, icon, image etc) within the application.

This coding assignment implements the functions of books searching by title and pagination display of books. page routing is convenient for users to navigate, especially to the previous page or the next page. so, it is worth adding React Router to my React solution.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it. 

The most useful feature is Arrow Functions. Arrow functions allows a short syntax for writing function expressions and provides great convenience for developers. 

I used it a lot in my solution. For example:
```
          <div className="list-content">
            {list.map((book, index) => {
              return <BookListItem book={book} key={index} />;
            })}
          </div>
```

```
  const handleInputChange = (event) => {
    setSearchTitle(event.target.value);
  };
```

## 3. How would you track down a performance issue in production? Have you ever had to do this?

User experience is much important for front-end development. I use  Chrome->inspect, such as Network, Performance, Memory, LightHouse, to help me to track down performance issues. 

## 4. How would you improve the API that you just used?

I would improve the APIs that I just used at the following two points:

##### 1. Covers API

I find that some searched books have no cover images, which could not trigger onError event of **img** element. So I have to make conditional judgment in onLoad event of **img** element to display a substitute image instead of blank cover space.

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

To solve this problem, I would improve Covers API to trigger onError event when book cover is not available.

##### 2. Documentation

I find some fields are missing in the API documentation on **openlibrary**. 

To solve this problem, I would improve the APIs by adding clear and detailed description for each fields, examples to API documentation.


## 5. Please describe yourself using correctly formatted JSON.
```
{
  "name": "Xiaomin Guo",
  "address": "Markham, ON, Canada",
  "objective": "Front End Engineer",
  "degree": "Master of Computer Science",
  "lanuage": [
     "English", 
     "Mandarin"
  ],
  "skills": [
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJS"
  ],
  "advantage": [
    "passionate",
    "prefessional",
    "self-motivated"
  ]
}
```