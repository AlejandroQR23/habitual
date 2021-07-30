import { ReactComponent as Heart } from '../../assets/heart.svg';

import {
  CardBodySm,
  CardContainerSm,
  CardFooterSm,
  CardImgSm,
  CardPriceContainer,
  CardPriceSm,
} from '../../styles/product-card.styles';
import { getDiscount, IProduct } from '../../redux/shop/shop-data';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.reducer';

const ProductCard = ({ item }: { item: IProduct }) => {
  const { name, img, discount, price } = item;
  const dispatch = useAppDispatch();

  return (
    <CardContainerSm>
      <CardImgSm>
        <img src={img} alt="product image" />
        <div onClick={() => dispatch(addItem(item))}>
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
};

export default ProductCard;
