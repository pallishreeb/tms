
import { Outlet } from 'react-router-dom';
import Header from './components/navs/Header';
import Footer from './components/navs/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  console.log("check")
  return (
    <>
    <ToastContainer />
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
  </>
  );
}

export default App;
