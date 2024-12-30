export default function MosaicRippleLoader() {
    const cells = 4; // Number of rows and columns
    const delays = cells * 2 - 2; // Number of animation delays
    const colors = [
        "bg-[#d4aee0]",
        "bg-[#8975b4]",
        "bg-[#64518a]",
        "bg-[#565190]",
        "bg-[#44abac]",
        "bg-[#2ca7d8]",
        "bg-[#1482ce]",
        "bg-[#05597c]",
        "bg-[#b2dd57]",
        "bg-[#57c443]",
        "bg-[#05b853]",
        "bg-[#19962e]",
        "bg-[#fdc82e]",
        "bg-[#fd9c2e]",
        "bg-[#d5385a]",
        "bg-[#911750]",
    ];

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[#2b2b2b] fixed top-0 left-0 bg-opacity-90">
            <div
                className="flex flex-wrap"
                style={{
                    width: `calc(${cells} * (40px + 2px))`, // Cell size (64px) + margin (1px each side)
                    height: `calc(${cells} * (40px + 2px))`,
                }}
            >
                {Array.from({ length: cells * cells }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 m-[0px] border border-white ${colors[index % colors.length]}`}
                        style={{
                            animation: `ripple 1.5s ease-in-out infinite`,
                            animationDelay: `${(index % delays) * 0.1}s`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
