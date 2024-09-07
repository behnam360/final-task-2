import ComponentDidUpdate from "./component/show/ComponentDidUpdate.jsx";
import ShowLoading from "./component/show-loading/showLoading.jsx";
import ShowPostWithclass from "./component/show-post-withClass/class-component.jsx";
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
      </section>
    </>
  );
}

export default App;
