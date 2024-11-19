import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/auth'
import { ProductProvider } from './hooks/product'
import { CategoryProvider } from './hooks/category'
import { OrderProvider } from './hooks/order'
import { FavoriteProvider } from './hooks/favorites'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <OrderProvider>
              <FavoriteProvider>
                <GlobalStyles/>
                <Routes/>
                <ToastContainer theme='dark'/>
              </FavoriteProvider>
            </OrderProvider>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
