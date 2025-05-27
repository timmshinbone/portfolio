import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const FramerImage = motion(Image);

export default function ServiceCardLarge({
  title,
  image,
  price,
  ctaText = 'Book Now',
  ctaLink = '/hire-me#book-me',
  reverse = false,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouseMove = (evt) => {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
      x.set(evt.pageX);
      y.set(-10);
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
      x.set(0);
      y.set(0);
    }
  };

  return (
    <article
      className={`w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ${
        reverse ? 'flex-row-reverse lg:flex-col' : 'flex-row lg:flex-col'
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <div className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-2xl px-2 lg:mb-6">
        <FramerImage
          ref={imgRef}
          style={{ x, y }}
          src={image}
          alt={title}
          className="w-full h-auto rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
        />
      </div>

      <div className="w-1/2 lg:w-full flex flex-col items-start justify-center pl-6 lg:pl-0 lg:items-start lg:mt-6 text-left">
        <h2 className="text-4xl font-bold mb-4 dark:text-light xs:text-3xl sm:text-4xl">
          {title}
        </h2>
        {price && (
          <p className="mb-4 text-lg font-semibold text-primary dark:text-primaryDark">
            {price}
          </p>
        )}
        <Link
          href={ctaLink}
          className="inline-block bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition"
        >
          {ctaText}
        </Link>
      </div>
    </article>
  );
}
