'use client'
import Header from "@/components/Header";
import Keyboard from "@/components/Keyborad";
import { useState } from "react";
import Display from "@/components/Display";
import { evaluate } from "mathjs";
export default function Home() {
  const [input, setInput] = useState ('')
    const [result, setResult] = useState('');
  const [history, setHistory] = useState<string[]>([]);
 
 
  const handleClick = (value: string) => {
    if (value === '=') {
      try {
         const result = evaluate(input);
         setResult(result);
         setHistory([...history, `${input} = ${result}`]);
      } catch (error){
        setResult('Error')
      }
      } else {
        setInput(prev => prev + value);
      }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };
 
  return (
    <div className="font-sans  ">
      <Header pageTitle="Calculator"/>
     
      < Display input={input} result={result}/>
     
      <Keyboard onClick={handleClick}/>
    </div>
  );
}
// 'use client';
// import Header from "@/components/Header";
// import Display from "@/components/Display";
// import { useState } from "react";

// export default function Home() {
//   const [num1, setNum1] = useState<number | ''>('');
//   const [num2, setNum2] = useState<number | ''>('');
//   const [result, setResult] = useState<number | null>(null);

//   const handleCalculation = (operator: string) => {
//     const a = Number(num1);
//     const b = Number(num2);
//     if (isNaN(a) || isNaN(b)) return;

//     switch (operator) {
//       case '+':
//         setResult(a + b);
//         break;
//       case '-':
//         setResult(a - b);
//         break;
//       case '*':
//         setResult(a * b);
//         break;
//       case '/':
//         setResult(b !== 0 ? a / b : NaN);
//         break;
//     }
//   };

//   return (
//     <div className="font-sans min-h-screen bg-gray-100">
//       <Header pageTitle="Basic Calculator" />
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-sm mx-auto">
//         <input
//           type="number"
//           value={num1}
//           onChange={(e) => setNum1(e.target.value === '' ? '' : Number(e.target.value))}
//           placeholder="First number"
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <input
//           type="number"
//           value={num2}
//           onChange={(e) => setNum2(e.target.value === '' ? '' : Number(e.target.value))}
//           placeholder="Second number"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <div className="flex justify-between mb-4">
//           {['+', '-', '*', '/'].map((op) => (
//             <button
//               key={op}
//               onClick={() => handleCalculation(op)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               {op}
//             </button>
//           ))}
//         </div>
//         <Display input={`${num1} ${num2}`} result={result !== null ? result.toString() : '—'} />
//       </div>
//     </div>
//   );
// }

