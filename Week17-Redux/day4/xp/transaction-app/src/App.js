import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TransactionForm from './component/TransactionForm';
import { store } from './reducers/transactionReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
           <TransactionForm />
        </Provider>

      </header>
    </div>
  );
}

export default App;
