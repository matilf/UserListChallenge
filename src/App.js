import { Provider } from "react-redux";
import CrudApi from "./components/CrudApi";
 import store from "./store";
 import './App.css';

function App() {
  return (
    
    
    <Provider store={store}>
      <div style={{ textAlign: "left", margin: "10px 40px 30px 50px" }}>
        <h1>Dashboard</h1>
        <CrudApi />
       </div>
    </Provider>
    
  );
}

export default App;
