import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';

import "./checkout.style.scss";

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
    }
    <div className="total">
        <div>TOTAL : ${total}</div>
        <div className='test-warning'>
          *Plese use the fooliwing test credit card for payments*
          <br/>
          4242 4242 4242 4242 - Wxp: 08/20 - CVV: 123
        </div>
        <StripCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
