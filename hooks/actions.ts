import { useDispatch } from "react-redux"
import { bindActionCreators } from '@reduxjs/toolkit'
import { productsActions } from "../store/products/products.slice"

const actions = {
    ...productsActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}