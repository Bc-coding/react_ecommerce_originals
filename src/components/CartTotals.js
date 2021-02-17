import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { useUserContext } from "../context/user_context";

function CartTotals() {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <article>
        <h5>
          subtotal : <span>{formatPrice(total_amount)}</span>
        </h5>
        <p>
          shipping fee : <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr />
        <h4>
          order total : <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
      {myUser ? (
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      ) : (
        <button type="button" className="btn" onClick={loginWithRedirect}>
          login
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;

    width: 350px;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
`;

export default CartTotals;
