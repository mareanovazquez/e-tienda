import { createContext, type Dispatch } from "react";
import type { CartAction, CartState } from "./cartReducer";

interface CartContextType {
    state: CartState;
    dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext({} as CartContextType);
