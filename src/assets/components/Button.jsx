export default function Button(props) {
    return (
        <button
            onClick= {props.onClick}
            className="w-[197px] h-[63px] bg-[#FFD288] rounded-md text-black font-bold text-2xl absolute top-[460px] hover:bg-[#FF9F00]">
                NEXT
        </button>
    )
}