import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <About image={blogData.image} about={blogData.about}/>
      <Header name={blogData.name}/>
    </div>
  );
}

export default App;
