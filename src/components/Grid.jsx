import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from "./BentoGrid"

const Grid = () => {
  return (
    <section id='about' className='mt-[6rem] '>
      <BentoGrid className="max-w-5xl mx-auto">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleParentClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className} 
            img={img}
            imgClassName={imgClassName}
            titleParentClassName={titleParentClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid

