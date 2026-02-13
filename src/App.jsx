import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Questions from "./pages/Questions";
import Topics from "./pages/Topics";
import TopicPage from "./pages/TopicPage";
import Meetings from "./pages/Meetings";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename="/vkr-2026">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="questions" element={<Questions />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/:id" element={<TopicPage />} />
          <Route path="meetings" element={<Meetings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
