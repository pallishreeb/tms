import SideNavComponent from "./components/navs/SideNav";
import Shipments from "./screens/shipments/Shipments"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="w-screen h-screen mt-2">
        {/* <Layout/> */}
        <Shipments/>
      </div>
    </>
  );
}

export default App;
