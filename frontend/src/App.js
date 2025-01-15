import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './pages/UserPage';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to My App</h1>
                </header>
                <main>
                    <Switch>
                        <Route path="/users" component={UserPage} />
                        {/* Other routes */}
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
