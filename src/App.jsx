import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CategoryList } from "./pages/category-list";
import { CategoryProduct } from "./pages/category-product";
import { CreateProduct } from "./pages/create-product";
import { Shop } from "./pages/shop";
import { Card } from "./pages/card";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/card" element={<Card />} />
          <Route path="/category-product/:id" element={<CategoryProduct />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
