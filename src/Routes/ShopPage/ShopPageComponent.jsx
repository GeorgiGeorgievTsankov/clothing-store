import { BrowserRouter as Router, Route} from 'react-router-dom';
import { CategoriesPreviewComponent }  from '../CategoriesPreview/CategoriesPreviewComponent';

import "../ShopPage/ShopPageStyle.css"



export const ShopPageComponent = () => {

   
    
    
    return (
        <Router>
            <Route path="/">
                <CategoriesPreviewComponent />
            </Route>
        </Router>
    );
}
