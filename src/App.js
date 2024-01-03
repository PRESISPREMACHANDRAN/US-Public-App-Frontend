import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddData from "./Components/AddData";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import Search from "./Components/Search";
import ViewAll from "./Components/ViewAll";


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/header" exact element={<Header/>}/>
  <Route path="/"  exact element={<AddData/>}/>
  <Route path="/search"  exact element={<Search/>}/>
  <Route path="/viewAll"  exact element={<ViewAll/>}/>
  <Route path="*"  exact element={<NotFound/>}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
