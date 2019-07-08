import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from '../components/Index';
import Contact from '../components/Contact';
import About from '../components/About';

class AppRouter extends Component {
    render(){
        return (
            <div>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path='/' exact component={Index}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact/:name' component={Contact}/>
                </Router>
            </div>
        );
    };
}

export default AppRouter;