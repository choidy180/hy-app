import Image from 'next/image';
import SoopLogo from '../public/SOOP_LOGO_Blue.png';
import YoutubeLogo from '../public/Youtube_logo.png';
import TicTocLogo from '../public/TicToc.png';
import Link from 'next/link';
import moment from 'moment';
import { IoMdRefresh } from 'react-icons/io';
import DefaultImage from '../public/hqdefault.webp';
import DefaultImage2 from '../public/hqdefault2.webp';
import { useState } from 'react';

const TitleComponent = () => {
    const isClient = typeof window !== 'undefined';
    const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center pt-[200px] pb-[200px]">
            <h1 className='text-2xl font-semibold mb-[80px]'>⭐️히영씨의 게임 왕국에 오신 여러분 환영합니다⭐️</h1>
            <div className='flex justify-center items-center gap-[14px]'>
                <Link href={'https://ch.sooplive.co.kr/lumiynus2'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-blue-100 text-blue-700 font-semibold rounded-[14px] text-2xl flex justify-center items-center">
                        <Image
                            src={SoopLogo}
                            width={70}
                            height={50}
                            alt='...'
                            className=''
                        />
                    </button>
                </Link>
                <Link href={'https://www.youtube.com/channel/UCFefwc_rwPc0G3TXMu2hKrA'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-red-100 text-[#F00] font-semibold rounded-[14px] text-2xl flex justify-center items-center">
                        <Image
                            src={YoutubeLogo}
                            width={44}
                            height={50}
                            alt='...'
                            className=''
                        />
                    </button>
                </Link>
                <Link href={'https://www.tiktok.com/@lumiynus2?lang=ko-KR'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-pink-100 text-[#F00] font-semibold rounded-[14px] text-2xl flex justify-center items-center">
                        <Image
                            src={TicTocLogo}
                            width={44}
                            height={50}
                            alt='...'
                            className=''
                        />
                    </button>
                </Link>
            </div>
            <h1 className="font-bold text-6xl mt-[60px]"><span className="text-[#FF0000]">YOUTUBE</span><span className='ml-[14px]'>VIEWCOUNT</span></h1>
            <div className='w-full max-w-[1024px] flex justify-end items-center mt-[100px] border-b-[1.4px] borde-solid border-[#CDCDCD] pb-[14px]'>
                updated {isClient ? time : ''}
                <IoMdRefresh className='w-[20px] h-[20px] ml-[4px] cursor-pointer transition-all hover:rotate-90 text-blue-400' onClick={()=> setTime(moment().format('YYYY-MM-DD HH:mm:ss'))}/>
            </div>
            <div className='w-[calc(100%-40px)] max-w-[1024px] flex flex-col justify-start items-center mt-[28px]'>
                <div className='w-full flex justify-start items-center mb-[20px]'>
                    <div className='w-[40px]'/>
                    <div className='w-[120px] flex justify-center items-center'>
                        <span className='font-semibold'>영상 정보</span>
                    </div>
                    <div className='w-[300px] px-[12px]'>

                    </div>
                    <div className='absolute flex right-0'>
                        <div className='w-[180px] text-[#FF0000] font-semibold text-center'>증감</div>
                        <div className='w-[180px] text-[#FF0000] font-semibold text-center'>누적</div>
                        <div className='w-[200px] text-[#000000] font-semibold text-center'>게시일</div>
                    </div>
                </div>
                <Link href={'https://www.youtube.com/watch?v=CBNX-xUm65I&t=6s'} className='w-full transition-all flex justify-start items-start cursor-pointer group hover:h-[200px]' target='_blank'>
                    <div className='absolute transition-all right-0 w-[calc(100%-40px)] h-0 group-hover:h-[200px]'>
                        <Image
                            src={DefaultImage}
                            layout='fill'
                            objectFit='cover'
                            alt='...'
                            className='opacity-0 brightness-75 transition-all group-hover:opacity-100'
                        />
                    </div>
                    <div className='w-[40px] h-[80px] font-bold text-xl flex justify-center items-center text-[#FF0000]'>
                        1
                    </div>
                    <div className='w-[120px] h-[80px] flex justify-center items-center rounded-[6px] overflow-hidden'>
                        <Image
                            src={DefaultImage}
                            width={120}
                            height={60}
                            alt='...'
                        />
                    </div>
                    <div className='w-[300px] h-[80px] flex justify-center items-center px-[12px]'> 
                        <p className='text-sm leading-4 font-semibold group-hover:text-white'>너가 뭘 할 수 있는데ㅋㅋㅋ 히영씨의 여자아이돌 이상형 월드컵 1~4세대</p>
                    </div>
                    <div className='absolute flex right-0'>
                        <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>🔺 1,021,750</div>
                        <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>122,905,498</div>
                        <div className='w-[200px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>2024.05.12</div>
                    </div>
                </Link>
                <Link href={'https://www.youtube.com/watch?v=X9YXxEVI2XY&t=381s'} className='w-full transition-all flex justify-start items-start cursor-pointer group hover:h-[200px]' target='_blank'>
                    <div className='absolute transition-all right-0 w-[calc(100%-40px)] h-0 group-hover:h-[200px]'>
                        <Image
                            src={DefaultImage2}
                            layout='fill'
                            objectFit='cover'
                            alt='...'
                            className='opacity-0 brightness-75 transition-all group-hover:opacity-100'
                        />
                    </div>
                    <div className='w-[40px] h-[80px] font-bold text-xl flex justify-center items-center'>
                        2
                    </div>
                    <div className='w-[120px] h-[80px] flex justify-center items-center rounded-[6px] overflow-hidden'>
                        <Image
                            src={DefaultImage2}
                            width={120}
                            height={60}
                            alt='...'
                        />
                    </div>
                    <div className='w-[300px] h-[80px] flex justify-center items-center px-[12px]'> 
                        <p className='text-sm leading-4 font-semibold group-hover:text-white'>Ep.3 첫 보스를 만난 뉴비 [끔찍한 흉조의 멀기트/몬성 클리어/스톰빌성 입구] 엘든링3화</p>
                    </div>
                    <div className='absolute flex right-0'>
                        <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>🔺 1,004,330</div>
                        <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>112,642,338</div>
                        <div className='w-[200px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>2024.07.25</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TitleComponent