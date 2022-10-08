import { Link } from 'react-router-dom';

export const SecFilterCategory = (props) => {
    const productsCategories = props.categories;
    // console.log(productsCategories);
    
    return (
        <nav className="sidebar categories">
            <h3>Categorias</h3>
            <ul className="categories">
                {productsCategories.map((category, i) => {
                    return (
                        <li key={`${category[i]}`}
                            className={`category-${category}`}
                        >
                            <Link to={`./?category=${category}`}
                                id={`${category}`}
                                onClick={props.onClick}
                            >
                                {category}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* <Link to="#">Test</Link>  */}
            {/* <Link to="#" key={products.id} onClick={() => filterResultCat('LipTint')}>LipTint</Link>
            <Link to="#" key={products.id} onClick={() => filterResultCat('Rímel')}>Rímel</Link>
            <Link to="#" key={products.id} onClick={() => filterResultCat('Sombra')}>Sombra</Link> */}
            {/* {propsProducts.map((product, i) => {
                return (
                    <Link
                        to={`./?category=`}
                        key={product.id}
                    >
                            test
                    </Link>
                );
            })} */}
        </nav>
    );
}