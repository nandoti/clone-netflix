import "./App.css";
import Banner from "./components/page/Banner";
import Row from "./components/Row";
import categories from "./components/shared/services/api";

function App() {
  return (
    <div className="App">
      <Banner/>
      {categories.map((category) => {
        return (
          <Row
            key={category}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
