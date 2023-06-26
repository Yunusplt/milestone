import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './router/AppRouter';
import store from './app/store';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
