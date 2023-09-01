import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../buoi6/module/action/action"
const Buoi6 = () => {
  const data = useSelector((state) => state.reducerBuoi6.data);
  const isLoading = useSelector((state) => state.reducerBuoi6.isLoading);
  console.log(isLoading);
  const dispatch  = useDispatch();
  useEffect(() => {
      dispatch(action.actGetProductAPI())
  },[])
  return (
    <div>


    </div>
  )
}

export default Buoi6