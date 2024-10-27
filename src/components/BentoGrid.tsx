import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./MovingGradient";
import { techList } from "../data";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:auto-rows-[2rem] auto-rows-[1rem] grid-cols-1 lg:grid-cols-7 md:grid-cols-11 gap-4 max-w-7xl mx-auto",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({ id, title, description, className, img, imgClassName, titleParentClassName, titleClassName, spareImg }) => {

    const handleCopy = () => {
        const text = "arsalanwane@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>{setCopied(false)},2000)
      };

    const [copied , setCopied] = useState(false)
    return (
        (<div
            className={cn(
                "overflow-hidden relative row-span-1 w-full rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,77,125,1) 0%, rgba(48,0,85,1) 100%)',
            }}
        >


            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn("object-cover object-center ",imgClassName)}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="w-full absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-center"></div>
                    </BackgroundGradientAnimation>
                )}


                <div
                    className={cn(
                        "group-hover/bento:translate-x-2 transition duration-200 relative h-full min-h-40 flex flex-col p-5 lg:p-10",
                        titleParentClassName
                    )}
                >
                    <div className={`font-sans font-extralight md:max-w-32 md:text-xs xs:text-sm text-[12px] text-[#C1C2D3] z-10 whitespace-nowrap ${id == 5 && 'tracking-widest' }`}>
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${titleClassName}`}
                    >
                        {title}
                    </div>


                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-4 w-fit absolute -right-1">
                            <div className="flex flex-col gap-2">
                                {techList.leftList.map((item, i) => (
                                    <span
                                        key={item.id}
                                        className="py-4 px-3 text-base opacity-80 
                                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item.title}
                                    </span>
                                ))}
                                <span className="py-5 px-3 rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="py-5 px-3 rounded-lg text-center bg-[#10132E]"></span>
                                {techList.rightList.map((item, i) => (
                                    <span
                                        key={item.id}
                                        className="py-4 px-3 text-base opacity-80 
                                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="relative w-full flex justify-center">
                            <div
                                className={`absolute -bottom-5 right-0 ${"copied" ? "block" : "block"
                                    }`}
                            >
                            </div>




                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position = "left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31] flex gap-2  p-3 xs:rounded-[8px] rounded-[6px] w-fit lg:text-[12px]"
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>)
    );
};
