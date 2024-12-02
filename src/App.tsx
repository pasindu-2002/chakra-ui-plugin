import React from 'react';
import { Provider } from "./components/ui/provider";
import { EmptyState } from "./components/ui/empty-state";
import { LuShoppingCart } from "react-icons/lu";
import './App.css';
import CookiesConfirm from './plugin/CookiesConfirm';
function App() {
  return (
      <Provider>
          <CookiesConfirm /> 
      </Provider>
  );
}

export default App;