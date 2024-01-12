import SideNavComponent from "./components/navs/SideNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
     {/* <ToastContainer />
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer /> */}
      <ToastContainer />
      <div className="w-screen h-screen bg-slate-800">
        <SideNavComponent />
      </div>
    </>
  );
}

export default App;
