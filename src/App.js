import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Article1 from "./components/articles/Article1";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/event" element={<Events/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/article1" element={<Article1/>}/>
      </Routes>
    </div>
  );
}
