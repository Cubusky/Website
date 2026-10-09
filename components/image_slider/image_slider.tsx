"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { createTimer } from "../../utils/timer";
import style from "./image_slider.module.css";

interface ImageSlide {
  src: any;
  title: string;
  description: string;
  style?: React.CSSProperties;
  button?: {
    text: string;
    url: string;
  }
}

interface ImageSliderProps {
  background?: string;
  slides?: ImageSlide[];
  autoAdvanceIntervalSeconds?: number;
}

interface PresenceProps {
  slide: ImageSlide;
  headingId: string;
  descriptionId: string;
}

interface SlideImageProps extends PresenceProps {
  onPaginate: (direction: number) => void;
}

interface SlideContentProps extends PresenceProps {
  onButtonHoverChange: (isHovered: boolean) => void;
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

function SlideContent(props: SlideContentProps) {
  const [isPresent, safeToRemove] = usePresence();

  return (
    <div
      className={`${isPresent ? style.contentEnter : style.contentExit}`}
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
      {props.slide.button && (
        <a
          href={props.slide.button.url}
          onMouseEnter={() => props.onButtonHoverChange(true)}
          onMouseLeave={() => props.onButtonHoverChange(false)}
          className={buttonVariants({ 
            variant: "default", 
            className: "mt-16 text-2xl! px-4 py-2 transition duration-300 text-shadow-none pointer-events-auto" })}
        >
          {props.slide.button.text}
        </a>
      )}
    </div>
  );
}

export function ImageSlider(
    props: ImageSliderProps
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const headingId = useId();
  const descriptionId = useId();
  const tablistId = useId();

  const slides = props.slides ?? [];
  const slideCount = slides.length;
  const autoAdvanceIntervalMs = (props.autoAdvanceIntervalSeconds ?? 5) * 1000;
  const remainingTimeRef = useRef(autoAdvanceIntervalMs);

  useEffect(() => {
    remainingTimeRef.current = autoAdvanceIntervalMs;
    setIsButtonHovered(false);
  }, [currentIndex, slideCount, autoAdvanceIntervalMs]);

  useEffect(() => {
    if (
      slideCount < 2 ||
      autoAdvanceIntervalMs <= 0 ||
      !Number.isFinite(autoAdvanceIntervalMs) ||
      isButtonHovered
    ) {
      return;
    }

    const time = remainingTimeRef.current || autoAdvanceIntervalMs;
    const stop = createTimer(time, () => paginate(1));
    return () => void (remainingTimeRef.current = stop());
  }, [currentIndex, slideCount, autoAdvanceIntervalMs, isButtonHovered]);

  const paginate = (newDirection: number) => 
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + slideCount) % slideCount);

  const goToSlide = (index: number) =>
    (index === currentIndex) ? undefined : setCurrentIndex(index);

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
      className={`contents select-none ${style.carousel}`}
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
        className={`p-8 absolute text-shadow-lg/65 text-shadow-fd-background pointer-events-none ${style.contentOverlay}`}
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
              onButtonHoverChange={setIsButtonHovered}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ImageSlider;
