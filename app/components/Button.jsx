import Image from 'next/image'
import React from 'react'

const Button = () => {
  return (
   
      <button className="flex items-center justify-center  gap-2 bg-[#01BEBB]  text-white font-semibold py-2 px-3 rounded-[8px] cursor-pointer">
              
                <Image src="/1.png" alt="Hero Image" width={18} height={18} />
              
              <span className='text-[12px]' >Get started</span>
            </button>
  
  )
}

export default Button
