import { displayProps } from "@/Utils/types"
const Display = ({input, result}: displayProps) => {
    return (
     
         <div className="bg-gray-100 p-4  mb-4 text-right text-2xl border max-w-90 mx-auto h-24">
        {input || "0"}
          <h1 className='text-right text-3xl font-bold'>{result}</h1>
      </div>
       
    )

}

export default Display