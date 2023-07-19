import React from 'react'
import Buoi4 from './buoi4'

export const Child = () => {
    const a = {
        student: "truong quang vuong",
        student1: "chó thắng",
        student2: "chou lười học"
    }
    const b = () => {
        console.log(" truong quang vuong");
    }

    const array = [
        1,2,3,4,5
    ]
    return (
        <div>
            <Buoi4 demo={a} demo2={b} demo3 ={array} />
        </div>
    )
}
