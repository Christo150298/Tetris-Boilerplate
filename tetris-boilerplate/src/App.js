import { ContextProvider } from './js/store/context';
import router from './js/routes/routes';
import { RouterProvider } from 'react-router-dom';




function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider> 
  );
}

export default App;
