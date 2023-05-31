import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/UserNav/AppBar";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { authOperations } from "./Redux/Auth";
import PrivateRoute from "./Components/UserNav/PrivatRoute"

const HomePage = lazy(() => import('./Pages/Home'));
const RegisterForm = lazy(() => import('./Components/RegisterForm'));
const LoginForm = lazy(() => import('./Components/LoginForm'));
const AllReviews = lazy(() => import('./Components/Reviews'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <AppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          {/* <Route path="/contacts" element={<AllReviews/>}/> */}

          <Route path="/contacts"
          element={
            <PrivateRoute component={<HomePage />} />
          }
        />
          {/* <Route element={<PrivatRoute/>}>
            <Route path="/contacts" element={<HomePage/>}/>
          </Route> */}
          
          {/* <PrivatRoute path="/contacts">
            
          </PrivatRoute> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
