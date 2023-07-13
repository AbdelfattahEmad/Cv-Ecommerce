import './App.scss';
import { RouterProvider } from 'react-router';
import routes from '@core/routes/routes';
import { Provider } from 'react-redux';
import store from '@store/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  );
}

export default App;
