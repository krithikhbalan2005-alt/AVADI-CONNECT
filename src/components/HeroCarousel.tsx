import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BannerItem {
  id: string;
  title: string;
  sub: string;
  img: string;
  route: string;
  actionText?: string;
}

export const HeroCarousel: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const shouldReduceMotion = useReducedMotion();

  const banners: BannerItem[] = [
    {
      id: 'smart-avadi',
      title: 'Smarter Avadi, Stronger Community',
      sub: 'Report • Connect • Grow',
      img: '/assets/images/banners/smart-avadi-banner.webp',
      route: '/home',
    },
    {
      id: 'civic-report',
      title: 'Report Civic Issues Quickly',
      sub: 'Resolve neighborhood problems in 3 simple steps',
      img: '/assets/images/banners/civic-report-banner.webp',
      route: '/complaints/camera',
      actionText: 'Report Now',
    },
    {
      id: 'emergency-sos',
      title: 'Emergency SOS — One Tap Away',
      sub: 'Quick access to local help and emergency contacts',
      img: '/assets/images/banners/sos-banner.webp',
      route: '/sos',
      actionText: 'SOS Help',
    },
    {
      id: 'explore-local',
      title: 'Explore Local Places & Services',
      sub: 'Find parks, markets, temples, and transit schedules',
      img: '/assets/images/banners/explore-banner.webp',
      route: '/explore',
      actionText: 'Explore',
    },
    {
      id: 'community-events',
      title: 'Community Events & Local Alerts',
      sub: 'Stay informed about notices and local alerts',
      img: '/assets/images/banners/community-banner.webp',
      route: '/alerts',
      actionText: 'View Alerts',
    },
    {
      id: 'jobs-rentals',
      title: 'Jobs and Rentals Near You',
      sub: 'Discover local employment opportunities and property listings',
      img: '/assets/images/banners/jobs-rentals-banner.webp',
      route: '/jobs-rentals',
      actionText: 'Find Now',
    },
  ];

  const [currentBannerIdx, setCurrentBannerIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right-to-left, -1 = left-to-right
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const lastInteractionTimeRef = useRef<number>(0);

  // Preload first banner image on component mount only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = banners[0].img;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []); // intentional: runs once on mount to preload first image

  // Monitor tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Set interacting flag and clear timeout
  const handleInteraction = () => {
    setIsInteracting(true);
    lastInteractionTimeRef.current = Date.now();
  };

  // Resume autoplay 2.5 seconds after last manual interaction
  useEffect(() => {
    if (!isInteracting) return;

    const checkInterval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteractionTimeRef.current;
      if (timeSinceInteraction >= 2500) {
        setIsInteracting(false);
        clearInterval(checkInterval);
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, [isInteracting]);

  // Autoplay loop (every 4 seconds)
  useEffect(() => {
    if (isHovered || isDragging || !isTabVisible || isInteracting) return;

    const timer = setInterval(() => {
      setDirection(1); // right-to-left
      setCurrentBannerIdx((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, isDragging, isTabVisible, isInteracting, banners.length]);

  const handlePrev = () => {
    handleInteraction();
    setDirection(-1); // left-to-right
    setCurrentBannerIdx((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    handleInteraction();
    setDirection(1); // right-to-left
    setCurrentBannerIdx((prev) => (prev + 1) % banners.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    const swipe = info.offset.x;
    
    if (swipe < -swipeThreshold) {
      handleNext();
    } else if (swipe > swipeThreshold) {
      handlePrev();
    }
  };

  // Animation configuration matching prefers-reduced-motion
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? '0%' : (dir > 0 ? '100%' : '-100%'),
      opacity: shouldReduceMotion ? 0 : 1,
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { type: 'tween' as const, ease: 'easeInOut' as const, duration: shouldReduceMotion ? 0 : 0.5 },
        opacity: { duration: shouldReduceMotion ? 0.2 : 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? '0%' : (dir > 0 ? '-100%' : '100%'),
      opacity: shouldReduceMotion ? 0 : 1,
      transition: {
        x: { type: 'tween' as const, ease: 'easeInOut' as const, duration: shouldReduceMotion ? 0 : 0.5 },
        opacity: { duration: shouldReduceMotion ? 0.2 : 0.5 },
      },
    }),
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group rounded-card overflow-hidden border aspect-[16/7] relative shadow-soft select-none ${
        theme === 'dark' ? 'border-neutral-800' : 'border-slate-150'
      }`}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden touch-pan-y">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentBannerIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => {
              setIsDragging(true);
              handleInteraction();
            }}
            onDragEnd={handleDragEnd}
            onClick={() => {
              // Only trigger navigation if not dragging
              if (!isDragging) {
                const banner = banners[currentBannerIdx];
                if (banner.route && banner.route !== '/home') {
                  navigate(banner.route);
                }
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex flex-col justify-end"
          >
            <img
              src={banners[currentBannerIdx].img}
              alt={banners[currentBannerIdx].title}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              // Preload first banner, lazy load remaining
              loading={currentBannerIdx === 0 ? 'eager' : 'lazy'}
            />
            {/* Soft gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end z-10 pointer-events-none">
              <div className="flex justify-between items-end gap-3 w-full">
                <div className="max-w-[70%]">
                  <h3 className="text-white font-extrabold text-sm leading-tight drop-shadow-xs">
                    {banners[currentBannerIdx].title}
                  </h3>
                  <p className="text-white/85 text-[10px] mt-1 font-bold drop-shadow-2xs">
                    {banners[currentBannerIdx].sub}
                  </p>
                </div>
                {banners[currentBannerIdx].actionText && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(banners[currentBannerIdx].route);
                    }}
                    className="pointer-events-auto px-3 py-1 bg-white hover:bg-slate-100 active:scale-95 text-[10px] font-bold text-primary rounded-full shadow-md transition-all duration-150 whitespace-nowrap mb-0.5"
                  >
                    {banners[currentBannerIdx].actionText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev Arrow (Touch Target 48x48px) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:opacity-100 outline-none"
        aria-label="Previous slide"
      >
        <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 active:scale-90 flex items-center justify-center backdrop-blur-xs transition">
          <ChevronLeft size={16} />
        </div>
      </button>

      {/* Next Arrow (Touch Target 48x48px) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:opacity-100 outline-none"
        aria-label="Next slide"
      >
        <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 active:scale-90 flex items-center justify-center backdrop-blur-xs transition">
          <ChevronRight size={16} />
        </div>
      </button>

      {/* Clickable Pagination Dots */}
      <div className="absolute bottom-4 left-4 flex gap-1.5 z-20">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              handleInteraction();
              const dir = idx > currentBannerIdx ? 1 : -1;
              setDirection(dir);
              setCurrentBannerIdx(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 outline-none ${
              idx === currentBannerIdx 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
