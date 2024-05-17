import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { CategoriesPreviewComponent } from '../CategoriesPreview/CategoriesPreviewComponent';
import { CategoryComponent } from '../Category/CategoryComponent';
import './ShopPageStyle.css';

export const ShopPageComponent = () => {
    return (
        <Switch>
            <Route exact path="/shop" component={CategoriesPreviewComponent} />
            <Route path="/shop/:category" component={ CategoryComponent } />
            {/* Допълнителен маршрут за основната страница на магазина */}
            <Route path="/shop" component={CategoriesPreviewComponent} />
        </Switch>
    );
};










