import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <AppRouter />
        </Provider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
