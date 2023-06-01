import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/UserNav/AppBar";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { authOperations } from "./Redux/Auth";
import PrivateRoute from "./Components/UserNav/PrivatRoute"
import ReviewsPage from "./Pages/ReviewsPage/ReviewsPage";
import RestrictedRoute from "./Components/RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import('./Pages/Home'));
const RegisterForm = lazy(() => import('./Components/RegisterForm'));
const LoginForm = lazy(() => import('./Components/LoginForm'));
// const AllReviews = lazy(() => import('./Components/Reviews'))

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
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
            }
          />
          <Route path="/contacts"
            element={
            <PrivateRoute component={<ReviewsPage />} />
            }
          />

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
