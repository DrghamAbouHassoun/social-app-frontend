import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { AuthProvider } from './contexts/AuthContext';

/**
 * The main application component.
 * This component is responsible for routing and rendering the different pages of the application.
 *
 * @returns {JSX.Element} - The JSX element representing the application.
 */
function App(): JSX.Element {
  return (
    /**
     * The root div of the application with custom CSS class and text color.
     * It wraps the BrowserRouter component to enable routing.
     */
    <div className="App text-gray-800">
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
