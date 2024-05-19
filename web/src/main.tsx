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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <GlobalStyles/>
            <Routes/>
            <ToastContainer theme='dark'/>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
