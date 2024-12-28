import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        hideProgressBar={true}
        position='top-right'
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}

export default App;
