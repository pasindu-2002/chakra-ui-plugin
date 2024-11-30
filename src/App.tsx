import React from 'react';
import { Provider } from "./components/ui/provider";
import { EmptyState } from "./components/ui/empty-state";
import { LuShoppingCart } from "react-icons/lu";
import TooltipComponent from './TooltipComponent';
import './App.css';
function App() {
  return (
      <Provider>
        <div className='App'>
          <EmptyState
            icon={<LuShoppingCart />}
            title="Your cart is empty"
            description="Explore our products and add items to your cart"
          />
          <TooltipComponent description='Click to Add New Items for your cart' />
        </div>
      </Provider>
  );
}

export default App;