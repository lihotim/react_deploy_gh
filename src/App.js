import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import EditPost from "./EditPost"
import About from "./About"
import Missing from "./Missing"

import { Route, Routes } from "react-router-dom"
import { DataProvider } from "./context/DataContext"

// react-router v6
function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header title={`React JS Blog`} />

        <DataProvider>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/post" element={<NewPost/>} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
        </Routes>
        </DataProvider>

        <Footer />
        {/* </Router> */}
    </div>
  );
}

export default App;
