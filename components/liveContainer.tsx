import Image from 'next/image';
import SoopLogo from '../public/SOOP_LOGO_Blue.png';
import YoutubeLogo from '../public/Youtube_logo.png';
import { useState } from 'react';

const LiveContainer = () => {
    const [todayLive, setTodayLive] = useState(false);
    return (
        <div className={`absolute left-[20px] top-[20px] w-[300px] p-[20px] bg-[#f1f2f6] shadow-xl rounded-[14px] cursor-pointer transition-all hover:scale-[1.02]`} onClick={()=> setTodayLive(!todayLive)}>
            {/* <h4 className='text-[#FFB7B7]'>오늘은 {moment().format('YYYY년 MM월 DD일')}</h4>
            <h4 className='text-[#FFB7B7]'>지금은 {realTime}</h4> */}
            <div className="font-semibold text-base flex justify-start items-center mt-[10px]">
                {/* {
                    todayLive ?
                    (
                        <MdSunny className='text-[34px] text-[#F79F1F]'/>
                    )
                    :
                    (
                        <IoRainyOutline className='text-[34px] text-[#747d8c]'/>
                    )
                } */}
                <h4 className='text-[24px]'>{todayLive ? '오후 9시에 만나요!' : '오늘은 휴방입니다!'}</h4>
                <span className='absolute right-0 text-blue-500' onClick={()=> window.open('https://ch.sooplive.co.kr/lumiynus2/post/137781715')}>더보기</span>
            </div>
                
            <div className="w-full flex justify-start items-center mt-3">
                <div className='w-[40px] h-[40px] flex justify-center items-center'>
                    <Image
                        src={SoopLogo}
                        width={40}
                        height={40}
                        alt='soop'
                        className=''
                    />
                </div>
                <span className='pl-[14px]'>
                    {todayLive ? '방송준비중입니다':'오늘은 휴방입니다'}
                </span>
            </div>
            <div className="w-full flex justify-start items-center">
                <div className='w-[40px] h-[40px] flex justify-center items-center'>
                    <Image
                        src={YoutubeLogo}
                        width={40}
                        height={40}
                        alt='soop'
                        className=''
                    />
                </div>
                <span className='pl-[14px]'>{todayLive ? '방송준비중입니다':'오늘은 휴방입니다'}</span>
            </div>

        </div>
    )
}

export default LiveContainer;