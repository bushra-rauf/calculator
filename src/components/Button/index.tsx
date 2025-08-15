import { buttonProps } from "@/Utils/types"
const Button = ({label, onClick}:buttonProps) => {
    return(
       <button className=" w-10 bg-blue-500 text-white py-2 px-4 rounded mx-auto hover:bg-blue-600" onClick={()=> onClick(label)}>
        {label}
       </button>
    )
}

export default Button