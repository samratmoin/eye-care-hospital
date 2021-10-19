// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Contact from "./pages/Contact/Contact";
import EyeSymptoms from "./pages/EyeSymptoms/EyeSymptoms/EyeSymptoms";
import SymptomDetails from "./pages/EyeSymptoms/SymptomDetails/SymptomDetails";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Header from "./pages/Shared/Header/Header";
import TreatmentDetails from "./pages/Treatments/TreatmentDetails/TreatmentDetails";
import Treatments from "./pages/Treatments/Treatments/Treatments";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/treatments">
              <Treatments></Treatments>
            </PrivateRoute>
            <Route path="/symptoms">
              <EyeSymptoms></EyeSymptoms>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/symptom/:symptomId">
              <SymptomDetails></SymptomDetails>
            </PrivateRoute>
            <PrivateRoute path="/treatment/:treatmentId">
              <TreatmentDetails></TreatmentDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
