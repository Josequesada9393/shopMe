import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WishListProvider } from './context/WishListContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './Utils/Firebase/Stripe/Stripe.utils';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
        <WishListProvider>
          <Elements stripe={stripePromise}>
            <App/>
            </Elements>
              </WishListProvider>
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
