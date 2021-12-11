import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './Main.css';
import {APP_PATHS} from 'app/contants';
import Home from 'app/routes/Home';
import About from 'app/routes/About';
import Pricing from 'app/routes/Pricing';
import Career from 'app/routes/Career';
import Login from 'app/routes/Login';
import Signup from 'app/routes/Signup';
import Layout from 'app/components/Layout';
import ProtectedRoutes from '../ProtectedRoutes';
import Team from 'app/routes/Team';

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={APP_PATHS.HOME} element={<Home />} />
            <Route path={APP_PATHS.ABOUT} element={<Home />} />
            <Route path={APP_PATHS.PRICING} element={<Home />} />
            <Route path={APP_PATHS.CAREER} element={<Home />} />
            <Route path={APP_PATHS.RESET_PASSWORD} element={<Home />} />
            <Route path={APP_PATHS.ABOUT} element={<About />} />
            <Route path={APP_PATHS.PRICING} element={<Pricing />} />
            <Route path={APP_PATHS.CAREER} element={<Career />} />
            <Route path={APP_PATHS.LOGIN} element={<Login />} />
            <Route path={APP_PATHS.SIGNUP} element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route path={APP_PATHS.USER.BASE} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default Main;
