import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CategoriesPreviewComponent } from '../CategoriesPreview/CategoriesPreviewComponent';
import { CategoryComponent } from '../Category/CategoryComponent';

import "../ShopPage/ShopPageStyle.css"




export const ShopPageComponent = () => {
    return (

        <Router>
            <Route index element={<CategoriesPreviewComponent />} />
            <Route path=':category' element={<CategoryComponent />} />
        </Router>

    )

}

