import React from 'react';
import './App.css';
import FirstComponent from './components/firstcomponent';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/Index';
import AppRouter from './routes/AppRouter';

function App() {
  let styles = {
    padding: '100px',
  };
  return (
    <div className="row">
      <div className="col-md-4 offset-4" style={styles}>
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
