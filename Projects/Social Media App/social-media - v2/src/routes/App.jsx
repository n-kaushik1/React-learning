import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import CreatePost from "../components/createpost";
// import Postlist from "../components/Postlist";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSlectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSlectedTab={setSlectedTab} />
        <div className="content">
          <Header />
          {/* {selectedTab === "Home" ? <Postlist /> : <CreatePost />} */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
