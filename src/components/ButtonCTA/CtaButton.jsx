import Link from 'next/link'
import React from 'react'

export default function CtaButton({content = "Submit Your Menuscript" , link = "#" , className="bg-[#1f2a44] text-white hover:text-black"}) {
  return (
    <div className={`${className} px-4 w-fit py-2 rounded-sm border-2 border-black hover:bg-white hover:scale-95`}>
        <Link href={link} className='font-semibold text-[14px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>{content}</Link>
    </div>
  )
}
