import { ReactComponent as Heart } from '../../assets/heart.svg';
import { addItem } from '../../redux/cart/cart.reducer';
import { useAppDispatch } from '../../redux/hooks';

import { getDiscount, IProduct } from '../../redux/shop/shop-data';
import { Pill } from '../../styles/pill.styles';
import {
  CardBody,
  CardContainer,
  CardFooter,
  CardImg,
  CardPrice,
  CardPriceContainer,
} from '../../styles/product-card.styles';

interface IProductCardProps {
  item: IProduct;
  category: string;
}
const ProductCardLg = ({ item, category }: IProductCardProps) => {
  const { name, img, discount, price } = item;
  const dispatch = useAppDispatch();

  return (
    <CardContainer>
      <CardImg>
        <img src={img} alt="product image" />
        <div onClick={() => dispatch(addItem(item))}>
          <Heart />
          Add to cart
        </div>
      </CardImg>
      <CardBody>
        <p>{name}</p>
        <CardPriceContainer>
          <CardPrice>
            <h5>$ {getDiscount(discount, price)}</h5>
            <span>{price}</span>
          </CardPrice>
          {discount > 0 ? <Pill>{discount}% OFF</Pill> : ''}
        </CardPriceContainer>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, explicabo?</p>
        <CardFooter>
          <p className="review">
            <strong>5.0</strong>(34)
          </p>
          <p className="category">{category}</p>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default ProductCardLg;
