import { RouteComponentProps, withRouter } from 'react-router-dom';

const EmptyCart = ({ history }: RouteComponentProps) => (
  <div>
    <h6>There are no items in the cart</h6>
    <button onClick={() => history.push('/shop')}>Shop now!</button>
  </div>
);

export default withRouter(EmptyCart);
