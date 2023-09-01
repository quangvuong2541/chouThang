import React from 'react'
import API from '../API/API'

const Buoi5 = () => {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await API(`GET`, "Foods")
        setState(res.data)

      }
      catch (error) {
        console.log({ ...error });
      }
    }
    callAPI()
  }, [])

  const renderListProduct = () => {
    const a = state;
    return (a?.map((item, key) => {
      return (
        <div key={key}>
          name : {item.name}
          <img src= {`./img/${item.image}`} />
        
        </div>
      )
    })
    )

  }
  // React.useEffect(() => {
  //   console.log(1 + 2);
  // }, [1])

  // console.log(1 + 3);

  // const [state, setState] = React.useState("1")
  // console.log(state);
  return (
    <div>{renderListProduct()}</div>
  )

  /**
   * useEffect : luôn là thằng chạy cuối cùng 
   * phần từ ngoài > useState > useEffect
   * 
   */
}

export default Buoi5