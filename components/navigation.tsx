"use client";

import Link from "next/link";
import { useState } from "react";
import { FiTv } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiSpeakerHigh } from "react-icons/pi";
import { RiLinksFill } from "react-icons/ri";

const Navigation = () => {
    const [more, setMore] = useState(false);
    return (
        <div className="absolute top-0 right-0 p-[14px] px-[20px] flex flex-end items-center text-xl font-semibold cursor-pointer gap-[20px]">
            <Link href={'/'} className="border-solid border-b-[4px] border-transparent hover:border-blue-400 hover:text-blue-400 leading-[24px]">MAIN</Link>
            <Link href={'/public'} className="border-solid border-b-[4px] border-transparent hover:border-blue-400 hover:text-blue-400 leading-[24px]">NOTICE</Link>
            <span onClick={()=> setMore(true)} className="border-solid border-b-[4px] border-transparent hover:border-blue-400 hover:text-blue-400 leading-[24px]">MORE</span>
            {/* <Link href={'https://play.sooplive.co.kr/lumiynus2'} target="_blank" className="border-solid border-b-[4px] border-transparent hover:border-[#0444B3] hover:text-[#0444B3] leading-[24px]">SOOP</Link> */}
            {/* <Link href={'https://www.youtube.com/@lumiynus22'} target="_blank" className="border-solid border-b-[4px] border-transparent hover:border-[#FF0000] hover:text-[#FF0000] leading-[24px]">YOUTUBE</Link> */}
            {/* <Link href={'https://www.youtube.com/channel/UC0dX-4o5UigUSZdJmgel85Q'} target="_blank" className="border-solid border-b-[4px] border-transparent hover:border-[#A87474] hover:text-[#A87474] leading-[24px]">ASMR</Link> */}
            {/* <Link href={'https://www.tiktok.com/@lumiynus2?lang=ko-KR'} target="_blank" className="border-solid border-b-[4px] border-transparent hover:border-[#FF3B5C] hover:text-[#FF3B5C] leading-[24px]">TICTOC</Link> */}
            {
                more &&
                (
                    <div className="w-screen h-screen z-10 fixed left-0 top-0 cursor-default">
                        <div className="w-full h-full bg-black/40"></div>
                        <div className="w-[calc(100%-28px)] max-w-[600px] rounded-[8px] bg-white p-[20px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <LuPlus className="absolute right-[14px] top-[14px] rotate-[45deg] w-[28px] h-[28px] cursor-pointer z-[50]" onClick={()=> setMore(false)}/>
                            <h2>정보</h2>
                            <p className="text-base mt-[10px]">SOOP에서 활동중인 히영씨입니다😊</p>
                            <h3 className="mt-[40px]">정보</h3>
                            <p className="flex justify-start items-center text-base mt-[14px]"><MdOutlineEmail className="w-[24px] h-[24px] mr-[10.5px]"/>lumibhole22@gmail.com</p>
                            <Link href={'https://ch.sooplive.co.kr/lumiynus2'} target="_blank" className="flex justify-start items-center text-sm mt-[14px]"><FiTv className="w-[24px] h-[24px] mr-[10.5px]"/>https://ch.sooplive.co.kr/lumiynus2</Link>
                            <Link href={'https://www.youtube.com/@lumiynus22'} target="_blank" className="flex justify-start items-center text-sm mt-[14px]"><RiLinksFill className="w-[24px] h-[24px] mr-[10.5px]"/>https://www.youtube.com/@lumiynus22</Link>
                            <Link href={'https://www.youtube.com/channel/UC0dX-4o5UigUSZdJmgel85Q'} target="_blank" className="flex justify-start items-center text-sm mt-[14px]"><PiSpeakerHigh className="w-[24px] h-[24px] mr-[10.5px]"/>https://www.youtube.com/channel/UC0dX-4o5UigUSZdJmgel85Q</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navigation;