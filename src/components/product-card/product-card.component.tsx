import { ReactComponent as Heart } from '../../assets/heart.svg';

import {
  CardBodySm,
  CardContainerSm,
  CardFooterSm,
  CardImgSm,
  CardPriceContainer,
  CardPriceSm,
} from '../../styles/product-card.styles';
import { getDiscount } from '../../redux/shop/shop-data';
import product from '../../assets/bose-headset.png';

interface ProductProps {
  name: string;
  price: number;
  discount: number;
}
const ProductCard = ({ name, price, discount }: ProductProps) => (
  <CardContainerSm>
    <CardImgSm>
      <img src={product} alt="product image" />
      <div>
        <Heart />
        Add to cart
      </div>
    </CardImgSm>
    <CardBodySm>
      <p>{name}</p>
      <CardPriceContainer>
        <CardPriceSm>
          <h6>$ {getDiscount(discount, price)}</h6>
          <span>{price}</span>
        </CardPriceSm>
      </CardPriceContainer>
      <CardFooterSm>
        <p className="review">
          <strong>5.0</strong>(34)
        </p>
      </CardFooterSm>
    </CardBodySm>
  </CardContainerSm>
);

export default ProductCard;
