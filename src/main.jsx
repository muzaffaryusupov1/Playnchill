import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './style/main.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{
          baseTheme: dark
        }} >
          <App />
        </ClerkProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
