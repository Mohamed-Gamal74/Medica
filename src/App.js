import { BrowserRouter, Router, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/Doctors" component={Doctors} /> */}
        <div style={{height:"90vh" ,backgroundColor:"#000" }} ></div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
