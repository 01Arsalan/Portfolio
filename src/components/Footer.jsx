import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className=" relative w-full pt-20 pb-10 md:pb-20 px-4 overflow-hidden" id="contact">
      {/* background grid */}
      <div className="w-full flex justify-center absolute left-0 bottom-0 overflow-clip">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-[13in] max-w-none h-full opacity-80 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-special">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="mailto:arsalanwane@gmail.com?subject=Proposal for Collaboration&body=Dear [Client's Name],%0D%0A%0D%0AI hope this message finds you well. I am reaching out to discuss potential collaboration opportunities that could benefit both of our businesses. I would love to schedule a time to chat further.%0D%0A%0D%0ALooking forward to your response!%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
          className="z-[200]"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="flex gap-3 z-[999]"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Arsalan Wani
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} className={`${info.class}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

