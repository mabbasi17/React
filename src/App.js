import './index.css'
import Dashboard from './Pages/Dashboard';
import DashboardLayout from "./Pages/dashboard-layout";
import Products from './Pages/Products';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import {router} from './Utils/routes'


function App() {
  const content = useRoutes(router)
  return (
    <div className="App">

    {content}
 
    </div>
  );
}

export default App;
