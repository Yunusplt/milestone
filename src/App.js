import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <AppRouter />
            <Footer />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
