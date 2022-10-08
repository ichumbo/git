// import { useParams } from 'react-router-dom';
// import { getProducts } from '../../data';
// import FilterCategory from './FilterCategory';

export function Category(props) {
    // let params = useParams();
    // let productCategory = params.productCategory;

    // const propsProducts = props.products;
    const productsCategories = props.PRODUCTS_CATEGORIES;
    const propsProduct = props.product;

    console.log(productsCategories);

    console.log(propsProduct);

    return (
        <div
            style={{ display: "flex" }}
            className="filter-category-wrapper"
        >
            {/* <FilterCategory /> */}
            <h3>Categoria atual: </h3>
            <ul>

            </ul>
        </div>
    );
}