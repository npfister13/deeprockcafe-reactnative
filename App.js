import React from 'react';
import Main from './components/MainComponent'
import store from './redux/store'
// import { Provider } from 'react-redux';


export default function App() {
  return (
    // <Provider store={store}>
      <Main />
    // {/* </Provider> */}
  );
}