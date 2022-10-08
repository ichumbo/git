import { Link } from 'react-router-dom';
import './Cards.css';

export const Cards = (props) => {
    const propsProducts = props.products;

    return (
        <div>
            <ul className="cards">
                {propsProducts.map((product, i) => {
                    const { name, category, image, price } = product;
                    if (category !== 'All') {
                        return (
                            <li
                                key={`product-${name}`}
                            >
                                <Link to={`${category}/${name}`}>
                                    <h4>{name}</h4>
                                    <picture>
                                        <img
                                            key={image}
                                            src={image}
                                            alt=''
                                        />
                                    </picture>
                                    <div className="price-car">
                                        <h6 className="price">
                                            {price}
                                        </h6>
                                        {/* add car   */}
                                    </div>
                                </Link>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}