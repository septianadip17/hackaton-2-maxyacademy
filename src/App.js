import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Article1 from "./components/Article1";
import Notfound from "./components/Notfound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/article1" element={<Article1/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}
