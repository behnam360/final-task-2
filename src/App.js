import ComponentDidUpdate from "./component/show/ComponentDidUpdate.jsx";
import ShowLoading from "./component/show-loading/showLoading.jsx";
import ShowPostWithclass from "./component/show-post-withClass/class-component.jsx";
import FunctionalComponent from "./component/show post with functional component/show post with functional component.jsx";
import PostList from "./component/class-component/postListClass.jsx";
function App() {
  return (
    <>
      <section>
        <div>
          <ComponentDidUpdate />
        </div>
        <div style={{ marginTop: "100px" }}>
          <ShowLoading />
        </div>
        <div style={{ marginTop: "100px" }}>
          <ShowPostWithclass />
        </div>
        <div style={{ marginTop: "100px" }}>
          <FunctionalComponent />
        </div>
        <div style={{ marginTop: "100px" }}>
          <PostList />
        </div>
      </section>
    </>
  );
}

export default App;
