import React from 'react'
import AppRouter from './routers/AppRouter';
import 'alertifyjs/build/css/alertify.min.css';
import ScrollToTop from './pages/ScrollToTop';


const App = () => {
  return (
    <div>
      <AppRouter />
      <ScrollToTop />

    </div>
  )
}
export default App