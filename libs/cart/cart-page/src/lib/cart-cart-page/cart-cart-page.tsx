import React, { useReducer } from 'react';

import styled from '@emotion/styled';

import '@nx-example/shared/product/ui';

import {
  CartItem,
  cartReducer,
  getItemCost,
  getTotalCost,
  SetQuantity
} from '@nx-example/shared/cart/state';
import {
  getProduct,
  initialState,
  productsReducer
} from '@nx-example/shared/product/state';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 900px;
  padding: 10px;

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

const StyledLi = styled.li`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;

  figure {
    flex-shrink: 0;
    height: 125px;
    width: 125px;
    justify-content: center;
    display: flex;
    margin: 0;
  }

  select {
    width: 50px;
    margin: 0 20px;
  }

  .title {
    flex-grow: 1;
    margin-left: 50px;
  }

  @media screen and (max-width: 900px) {
    figure {
      width: 50px;
      height: 50px;
    }

    .title {
      margin-left: 1em;
    }
  }
`;

const StyledTotalLi = styled.li`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;

  h2 {
    flex-grow: 1;
    margin-left: 175px;
  }
`;

const optionsArray = new Array(5).fill(null);

export const CartCartPage = () => {
  const [productsState] = useReducer(productsReducer, initialState);
  const { products } = productsState;
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: products.map(product => ({
      productId: product.id,
      quantity: 1
    }))
  });

  return (
    <StyledUl>
     <a href="/product/index">Ekta</a>
    </StyledUl>
  );
};

export default CartCartPage;
