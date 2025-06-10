import './App.css'
import todo from './components/todo';
import {Provider} from "react-redux";
import {store} from "./app/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <todo/>
    </Provider>
    </>
  );
}

export default App;
