import { Provider } from "react-redux";
import MainGame from "./components/MainGame";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <MainGame />
    </Provider>
  );
}
