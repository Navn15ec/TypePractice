import { Ordered , Restocked} from "./cakeSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const CakeView = () => {
    const numOfCakes = useAppSelector(state=>state.cake.numOfCakes);
    const dispatch = useAppDispatch();

  return (
    <>
    <h1>CakeContainer</h1>
    <h2>Number of cakes -{numOfCakes}</h2>
    <button onClick={()=>dispatch(Ordered())}>Order</button>
    <button onClick={()=>dispatch(Restocked(5))}>Restock Cake</button>
    </>
  )
}

export default CakeView
