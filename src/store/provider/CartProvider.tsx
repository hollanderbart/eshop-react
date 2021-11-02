import { createContext, ReactNode, useContext, useReducer } from 'react';

export type CartProduct = {
  productId: number;
  quantity: number;
  price: number;
};

type State = {
  cartProducts: CartProduct[];
  addProduct: (productId: number, price: number) => void;
  removeProduct: (productId: number) => void;
};

const initialState: State = {
  cartProducts: [],
  addProduct: () => {
    throw new Error(
      'Default Cart value used. Did you forget to wrap everything in CartProvider?',
    );
  },
  removeProduct: () => {
    throw new Error(
      'Default Cart value used. Did you forget to wrap everything in CartProvider?',
    );
  },
};

type Action =
  | { type: 'add-product'; productId: number; price: number }
  | { type: 'remove-product'; productId: number }
  | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add-product':
      const existingIndex = state.cartProducts.findIndex(
        (existingProduct) => existingProduct.productId === action.productId,
      );
      if (existingIndex !== -1) {
        const test = {
          ...state,
          cartProducts: [
            ...state.cartProducts.map((product, index) => {
              if (index !== existingIndex) {
                return product;
              }
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }),
          ],
        };
        return test;
      } else {
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            {
              productId: action.productId,
              quantity: 1,
              price: action.price,
            },
          ],
        };
      }
    case 'remove-product':
      const removeIndex = state.cartProducts.findIndex(
        (existingProduct) => existingProduct.productId === action.productId,
      );
      if (removeIndex !== -1) {
        if (state.cartProducts[removeIndex].quantity === 1) {
          let newArray = state.cartProducts.slice();
          newArray.splice(removeIndex, 1);
          return {
            ...state,
            cartProducts: newArray,
          };
        } else {
          return {
            ...state,
            cartProducts: [
              ...state.cartProducts.map((product, index) => {
                if (index !== removeIndex) {
                  return product;
                }
                return {
                  ...product,
                  quantity: product.quantity - 1,
                };
              }),
            ],
          };
        }
      }
      return state;
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
};

const CartContext = createContext(initialState);

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cartProducts: state.cartProducts,
    addProduct: (productId: number, price: number) =>
      dispatch({ type: 'add-product', productId: productId, price: price }),
    removeProduct: (productId: number) =>
      dispatch({ type: 'remove-product', productId: productId }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
