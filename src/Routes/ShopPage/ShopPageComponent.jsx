import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CategoriesPreviewComponent } from '../CategoriesPreview/CategoriesPreviewComponent';
import { CategoryComponent } from '../Category/CategoryComponent';
import './ShopPageStyle.css';

export const ShopPageComponent = () => {
    return (
        <Router>
            <Route exact path="/shop" component={CategoriesPreviewComponent} />
            <Route path="/shop/:category" component={CategoryComponent} />
            <Link to="/shop">Back to Shop</Link>
        </Router>
    );
};


