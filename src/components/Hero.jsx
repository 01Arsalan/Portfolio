import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Hero = () => {
    return (
        <section className="relative lg:px-5 px-0 pt-[10rem]" id="about">
            <div className="w-full flex justify-center absolute left-0 -top-[20rem] overflow-clip">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-[12in] max-w-none h-full opacity-80 "
                />
            </div>
            <div className="lg:px-5 px-0 bg-black flex flex-col items-center">
                <h4 className="text-offWhite mb-5 text-[12px] xs:text-base sm:text-sm md:text-[15px] uppercase tracking-widest">Dynamic Web Magic On Every Click</h4>
                <h3 className="text-[2.6rem] xs:text-[2.6rem] md:text-5xl lg:text-6xl font-bold text-center mb-5 leading-[40px] md:leading-[72px]">
                    Transforming<br className="block sm:hidden" /> Concepts into<br className="block sm:hidden" /> <br className=" hidden sm:block" /> Seamless <span className="text-special">User<br className=" block sm:hidden" /> Experiences</span>
                </h3>
                <h2 className="text-offWhite text-center text-[13px] xs:text-[18px] sm:text-base md:text-lg lg:text-[20px]">
                    Hi! I’m Arsalan, a MERN Developer based in Kashmir.
                </h2>

                <MagicButton
                    title="See my work"
                    icon={<FaLocationArrow />}
                    position="right"
                    otherClasses="!bg-[#161A31] flex gap-2 sm:text-[12px] px-3 py-3 mt-10"
                    scrollLink="projects"
                />
            </div>
        </section>
    )
}

export default Hero
