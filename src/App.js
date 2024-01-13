import SideNavComponent from "./components/navs/SideNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="w-screen h-screen">
        <Layout/>
      </div>
    </>
  );
}

export default App;
