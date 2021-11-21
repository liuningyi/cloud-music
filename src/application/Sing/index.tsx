import {memo}from "react";

interface SingProps{}

const Sing:React.FC<SingProps>=(props:any)=>{
    return (
        <div>Sing</div>
    )
}

export default memo(Sing);