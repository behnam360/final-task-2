import ComponentDidUpdate from "./show/ComponentDidUpdate.jsx";
import ShowLoading from "./show-loading/showLoading.jsx";
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
      </section>
    </>
  );
}

export default App;
