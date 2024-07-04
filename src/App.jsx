import React from 'react';
import { ApiProvider } from './contexts/ApiContext';
import ProductTable from './components/ProductTable';
import Header from './components/Header';
import './App.css'

const App = () => {
    return (
        <ApiProvider className=''>
          <div className='app h-full'>
          <Header />
            <div className="App px-8 mb-100">
                <ProductTable />
            </div>
            </div>
        </ApiProvider>
    );
};

export default App;


