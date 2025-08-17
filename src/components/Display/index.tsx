import { displayProps } from "@/Utils/types"
const Display = ({input, result}: displayProps) => {
    return (
     
         <div data-testid='displayscreen' className="bg-gray-100 p-4  mb-4 text-right text-2xl border max-w-90 mx-auto h-24">
         <h3>{input || "0"}</h3>
          <h2 className='text-right text-3xl font-bold'>{result}</h2>

      </div>
       
    )

}

export default Display