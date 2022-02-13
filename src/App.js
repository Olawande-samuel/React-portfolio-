import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navv from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import ServicesGroup from "./Components/Services/ServicesGroup";
import Portfolio from "./Components/Portfolio";
import Form from "./Components/Forms/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navv />
				<Header />
				<ServicesGroup />
				<About />
				<Portfolio />
				<Form />
				{/* <Switch>
					<Route exact path="/" component={Header} />
					<Route path="/about" component={About} />
					<Route path="/services" component={ServicesGroup} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact-me" component={Form} />
				</Switch> */}
			</div>
		</Router>
	);
}

export default App;
