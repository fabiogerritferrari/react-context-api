import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Components/Pages/HomePage"
import ProductPage from "./Components/Pages/ProductPage"
import SingleProductPage from "./Components/Pages/SingleProductPage"
import AboutPage from "./Components/Pages/AboutPage"
import DefaultLayout from "./Components/Layout/DefaultLayout"
import { BudgetProvider } from "./Components/contexts/BudgetContext"

function App() {

  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/product/:id" element={<SingleProductPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
