import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Pause, Play } from 'lucide-react';
import { PROJECTS, CONTACT } from '../../utils/constants';
import { theme } from '../../styles/theme';
import { trackProjectView, trackExternalLink } from '../../utils/analytics';

// Speed: pixels per second
const SCROLL_SPEED = 60;
// Card dimensions (fixed px for consistent scroll math)
const CARD_WIDTH = 500;
const CARD_GAP = 24;

const FlashCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleProjectLinkClick = (linkType: 'demo' | 'github', e: React.MouseEvent) => {
    e.stopPropagation();
    trackProjectView(project.title, linkType === 'demo' ? 'demo_click' : 'github_click');
    trackExternalLink(linkType === 'demo' ? project.link! : project.github!, 'project');
  };

  return (
    <div
      className="relative cursor-pointer shrink-0"
      style={{
        perspective: '1200px',
        width: `${CARD_WIDTH}px`,
        height: '400px',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-2xl p-7 md:p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            background: theme.colors.background.glass.primary,
            backdropFilter: theme.glass.blur.lg,
            WebkitBackdropFilter: theme.glass.blur.lg,
            border: `1px solid ${theme.colors.background.glass.border}`,
            boxShadow: theme.boxShadow.glass.medium,
          }}
        >
          {/* Fixed header */}
          <div className="flex items-start justify-between mb-4 shrink-0">
            <h3
              className="font-bold text-xl md:text-2xl leading-tight pr-3"
              style={{ color: theme.colors.text.primary }}
            >
              {project.title}
            </h3>
            <div className="flex gap-2 shrink-0 mt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: `${theme.colors.accent.primary}20`,
                    color: theme.colors.text.primary,
                  }}
                  onClick={(e) => handleProjectLinkClick('demo', e)}
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: `${theme.colors.accent.primary}20`,
                    color: theme.colors.text.primary,
                  }}
                  onClick={(e) => handleProjectLinkClick('github', e)}
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Scrollable description */}
          <div
            className="flex-1 overflow-y-auto min-h-0 pr-1"
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: 'thin', scrollbarColor: `${theme.colors.accent.primary}40 transparent` }}
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              {project.description}
            </p>
          </div>

          {/* Fixed footer */}
          <div
            className="flex items-center justify-between mt-4 pt-3 shrink-0"
            style={{ borderTop: `1px solid ${theme.colors.background.glass.border}` }}
          >
            <span className="text-xs font-mono" style={{ color: theme.colors.accent.primary }}>
              Tap to see tech stack
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono underline hover:no-underline"
                style={{ color: theme.colors.accent.primary }}
                onClick={(e) => handleProjectLinkClick('github', e)}
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-2xl p-7 md:p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: theme.colors.background.glass.secondary,
            backdropFilter: theme.glass.blur.lg,
            WebkitBackdropFilter: theme.glass.blur.lg,
            border: `1px solid ${theme.colors.background.glass.borderAccent}`,
            boxShadow: theme.boxShadow.glass.glow,
          }}
        >
          {/* Fixed header */}
          <div className="shrink-0">
            <h3
              className="font-bold text-lg md:text-xl mb-2"
              style={{ color: theme.colors.text.primary }}
            >
              {project.title}
            </h3>
            <h4
              className="font-semibold text-sm mb-5"
              style={{ color: theme.colors.accent.primary }}
            >
              Tech Stack
            </h4>
          </div>

          {/* Scrollable tech tags */}
          <div
            className="flex-1 overflow-y-auto min-h-0 pr-1"
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: 'thin', scrollbarColor: `${theme.colors.accent.primary}40 transparent` }}
          >
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${theme.colors.accent.primary}15`,
                    color: theme.colors.accent.primary,
                    border: `1px solid ${theme.colors.accent.primary}30`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between mt-5 pt-3 shrink-0"
            style={{ borderTop: `1px solid ${theme.colors.background.glass.border}` }}
          >
            <span className="text-xs font-mono" style={{ color: theme.colors.text.secondary }}>
              Tap to flip back
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono underline hover:no-underline"
                style={{ color: theme.colors.accent.primary }}
                onClick={(e) => handleProjectLinkClick('github', e)}
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsFlashcards = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressLabelRef = useRef<HTMLSpanElement>(null);
  const animRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isScrubbingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragOffsetStartRef = useRef(0);
  const [showPaused, setShowPaused] = useState(false); // only for play/pause icon

  // One full set width
  const setWidth = PROJECTS.length * (CARD_WIDTH + CARD_GAP);

  // Normalize offset to stay within one set range
  const normalizeOffset = () => {
    while (offsetRef.current < -setWidth) offsetRef.current += setWidth;
    while (offsetRef.current > 0) offsetRef.current -= setWidth;
  };

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    // Update progress bar position
    const progress = Math.abs(offsetRef.current) / setWidth;
    if (progressBarRef.current) {
      progressBarRef.current.style.left = `${progress * 100}%`;
    }
    // Update label: which project index is roughly in the center of the viewport
    const viewportWidth = viewportRef.current?.clientWidth ?? 800;
    const centerOffset = Math.abs(offsetRef.current) + viewportWidth / 2;
    const cardStep = CARD_WIDTH + CARD_GAP;
    const currentIndex = Math.floor(centerOffset / cardStep) % PROJECTS.length;
    if (progressLabelRef.current) {
      progressLabelRef.current.textContent = `${currentIndex + 1} / ${PROJECTS.length}`;
    }
  };

  const shouldAnimate = () => !isDraggingRef.current && !isHoveringRef.current && !isScrubbingRef.current;

  // Auto-scroll animation — runs continuously, checks refs each frame
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (shouldAnimate()) {
        if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
        const delta = (timestamp - lastTimeRef.current) / 1000;
        lastTimeRef.current = timestamp;

        offsetRef.current -= SCROLL_SPEED * delta;
        normalizeOffset();
        applyTransform();
      } else {
        lastTimeRef.current = null;
        // Still update progress while dragging or scrubbing
        if (isDraggingRef.current || isScrubbingRef.current) applyTransform();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [setWidth]);

  // Mouse/touch drag handlers
  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragOffsetStartRef.current = offsetRef.current;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - dragStartXRef.current;
    offsetRef.current = dragOffsetStartRef.current + dx;
    normalizeOffset();
    applyTransform();
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  // Mouse events on viewport
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();

  // Touch events on viewport
  const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  // Progress bar scrub handlers
  const scrubFromClientX = (clientX: number) => {
    if (!progressTrackRef.current) return;
    const rect = progressTrackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    offsetRef.current = -(ratio * setWidth);
    normalizeOffset();
    applyTransform();
  };

  const onProgressMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isScrubbingRef.current = true;
    scrubFromClientX(e.clientX);

    const onMove = (ev: MouseEvent) => {
      if (isScrubbingRef.current) scrubFromClientX(ev.clientX);
    };
    const onUp = () => {
      isScrubbingRef.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onProgressTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    isScrubbingRef.current = true;
    scrubFromClientX(e.touches[0].clientX);

    const onMove = (ev: TouchEvent) => {
      if (isScrubbingRef.current) scrubFromClientX(ev.touches[0].clientX);
    };
    const onEnd = () => {
      isScrubbingRef.current = false;
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  // Hover — no longer pauses auto-scroll
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {
    if (isDraggingRef.current) handleDragEnd();
  };

  // Render 3 copies for seamless wrapping
  const tripleProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <motion.div
      className="glass-card"
      style={{
        background: theme.colors.background.glass.primary,
        backdropFilter: theme.glass.blur.md,
        WebkitBackdropFilter: theme.glass.blur.md,
        border: `1px solid ${theme.colors.background.glass.border}`,
        boxShadow: theme.boxShadow.glass.subtle,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center pb-2 text-gradient"
        style={{
          fontWeight: theme.typography.fontWeight.bold,
          letterSpacing: '-0.02em',
        }}
      >
        Projects
      </h2>

      <p className="text-center text-sm mb-8" style={{ color: theme.colors.text.secondary }}>
        Click any card to reveal the tech stack — drag to scroll, hover to pause
      </p>

      {/* Carousel viewport */}
      <div
        ref={viewportRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left fade edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${theme.colors.background.primary}cc, transparent)`,
          }}
        />
        {/* Right fade edge */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to left, ${theme.colors.background.primary}cc, transparent)`,
          }}
        />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${CARD_GAP}px` }}
        >
          {tripleProjects.map((project, i) => (
            <FlashCard key={`${project.id}-${i}`} project={project} />
          ))}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono" style={{ color: theme.colors.text.muted }}>
            {PROJECTS.length} projects
          </span>
          <span
            ref={progressLabelRef}
            className="text-xs font-mono"
            style={{ color: theme.colors.accent.primary }}
          >
            1 / {PROJECTS.length}
          </span>
        </div>
        <div
          ref={progressTrackRef}
          className="relative w-full rounded-full cursor-pointer group"
          style={{ backgroundColor: `${theme.colors.text.muted}20`, height: '6px' }}
          onMouseDown={onProgressMouseDown}
          onTouchStart={onProgressTouchStart}
        >
          {/* Invisible expanded hit area */}
          <div className="absolute -top-3 -bottom-3 left-0 right-0" />
          {/* Thumb indicator */}
          <div
            ref={progressBarRef}
            className="absolute top-0 h-full rounded-full transition-none pointer-events-none"
            style={{
              width: `${(1 / PROJECTS.length) * 100}%`,
              backgroundColor: theme.colors.accent.primary,
              left: '0%',
              boxShadow: `0 0 8px ${theme.colors.accent.primary}60`,
            }}
          />
        </div>
      </div>

      {/* Pause/Play control */}
      <div className="flex items-center justify-center mt-6">
        <motion.button
          onClick={() => {
            isHoveringRef.current = !isHoveringRef.current;
            setShowPaused(isHoveringRef.current);
          }}
          className="p-2.5 rounded-full"
          style={{
            backgroundColor: `${theme.colors.accent.primary}20`,
            color: theme.colors.accent.primary,
            border: `1px solid ${theme.colors.accent.primary}40`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showPaused ? <Play size={18} /> : <Pause size={18} />}
        </motion.button>
      </div>

      {/* View All Projects */}
      <motion.div className="mt-6 text-center">
        <motion.a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="modern-button px-6 py-3 rounded-lg font-semibold inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsFlashcards;
