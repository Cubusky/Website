"use client";

import { useId, useState } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import style from "./image_slider.module.css";

interface ImageSlide {
  src: any;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

interface ImageSliderProps {
    background?: string;
    slides?: ImageSlide[];
}

interface PresenceProps {
  slide: ImageSlide;
  headingId: string;
  descriptionId: string;
}

interface SlideImageProps extends PresenceProps {
  onPaginate: (direction: number) => void;
}

function SlideImage(props: SlideImageProps) {
  const [isPresent, safeToRemove] = usePresence();

  return (
    <div
      className={`${style.imageFrame} ${isPresent ? style.imageEnter : style.imageExit}`}
      aria-hidden={!isPresent}
      onAnimationEnd={(event) => {
        if (!isPresent && event.target === event.currentTarget) safeToRemove?.();
      }}
    >
      <img
        className={style.imageSlide}
        src={props.slide.src}
        style={props.slide.style}
        alt={props.slide.title}
        role="img"
        aria-hidden={!isPresent}
        aria-describedby={props.descriptionId}
        aria-labelledby={props.headingId}
      />
      <button
        type="button"
        onClick={() => props.onPaginate(-1)}
        className={style.imageSliderButton}
        aria-label="Previous slide"
      />
      <button
        type="button"
        onClick={() => props.onPaginate(1)}
        className={style.imageSliderButton}
        aria-label="Next slide"
      />
    </div>
  );
}

function SlideContent(props: PresenceProps) {
  const [isPresent, safeToRemove] = usePresence();

  return (
    <div
      className={`${style.slideContent} ${isPresent ? style.contentEnter : style.contentExit}`}
      role="tabpanel"
      aria-hidden={!isPresent}
      aria-labelledby={props.headingId}
      onAnimationEnd={(event) => {
        if (!isPresent && event.target === event.currentTarget) safeToRemove?.();
      }}
    >
      <h2 id={props.headingId} className="text-8xl font-semibold text-foreground mb-2">
        {props.slide.title}
      </h2>
      <p
        id={props.descriptionId}
        className="text-muted-foreground text-4xl leading-relaxed"
        aria-live="polite"
      >
        {props.slide.description}
      </p>
    </div>
  );
}

export function ImageSlider(
    props: ImageSliderProps
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const headingId = useId();
  const descriptionId = useId();
  const tablistId = useId();

  const slides = props.slides ?? [];
  const slideCount = slides.length;

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return slideCount - 1;
      if (nextIndex >= slideCount) return 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft": {
        event.preventDefault();
        paginate(-1);
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        paginate(1);
        break;
      }
      case "Home": {
        event.preventDefault();
        goToSlide(0);
        break;
      }
      case "End": {
        event.preventDefault();
        goToSlide(slideCount - 1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      className="contents"
      role="group"
      aria-roledescription="carousel"
      aria-label="Design inspiration image carousel"
      aria-live="polite"
      aria-atomic="true"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Image Slider */}
      <div className="relative w-full grow bg-muted overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          {slides[currentIndex] && (
            <SlideImage
              key={currentIndex}
              slide={slides[currentIndex]}
              headingId={`${headingId}-${currentIndex}`}
              descriptionId={`${descriptionId}-${currentIndex}`}
              onPaginate={paginate}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div
        className="p-8"
        role="tablist"
        aria-label="Slide navigation"
        id={tablistId}
      >
        <AnimatePresence initial={false} mode="wait">
          {slides[currentIndex] && (
            <SlideContent
              key={currentIndex}
              slide={slides[currentIndex]}
              headingId={`${headingId}-${currentIndex}`}
              descriptionId={`${descriptionId}-${currentIndex}`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ImageSlider;
