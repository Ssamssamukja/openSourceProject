import { BrowserRouter, Route, Routes } from "react-router-dom";

import AIPage from "./pages/AIPage";
import Header from "./components/Header"
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route
    path = "/search"
    element={
      <SearchPage />} />
      <Route 
      path= "/AI"
      element={
        <AIPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;