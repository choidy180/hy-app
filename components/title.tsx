import useTypingWords from "@/hook/useTypingWords"

const TitleComponent = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className="w-full text-center text-6xl">{useTypingWords('희영왕국에 오신것을 환영합니다!',200)}</h1>
        </div>
    )
}

export default TitleComponent