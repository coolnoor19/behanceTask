import Image from 'next/image'
import React from 'react'

const CenterCard = () => {
  return (
    <div>
      <div className="w-[460px] flex flex-col items-center justify-center p-10">
        <div className="rounded-2xl p-10">
          <Image src={"/notion.svg"} alt="Notion" width={140} height={140} />
        </div>
      </div>
    </div>
  )
}

export default CenterCard
