import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchContext from './Context/SearchContext';
import { ThemeProvider } from './Context/ThemeContext';
import UserContext from './Context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      
      <ThemeProvider>
        <main>
          <div className='absolute w-full right-0 top-0'>
            <UserContext>
              <SearchContext>
              <App />
              </SearchContext>
            </UserContext>
          </div>
        </main>
        </ThemeProvider>
 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
