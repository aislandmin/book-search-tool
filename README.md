# Task Report

Build a Book Search Tool

## Complete all task requirements

### 1. URL to access

[https://book-search-aislandmin.vercel.app/](https://book-search-aislandmin.vercel.app/)

Host the app on Vercel.

### 2. Skills used

**ReactJS**, JavaScript, HTML, CSS/SCSS/CSS Module, Redux, React Hooks

No UI library used.

### 3. Code structure and components

**src->redux**: redux to store book list data requested from API.

**src->views**: three **components** to build webpage:

**book-search**: input book title. trigger search. trigger search action by button click and enter key press on the keyboard.

**book-list**: display search result as a paginated list with ten records per page. sort by title alphabetically, more recently published. 

**book-list-item**: single book record. each book display information of title, book cover, author, published date.

**src->views->common**: common functions and constants for components to use.

**src->App.test.js  setupTest.js**: jest test.

### 4. Open Library APIs used

#### Search books by title
for example:

```
https://openlibrary.org/search.json?title=The Great Gatsby&fields=title,author_name,isbn,publish_date,first_publish_year&page=1&limit=10
```

title: title keyword to search
fields: fields to request from server
page: page number
limit: number of book records per page

#### Acquire book cover by ISBN
for example:

```
http://covers.openlibrary.org/b/isbn/0385472579-S.jpg
```

book cover image size: S: Small  M: Medium L: Large

#### Sort by title alphabetically
i.e. Search books by title + sort=title

for example:
```
https://openlibrary.org/search.json?title=The Great Gatsby&fields=title,author_name,isbn,publish_date,first_publish_year&page=1&limit=10&sort=title
```

according to Github issues: [Sort works alphabetically #224](https://github.com/internetarchive/openlibrary/pull/224) and [Ability to sort search results by classification, random #4607](https://github.com/internetarchive/openlibrary/pull/4607/commits/cb2185ce6ba7df7e0ea1161fa62fbaeb78cacfc2), search results should and can be sorted alphabetically by title. However, it does not work in my tests. 

So, I have to temporarily comment the corresponding code.
```
    switch (sortType) {
      case 1: //1: Title alphabetically
        //url += "&sort=title"; //this doesn't work, why?
        break;
```

#### Sort by more recently published
i.e. Search books by title + sort=new
```
https://openlibrary.org/search.json?title=The Great Gatsby&fields=title,author_name,isbn,publish_date,first_publish_year&page=1&limit=10&sort=new
```

### 5. UI Responsive 

The webpage looks good on all devices.

### 6. fully WCAG 2.0/2.1 AA compliant for the entire page

scored 100% for WCAG compliance on 
[https://siteimprove.com/en-ca/](https://siteimprove.com/en-ca/accessibility/wcag-compliance-website-checker/?utm_campaign=ca_fy20_ppc_accessibility&utm_medium=ppc&utm_source=google&utm_content=wcag&gclid=EAIaIQobChMI68u81azp8gIVhIzICh0mMAMfEAAYBCAAEgK_EvD_BwE)

### 7. perform well in a Lighthouse audit - Performance, SEO, Accessibility
Chrome->inspect->Lighthouse: 
Performance 100, Accessibility 88, SEO 90

### 8. work in common browsers, desktop and mobile (Chrome, Safari, Firefox)
work well.

### 9. Answers to technical questions.md sent in this repository.
Done. Please see [Answers to technical questions.md](https://github.com/aislandmin/book-search-tool/blob/main/Answers%20to%20technical%20questions.md).
