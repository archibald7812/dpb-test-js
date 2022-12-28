import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { RatesPage } from "./pages/RatesPage/RatesPage";
import { ConvertPage } from "./pages/ConvertPage/ConvertPage";

function App() {

  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ConvertPage />} />
            <Route path='rates' element={<RatesPage />} />
          </Route>
        </Routes>
      </>
    </HashRouter>)
}

export default App;
