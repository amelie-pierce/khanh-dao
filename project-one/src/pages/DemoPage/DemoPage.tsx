import "./DemoPage.scss";
import Form from "./Form";
import SceneWrapper from "./SceneWrapper";

const DemoPage = () => {
  return (
    <div className="demo__page">
      <div className="demo__page__section">
        <Form />
      </div>
      <div className="demo__page__3d">
        <SceneWrapper />
      </div>
    </div>
  );
};
export default DemoPage;
