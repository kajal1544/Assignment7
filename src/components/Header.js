import '../App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AiOutlineShoppingCart, AiFillShop } from 'react-icons/ai';

function Header(props) {
  return (
    <div className='flex shopping-card'>
      <div onClick={() => props.handleShow(false)}>
        Shopping Cart App
        <AiFillShop />
      </div>
      <div className="login-btn">
        Logged In
      </div>
      <div onClick={() => props.handleShow(true)}>
        <  AiOutlineShoppingCart />
        <sup>{props.count}</sup>
      </div>
    </div>
  );
}

export default Header;


