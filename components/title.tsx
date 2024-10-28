import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { IoMdRefresh } from 'react-icons/io';
import DefaultImage from '../public/hqdefault.webp';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TitleComponent = () => {
    const isClient = typeof window !== 'undefined';
    const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    const [videos, setVideos] = useState<any>(null);

    const fetchVideos = async () => {
        try {
            // 1. Search endpoint를 통해 기본 비디오 목록 가져오기
            const searchResponse = await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                    params: {
                        key: 'AIzaSyDNXdyTU9lX3BTOgCDkX1-xOyvmrQXLQso',
                        channelId: 'UCFefwc_rwPc0G3TXMu2hKrA',
                        part: "snippet",
                        type: "video",
                        maxResults: 100,
                    },
                }
            );
            const videoIds = searchResponse.data.items.map((item:any) => item.id.videoId).join(",");
            const videosResponse = await axios.get(
                "https://www.googleapis.com/youtube/v3/videos",
                {
                    params: {
                    key: 'AIzaSyDNXdyTU9lX3BTOgCDkX1-xOyvmrQXLQso',
                    id: videoIds,
                    part: "snippet,contentDetails,statistics,status",
                    },
                }
            );
            // 4. 60초 이상인 비디오만 필터링
            const longVideos = videosResponse.data.items.filter((item:any) => {
                const duration = item.contentDetails.duration;
                const seconds = parseISO8601Duration(duration);
                return seconds > 60;
            });

            // 5. 조회수 별로 비디오 목록 정렬
            const sortedVideos = longVideos.sort((a:any, b:any) =>
                parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)
            );
            // 5. 최종 비디오 목록 설정
            setVideos(sortedVideos);
        } catch (error) {
            console.error("Error fetching videos", error);
        }
    }
    // ISO 8601 Duration 포맷을 초 단위로 변환하는 함수
    const parseISO8601Duration = (duration:any) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = (parseInt(match[1]) || 0) * 3600;
        const minutes = (parseInt(match[2]) || 0) * 60;
        const seconds = parseInt(match[3]) || 0;
        return hours + minutes + seconds;
    };
    useEffect(()=> {
        fetchVideos();
    },[]);
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center pt-[200px] pb-[200px]">
            <h1 className='text-2xl font-semibold mb-[40px]'>⭐️히영씨의 게임 왕국에 오신 여러분 환영합니다⭐️</h1>
            <div className='flex justify-center items-center gap-[14px]'>
                <Link href={'https://ch.sooplive.co.kr/lumiynus2'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-blue-100 text-blue-700 rounded-[14px] text-2xl flex justify-center items-center font-bold font-[yg-jalnan]">
                        {/* <Image
                            src={SoopLogo}
                            width={70}
                            height={50}
                            alt='...'
                            className=''
                        /> */}
                        SOOP
                    </button>
                </Link>
                <Link href={'https://www.youtube.com/channel/UCFefwc_rwPc0G3TXMu2hKrA'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-red-100 text-[#F00] font-semibold rounded-[14px] text-2xl flex justify-center items-center font-[yg-jalnan]">
                        {/* <Image
                            src={YoutubeLogo}
                            width={44}
                            height={50}
                            alt='...'
                            className=''
                        /> */}
                        YouTube
                    </button>
                </Link>
                <Link href={'https://www.youtube.com/@lumiynus2'} target='_blank'>
                    <button className="px-[40px] py-[8px] h-[54px] w-[200px] bg-pink-100 text-pink-700 font-semibold rounded-[14px] text-2xl flex justify-center items-center font-[yg-jalnan]">
                        {/* <Image
                            src={TicTocLogo}
                            width={44}
                            height={50}
                            alt='...'
                            className=''
                        /> */}
                        ASMR
                    </button>
                </Link>
            </div>
            <h1 className="font-bold text-5xl mt-[120px] uppercase"><span className="text-[#FF0000]">YouTube</span><span className='ml-[14px]'>ViewCount</span></h1>
            <div className='w-full max-w-[1024px] flex justify-end items-center mt-[52px] border-b-[1.4px] borde-solid border-[#CDCDCD] pb-[14px]'>
                {isClient ? time : ''}
                <IoMdRefresh className='w-[20px] h-[20px] ml-[4px] cursor-pointer transition-all hover:rotate-90 text-blue-400' onClick={()=> setTime(moment().format('YYYY-MM-DD HH:mm:ss'))}/>
            </div>
            <div className='w-[calc(100%-40px)] max-w-[1024px] flex flex-col justify-start items-center mt-[28px]'>
                <div className='w-full flex justify-start items-center mb-[20px]'>
                    <div className='w-[40px]'/>
                    <div className='w-[120px] flex justify-center items-center'>
                        <span className='font-semibold text-[#666]'>영상 정보</span>
                    </div>
                    <div className='w-[300px] px-[12px]'>

                    </div>
                    <div className='absolute flex right-0'>
                        <div className='w-[180px] text-[#FF0000] font-semibold text-center'>증감</div>
                        <div className='w-[180px] text-[#FF0000] font-semibold text-center'>누적</div>
                        <div className='w-[200px] font-semibold text-center text-[#666]'>게시일</div>
                    </div>
                </div>
                {
                    videos !== null && videos?.map((content:any, index:number) => (
                        <Link key={content.id} href={`https://www.youtube.com/watch?v=${content.id}`} className='w-full transition-all flex justify-start items-start cursor-pointer group hover:h-[260px] mb-[14px]' target='_blank'>
                            <div className='absolute transition-all right-0 w-[calc(100%-40px)] h-0 group-hover:h-[260px]'>
                                <Image
                                    src={content.snippet.thumbnails.high.url ? content.snippet.thumbnails.high.url : DefaultImage}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='...'
                                    className='opacity-0 brightness-75 transition-all group-hover:opacity-100'
                                />
                            </div>
                            <div className={`w-[40px] h-[80px] font-bold text-xl flex justify-center items-center text-[#FF0000] ${index !== 0 && 'text-[#000000]'}`}>
                                {index+1}
                            </div>
                            <div className='w-[120px] h-[80px] flex justify-center items-center rounded-[6px] overflow-hidden'>
                                <Image
                                    src={content.snippet.thumbnails.default.url ? content.snippet.thumbnails.default.url : DefaultImage}
                                    width={200}
                                    height={140}
                                    alt='...'
                                    className='scale-[1.15]'
                                />
                            </div>
                            <div className='w-[300px] h-[80px] flex justify-center items-center px-[12px]'> 
                                <p className='text-sm leading-4 font-semibold group-hover:text-white'>{content.snippet.localized.title}</p>
                            </div>
                            <div className='absolute flex right-0'>
                                <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>🔺 {content.statistics.likeCount}</div>
                                <div className='w-[180px] h-[80px] flex justify-center items-center text-[#000000] text-center font-semibold text-sm group-hover:text-white'>{content.statistics.viewCount}</div>
                                <div className='w-[200px] h-[80px] flex justify-center items-center text-center font-semibold text-sm group-hover:text-white text-[#666]'>{moment(content.snippet.publishedAt).format('YYYY.MM.DD')}</div>
                            </div>
                        </Link>
                    ))
                }
                {/* <Link href={'https://www.youtube.com/watch?v=X9YXxEVI2XY&t=381s'} className='w-full transition-all flex justify-start items-start cursor-pointer group hover:h-[200px]' target='_blank'>
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
                        <div className='w-[200px] h-[80px] flex justify-center items-center text-center font-semibold text-sm group-hover:text-white text-[#666]'>2024.07.25</div>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}
export default TitleComponent