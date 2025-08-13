import { buttonProps } from "@/Utils/types"
const Button = ({label, onClick}:buttonProps) => {
    return(
       <button className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600" onClick={()=> onClick(label)}>
        {label}
       </button>
    )
}

export default Button