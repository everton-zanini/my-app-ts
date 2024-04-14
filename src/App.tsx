import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import Conta from './pages/Conta';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box backgroundColor={'#500080'} minHeight='100vh'>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
            </Routes>
          </Layout>
        </Box>
      </ChakraProvider>
    </BrowserRouter>

  )
}

export default App;