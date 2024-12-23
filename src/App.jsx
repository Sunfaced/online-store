import 'normalize.css'
import "./index.css"
import Navigate from "./components/navigate/Navigate"
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { CartProvider } from './components/navigate/shoppingCart/CartContext'

function App() {
  return (
    <>
    <CartProvider>
      <Navigate/>
      <Header/>
      <Main/>
      <Footer/>
      </CartProvider>
    </>
  )
}

export default App
