import { getProducts } from './../../data';
import { SecFilterCategory } from '../../components/Category/SecFilterCategory';
import { Cards } from '../../components/Cards/Cards';
import './Products.css';
import { useState } from 'react';

function Products() {
    const products = getProducts();
    const [product, setProduct] = useState(products);
  
    // categories
    const uniqueItems = (x, i, array) => array.indexOf(x) === i;
    const productsCategories = products.map((prod, i) => {
        const elClicked = true;

        // !!! elClicked={elClicked}
        if (prod.category) {
            console.log('test');
            // return (

            // );
        } 
        
        return prod.category;
        
        // console.log(prod.category);
        // !!! old
        // return prod.category

        // !!! botar um if baseado no estado atual? (https://pt-br.reactjs.org/docs/conditional-rendering.html)
        // return (<>{ prod.category } || {prod.name}</>);
    }).filter(
        uniqueItems
    );

    const displayProdCat = (e) => {
        setProduct(() => console.log(product.map((prod) => console.log(prod.name))));
        // console.log('test');
        // console.log(e.target);
        // setProduct((e)=>{
        //     console.log(e.target);
        // })
        //  setProduct(() => {
        //      console.log(e.target.id);
            
        //     //  if (e.target.display === false) {
        //     //      console.log(e.target.display);
        //     //      e.target.display = true;
        //     //  }
        //  })

        // setProduct(() => console.log(product.name));
    }

    return (
        <div className="products flex">
            {/* <FilterCategory /> */}
            <SecFilterCategory categories={productsCategories} onClick={displayProdCat} />
            <div className="main-products">
                <h1>Principais Produtos</h1>
                <Cards products={products} />
            </div>
        </div>
    );
}

export default Products;