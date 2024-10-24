"use client";

import { useEffect } from 'react';
import '../globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import LiveContainer from '@/components/liveContainer';

const PublicPage = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className="w-[100vw] max-w-[100vw] min-h-screen flex flex-col justify-center items-center text-center py-[80px] overflow-x-hidden">
            <div className='w-[50vh] h-[50vh] absolute left-[30vw] top-[40vh] bg-[#FFB7B7] rounded-full opacity-40'/>
            <div className='w-[50vh] h-[50vh] absolute right-[30vw] bottom-[40vh] bg-[#A4FFFE] rounded-full opacity-40'/>
            <p data-aos="fade-up" className="w-full text-center text-2xl font-semibold">🚨필독!!채팅 참여 전 꼭!🚨</p>
            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">컨텐츠 진행 혹은 녹화 시 모든 채팅 답변은 어려우니 양해 부탁드립니다😄(인사/게임과 관계 없는 질문)</p>

            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">⛔ 경고&추방or블랙[방장 개인적인 판단하에]</p>
            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">안 물어본 본인TMI/관련 없는 챗 도배❌</p>
            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">시청자 간 싸움 or 친목(닉넴 언급)❌</p>
            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">개인정보 질문 및 유추/발설❌</p>
            <p data-aos="fade-up" className="w-full text-center text-xl mt-[40px] font-semibold">타 bj 언급 및 비하❌</p>
            <LiveContainer/>
        </div>
    )
}

export default PublicPage;