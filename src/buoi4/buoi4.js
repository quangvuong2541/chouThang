// import React, { Component } from 'react'
// import img1 from "../img/1.jpeg"
// import img2 from "../img/images.jpeg"
// export default class Buoi4 extends Component {
//     state = {
//         colors: img1
//     }
//     render() {
//         //    this.states = {
//         //         colors: img1
//         //     }
//         const changeImg = (img) => {
//             return (
//                 this.setState({
//                     colors: img
//                     //   doraemon
//                 })
//             )
//         }
//         return (
//             <div>
//                 <img style={{width:"400px", height:"400px"} } src={this.state.colors} />
//                 {/*  data bilding */}
//                 <button onClick={() => changeImg(img1)}> nhấn nút 1 </button>
//                 <button onClick={() => changeImg(img2)} >nhấn nút 2 </button>
//             </div>
//         )
//     }
// }


import React, { useState } from 'react'
import img1 from "../img/1.jpeg"
import img2 from "../img/images.jpeg"
const Buoi4 = ({demo,demo2, demo3}) => {
    // cách 1 : {demo}
    //  cách 2 : props
    const [state, setState] = useState(img1)
    return (
        <div>
            <img style={{ width: "400px", height: "400px" }} src={state} />
            <button onClick={() => setState(img1)}> nhấn nút 1 </button>
            <button onClick={() => setState(img2)} >nhấn nút 2 </button>
        </div>
    )
}

export default Buoi4