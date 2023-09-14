import React from 'react'
// const FunctionalComponent = (props) => {
//     console.log("val=",     props.val);
//     return (
//         <div>{props.val}</div>
//     )
// }

// export default FunctionalComponent   
// higher order component
export default React.memo((props) => {
    console.log("val=", props.val);
    return (
        <div >
            {props.val} 
        </div>
    )   
})