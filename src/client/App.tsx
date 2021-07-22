import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../../pages/Home'

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
  const [greeting, setGreeting] = useState([]);

  useEffect(() => {
    async function getGreeting() {
      try {
        const res = await fetch("/api/chirps");
        const greeting = await res.json();
        setGreeting(greeting);
      } catch (error) {
        console.log(error);
      }
    }
    getGreeting();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* {() => <h1>Hey There Buddy Boy ;)</h1>} */}
          <Home />
        </Route>
        <Route exact path="/api">

        </Route>
        <Route exaxt path="/api/chirps">

        </Route>
        <Route exaxt path="/api/chirps/:id?">

        </Route>
        <Route exact path="*">
          {() => <h1>Something Went Wrong, Try Again!</h1>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
  // greeting.map((chirp) => <h1>{chirp.name}</h1>))
};

// <main className="container my-5">
// 	<h1 className="text-primary text-center">Hello {greeting}!</h1>
// </main>

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
