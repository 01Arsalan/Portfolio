import React from 'react'
import { projects } from '../data'
import { PinContainer } from './Pin'
import { FaLocationArrow } from "react-icons/fa6";
import ProjectModal from './ProjectModal';


const RecentProjects = () => {

    return (
        <section className="py-20 max-w-5xl mx-auto flex flex-col items-center" id='projects'>
            <h1 className="heading ">
                A small selection of{" "}
                <span className="text-special block md:inline">recent projects</span>
            </h1>
            <div className="relative flex flex-col md:flex-row flex-wrap items-center justify-center gap-16 mt-10 w-[-webkit-fill-available]">

                <div className="absolute inset-y-0 sm:left-0 -left-3 w-6 bg-gradient-to-br from-[#CBACF9] via-[#CBACF9]/15 to-transparent opacity-40 pointer-events-none"></div>
                <div className="absolute inset-y-0 sm:right-0 -right-3 w-6 bg-gradient-to-bl from-[#CBACF9] via-[#CBACF9]/15 to-transparent opacity-40 pointer-events-none"></div>


                {projects.map((item) => (
                    <div
                        className="lg:w-[26rem] md:w-[34vw] sm:w-[24rem] w-[80vw] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center "
                        key={item.id}
                    >
                        <PinContainer
                            title={item.urlTitle}
                            href={item.link}
                        >
                            <div className="relative flex items-center justify-center lg:w-[24rem] md:w-[38vw] xs:w-[70vw] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-5xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className={`z-10 absolute bottom-0 lg:w-[22rem] md:w-[17rem] sm:w-10/12 w-[17rem] h-[158px] xs:h-[240px] rotate-[2.5deg] rounded-[8px] translate-y-[20px]`}
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-[5px] xs:px-[10px]">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 px-[5px] xs:px-[10px]"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3 px-[5px] xs:px-[10px]">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <ProjectModal />
        </section>
    )
}

export default RecentProjects
