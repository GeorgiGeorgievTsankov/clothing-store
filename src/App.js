import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponents from "./Routes/Home/HomeComponent";
import { NavigationComponent } from './Routes/Navigation/NavigationComponent';
import { NotFoundComponent } from './Routes/NotFound/NotFoundComponent';
import { SignInComponent } from './Routes/Sign-In/SignInComponent';
import { ShopPageComponent } from './Routes/ShopPage/ShopPageComponent';


const App = () => {

  return (
    <Router>
      <NavigationComponent />
      <Switch>
        <Route exact path="/">
          <HomeComponents />
        </Route>
        <Route path="/sign-in">
          <SignInComponent />
        </Route>
        <Route path="/shop">
          <ShopPageComponent />
        </Route>
        <Route path="*">
          <NotFoundComponent />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
