import { Link as ScrollLink } from 'react-scroll'

const MagicButton = ({ title, icon, handleClick, position, otherClasses, scrollLink, link }) => {
  if (!scrollLink) {
    return (

      <button
        className={`text-sm sm:text-base mt-5 px-7 py-5 bg-gradient_2 xs:rounded-[14px] rounded-[6px] flex-center w-[20rem] xs:w-fit inline-flex h-12 animate-shimmer items-center justify-center border border-special bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
        onClick={handleClick}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </button>
    )
  }
  else if (scrollLink) {
    return (
      <ScrollLink
        to={scrollLink}
        smooth={true}
        duration={500}
        offset={-50}
        className='z-[98]'
      >
        <div
          className={`text-sm sm:text-base mt-5 px-7 py-5 bg-gradient_2 xs:rounded-[14px] rounded-[6px] flex-center w-[20rem] xs:w-fit inline-flex h-12 animate-shimmer items-center justify-center border border-special bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
          onClick={handleClick}>
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </div>
      </ScrollLink>
    )
  }
  return (
    <ScrollLink
      to={link}
      smooth={true}
      duration={500}
      offset={-50}
      className='z-[98]'
    >
      <div
        className={`text-sm sm:text-base mt-5 px-7 py-5 bg-gradient_2 xs:rounded-[14px] rounded-[6px] flex-center w-[20rem] xs:w-fit inline-flex h-12 animate-shimmer items-center justify-center border border-special bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
        onClick={handleClick}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </ScrollLink>
  )
}

export default MagicButton
