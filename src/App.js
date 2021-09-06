import { Provider } from "react-redux";
import store from "./redux/store";
import BookSearch from "./views/book-search";
import BookList from "./views/book-list";

function App() {
  return (
    <Provider store={store}>
      <BookSearch />
      <BookList />
    </Provider>
  );
}

export default App;
