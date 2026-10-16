'use client';

import { useState, useEffect, useRef } from 'react';

// Sacred Kalash Pot with Banana Leaves, Jasmine & Lotus blooms (matching Image 2)
function KalashFlowerPot({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="potGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e28c46" />
          <stop offset="55%" stopColor="#b65722" />
          <stop offset="100%" stopColor="#7a2b0e" />
        </radialGradient>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#76b852" />
          <stop offset="60%" stopColor="#3d8b37" />
          <stop offset="100%" stopColor="#1f5820" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8cd35d" />
          <stop offset="60%" stopColor="#439b3a" />
          <stop offset="100%" stopColor="#1e5421" />
        </linearGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c59b27" />
          <stop offset="50%" stopColor="#fdf0b0" />
          <stop offset="100%" stopColor="#b8862b" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#8c631d" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Fan of Fresh Green Banana & Mango Leaves */}
      <g filter="url(#softGlow)">
        {/* Far Left Banana Leaf */}
        <path
          d="M60 72 C40 60 14 50 8 26 C16 22 36 34 52 58 Z"
          fill="url(#leafGrad1)"
        />
        <path d="M60 72 C40 54 22 40 8 26" stroke="#a4e578" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />

        {/* Far Right Banana Leaf */}
        <path
          d="M60 72 C80 60 106 50 112 26 C104 22 84 34 68 58 Z"
          fill="url(#leafGrad2)"
        />
        <path d="M60 72 C80 54 98 40 112 26" stroke="#a4e578" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />

        {/* Center-Left Upright Leaf */}
        <path
          d="M60 70 C46 48 30 26 34 8 C48 16 56 36 60 58 Z"
          fill="url(#leafGrad2)"
        />
        <path d="M60 70 C48 44 38 24 34 8" stroke="#bef399" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        {/* Center-Right Upright Leaf */}
        <path
          d="M60 70 C74 48 90 26 86 8 C72 16 64 36 60 58 Z"
          fill="url(#leafGrad1)"
        />
        <path d="M60 70 C72 44 82 24 86 8" stroke="#bef399" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        {/* Tall Center Sprout Leaf */}
        <path
          d="M56 68 C54 40 56 16 60 2 C64 16 66 40 64 68 Z"
          fill="url(#leafGrad2)"
        />
        <path d="M60 68 L60 2" stroke="#cbf7ab" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
      </g>

      {/* Fresh White Mogra / Jasmine Floral Clusters */}
      <g>
        <circle cx="48" cy="62" r="4.5" fill="#ffffff" stroke="#f6eccd" strokeWidth="1" />
        <circle cx="56" cy="59" r="4" fill="#ffffff" stroke="#f6eccd" strokeWidth="1" />
        <circle cx="64" cy="59" r="4" fill="#ffffff" stroke="#f6eccd" strokeWidth="1" />
        <circle cx="72" cy="62" r="4.5" fill="#ffffff" stroke="#f6eccd" strokeWidth="1" />
        <circle cx="42" cy="66" r="3.5" fill="#ffffff" stroke="#f6eccd" strokeWidth="0.8" />
        <circle cx="78" cy="66" r="3.5" fill="#ffffff" stroke="#f6eccd" strokeWidth="0.8" />

        {/* Center Yellow Pollen Dots */}
        <circle cx="48" cy="62" r="1.5" fill="#f5af19" />
        <circle cx="56" cy="59" r="1.5" fill="#f5af19" />
        <circle cx="64" cy="59" r="1.5" fill="#f5af19" />
        <circle cx="72" cy="62" r="1.5" fill="#f5af19" />

        {/* Delicate Pink Lotus / Rose Buds */}
        <ellipse cx="52" cy="53" rx="3.5" ry="5" fill="#ff758c" />
        <ellipse cx="68" cy="53" rx="3.5" ry="5" fill="#ff758c" />
        <circle cx="60" cy="52" r="4" fill="#ff90a6" />
      </g>

      {/* Terracotta Kalash Pot */}
      <g filter="url(#softGlow)">
        {/* Pot Belly */}
        <path
          d="M32 75 C30 92 40 114 60 118 C80 114 90 92 88 75 C82 72 38 72 32 75 Z"
          fill="url(#potGrad)"
        />
        {/* Pot Base Foot */}
        <path d="M46 116 Q60 121 74 116 L72 120 Q60 123 48 120 Z" fill="#692209" />

        {/* Pot Neck & Golden Rim */}
        <ellipse cx="60" cy="74" rx="25" ry="5" fill="url(#goldRim)" />
        <ellipse cx="60" cy="72" rx="23" ry="3.5" fill="#4d1b09" />

        {/* Decorative Gold Filigree Belt on Pot */}
        <path d="M34 86 Q60 93 86 86" stroke="#fbd971" strokeWidth="2" strokeDasharray="3 2" fill="none" />
        <path d="M38 96 Q60 103 82 96" stroke="#fbd971" strokeWidth="1.5" fill="none" opacity="0.8" />

        {/* Traditional Kumkum Tilak on Center of Pot */}
        <ellipse cx="60" cy="94" rx="3.5" ry="5" fill="#b31217" />
        <circle cx="60" cy="94" r="1.5" fill="#fbd971" />
      </g>
    </svg>
  );
}

// Cascading Flower Shower (Pushpa Vrishti) Animation Component
function FlowerShower({ active, fading = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Auspicious Hindu Wedding Flower Petals (Rose, Marigold & Jasmine)
    const petalColors = [
      { fill: '#ff6b81', stroke: '#e84118' }, // Pink Rose
      { fill: '#ff4757', stroke: '#c23616' }, // Deep Rose
      { fill: '#ffa502', stroke: '#e67e22' }, // Orange Marigold
      { fill: '#ffd32a', stroke: '#c59b27' }, // Golden Marigold
      { fill: '#ffffff', stroke: '#f1f2f6' }, // Fragrant White Jasmine
      { fill: '#ff9ff3', stroke: '#f368e0' }, // Lotus Blossom
    ];

    const PETAL_COUNT = 55;
    const petals = Array.from({ length: PETAL_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 1.5,
      size: 11 + Math.random() * 15,
      speedY: 1.8 + Math.random() * 2.8,
      speedX: (Math.random() - 0.5) * 1.4,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.025 + Math.random() * 0.035,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.05,
      flipAngle: Math.random() * Math.PI * 2,
      flipSpeed: 0.03 + Math.random() * 0.05,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: 0.8 + Math.random() * 0.2,
    }));

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(Math.cos(p.flipAngle), 1);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      const w = p.size;
      const h = p.size * 1.4;
      ctx.moveTo(0, -h * 0.45);
      ctx.bezierCurveTo(w * 0.75, -h * 0.35, w * 0.85, h * 0.35, 0, h * 0.65);
      ctx.bezierCurveTo(-w * 0.85, h * 0.35, -w * 0.75, -h * 0.35, 0, -h * 0.45);

      ctx.fillStyle = p.color.fill;
      ctx.fill();

      // Delicate petal central vein
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.3);
      ctx.lineTo(0, h * 0.45);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of petals) {
        p.y += p.speedY;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 1.6 + p.speedX;
        p.angle += p.angleSpeed;
        p.flipAngle += p.flipSpeed;

        if (p.y > canvas.height + 35) {
          p.y = -25;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -35) p.x = canvas.width + 25;
        if (p.x > canvas.width + 35) p.x = -25;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`flower-shower-canvas ${fading ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: fading ? 0 : 1,
        willChange: 'opacity',
        transform: 'translateZ(0)',
      }}
    />
  );
}

// =========================================================
// REUSABLE PENDULUM SWING PHYSICS HOOK (Subtle, Graceful Movement)
// =========================================================
function usePendulumSwing({ maxAngle = 5, impulse = 2.4, sensitivity = 0.06 } = {}) {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPhysicsActive, setIsPhysicsActive] = useState(false);
  const dragStartRef = useRef({ x: 0, time: 0, initialAngle: 0 });
  const animFrameRef = useRef(null);
  const physicsRef = useRef({ angle: 0, velocity: 0 });

  const runPhysics = (initAngle, initVelocity) => {
    setIsPhysicsActive(true);
    physicsRef.current = { angle: initAngle, velocity: initVelocity };

    let lastTime = performance.now();
    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Realistic gentle pendulum restoring torque with smooth natural settling
      const restoring = -28.0 * physicsRef.current.angle;
      const damping = -3.4 * physicsRef.current.velocity;
      const accel = restoring + damping;

      physicsRef.current.velocity += accel * dt;
      physicsRef.current.angle += physicsRef.current.velocity * dt;

      // Gentle bounds clamping during oscillation
      if (Math.abs(physicsRef.current.angle) > maxAngle * 1.15) {
        physicsRef.current.angle = Math.sign(physicsRef.current.angle) * maxAngle * 1.15;
        physicsRef.current.velocity *= -0.5;
      }

      setAngle(physicsRef.current.angle);

      // Settle condition
      if (
        Math.abs(physicsRef.current.angle) < 0.08 &&
        Math.abs(physicsRef.current.velocity) < 0.15
      ) {
        setAngle(0);
        setIsPhysicsActive(false);
      } else {
        animFrameRef.current = requestAnimationFrame(step);
      }
    };
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(step);
  };

  const handlePointerDown = (e) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setIsPhysicsActive(false);
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      time: performance.now(),
      initialAngle: angle,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const newAngle = Math.max(
      -maxAngle,
      Math.min(maxAngle, (dragStartRef.current.initialAngle || 0) + dx * sensitivity)
    );
    setAngle(newAngle);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}

    const dx = e.clientX - dragStartRef.current.x;
    const elapsed = Math.max(performance.now() - dragStartRef.current.time, 16);
    const speed = Math.max(-6, Math.min(6, (dx / elapsed) * 6)); // gentle flick momentum

    if (Math.abs(dx) < 6) {
      // Tap or touch impulse
      const kick = (Math.random() > 0.5 ? 1 : -1) * (impulse + Math.random() * 0.6);
      runPhysics(0, kick);
    } else {
      // Release from drag with gentle momentum
      runPhysics(angle, speed);
    }
  };

  const handleMouseEnter = () => {
    if (!isDragging && !isPhysicsActive) {
      const nudge = (Math.random() > 0.5 ? 1 : -1) * (impulse * 0.4);
      runPhysics(0, nudge);
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return {
    angle,
    isDragging,
    isPhysicsActive,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleMouseEnter,
  };
}

// 1. Unified Overhead Traditional Hanging Diyas & Sacred Lotus (Section 4)
function MovableHangingDiyas() {
  const {
    angle,
    isDragging,
    isPhysicsActive,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleMouseEnter,
  } = usePendulumSwing({ maxAngle: 5, impulse: 2.5, sensitivity: 0.06 });

  return (
    <div
      className={`movable-diyas-banner-wrap ${isDragging || isPhysicsActive ? 'is-interacting' : 'is-ambient'}`}
      style={{
        transform: isDragging || isPhysicsActive ? `rotate(${angle}deg)` : undefined,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      role="button"
      tabIndex={0}
      title="Touch or drag to gently sway hanging diyas"
    >
      <img
        src="/images/hanging_diyas_transparent.webp"
        alt="Traditional Hanging Diyas & Sacred Lotus"
        className="movable-diyas-img"
        draggable={false}
      />
    </div>
  );
}

// 2. Overhead Floral Garland Toran with Fairy Lights & Glass Baubles (Section 5)
function MovableThankYouGarland() {
  const {
    angle,
    isDragging,
    isPhysicsActive,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleMouseEnter,
  } = usePendulumSwing({ maxAngle: 4.5, impulse: 2.2, sensitivity: 0.05 });

  return (
    <div
      className={`movable-garland-wrap ${isDragging || isPhysicsActive ? 'is-interacting' : 'is-ambient'}`}
      style={{
        transform: isDragging || isPhysicsActive ? `rotate(${angle}deg)` : undefined,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      role="button"
      tabIndex={0}
      title="Touch or drag to gently sway overhead floral garland"
    >
      <img
        src="/images/thankyou_garland_transparent.webp"
        alt="Marigold & Glass Bauble Garlands"
        className="movable-garland-img"
        draggable={false}
      />
    </div>
  );
}

// 3. Overhead Marigold Garland & Temple Bells (Section 2: Meet the Couple)
function MovableMarigoldBells() {
  const {
    angle,
    isDragging,
    isPhysicsActive,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleMouseEnter,
  } = usePendulumSwing({ maxAngle: 5, impulse: 2.5, sensitivity: 0.06 });

  return (
    <div
      className={`movable-marigold-bells-wrap ${isDragging || isPhysicsActive ? 'is-interacting' : 'is-ambient'}`}
      style={{
        transform: isDragging || isPhysicsActive ? `rotate(${angle}deg)` : undefined,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      role="button"
      tabIndex={0}
      title="Touch or drag to gently sway marigold garland with bells"
    >
      <img
        src="/images/marigold_bells_transparent.webp"
        alt="Traditional Marigold Garland & Bells"
        className="movable-marigold-bells-img"
        draggable={false}
      />
    </div>
  );
}

export default function WeddingInvitation() {
  // Gate intro states
  const [introOpened, setIntroOpened] = useState(false);
  const [introDismissed, setIntroDismissed] = useState(false);

  // Flower Shower state (10-second duration with graceful fade)
  const [flowersFlowing, setFlowersFlowing] = useState(false);
  const [flowersFading, setFlowersFading] = useState(false);
  const flowerTimerRef = useRef(null);
  const flowerFadeTimerRef = useRef(null);

  // Trigger flower shower for exactly 10 seconds with smooth fade
  const triggerFlowerShower = () => {
    if (flowerTimerRef.current) clearTimeout(flowerTimerRef.current);
    if (flowerFadeTimerRef.current) clearTimeout(flowerFadeTimerRef.current);

    setFlowersFading(false);
    setFlowersFlowing(true);

    // After 9 seconds, begin smooth 1-second fade out
    flowerFadeTimerRef.current = setTimeout(() => {
      setFlowersFading(true);
    }, 9000);

    // After 10 seconds, turn off flower shower
    flowerTimerRef.current = setTimeout(() => {
      setFlowersFlowing(false);
      setFlowersFading(false);
    }, 10000);
  };

  const handleTriggerFlowerShower = (e) => {
    e.stopPropagation();
    triggerFlowerShower();
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (flowerTimerRef.current) clearTimeout(flowerTimerRef.current);
      if (flowerFadeTimerRef.current) clearTimeout(flowerFadeTimerRef.current);
    };
  }, []);

  // Inner countdown gate state (Section 3)
  const [countdownGatesOpen, setCountdownGatesOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  const audioRef = useRef(null);

  // Countdown timer logic to 13 Nov 2026, 5:00 AM IST
  useEffect(() => {
    const targetDate = new Date('2026-11-13T05:00:00+05:30').getTime();

    const updateTimer = () => {
      const difference = Math.max(0, targetDate - Date.now());
      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for delicate fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [introDismissed]);

  // Ensure audio is reset to 0:00 on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  // Lock page scrolling completely while door intro is active
  useEffect(() => {
    if (!introDismissed) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [introDismissed]);

  // Main Temple Gate Intro Click Handler:
  // Opens the temple doors with 3D animation, plays wedding song from 0.00, triggers 5s flower shower with fade, and transitions directly to main page
  const handleOpenIntroGate = () => {
    if (introOpened) return;

    // 1. Play the wedding song strictly from the very beginning (0.00)
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback initialized:', err));
    }

    // 2. Trigger the 3D door opening animation and camera zoom
    setIntroOpened(true);

    // 3. Flower shower flows for 5 seconds as door opens and fades smoothly
    triggerFlowerShower();

    // 4. Smoothly transition directly into the main page
    setTimeout(() => {
      setIntroDismissed(true);
    }, 1200);
  };

  // Replay intro gates from main page
  const handleReplayIntro = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    setIntroDismissed(false);
    setTimeout(() => {
      setIntroOpened(false);
    }, 50);
  };

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  return (
    <main className={`invitation-container ${!introDismissed ? 'door-active' : ''}`}>
      {/* =========================================================
          INTRO SCREEN: LUXURY BOTANICAL ENVELOPE (GOLDEN WAX SEAL)
          ========================================================= */}
      {!introDismissed && (
        <div
          className={`temple-intro-overlay envelope-intro-overlay ${introOpened ? 'intro-gate-opened envelope-opened' : ''}`}
          onClick={handleOpenIntroGate}
        >
          {/* Envelope Stage Container (3D Perspective) */}
          <div className="envelope-stage">
            {/* 1. Bottom Envelope Body with Embossed Botanical Branches & S & S Monogram */}
            <div className="envelope-bottom-body">
              <img
                src="/images/envelope_bottom_body.webp"
                alt="Luxury Envelope Body"
                className="envelope-bg-img"
                draggable={false}
              />
            </div>

            {/* 2. Top Flap with Embossed Vines & 3D Golden Wax Seal (Lifts Up in 3D) */}
            <div className="envelope-top-flap-wrapper">
              <img
                src="/images/envelope_top_flap.webp"
                alt="Envelope Flap with Golden Wax Seal"
                className="envelope-top-flap-img"
                draggable={false}
              />
            </div>

            {/* 3. Subtle Luxury Wax Seal Shimmer Glow on Center Seal */}
            <div className="envelope-seal-pulse"></div>
          </div>
        </div>
      )}

      {/* =========================================================
          MAIN PAGE CONTENT: COMPLETELY HIDDEN ON DOOR PAGE (ZERO BLEED)
          ========================================================= */}
      <div className={`main-invitation-content ${!introOpened ? 'is-hidden-behind-door' : 'is-revealed'}`}>
        {/* =========================================================
            1. HERO SECTION
            ========================================================= */}
        <section className="hero-section">
        <div className="hero-content">
          <p className="font-caps-sub" style={{ color: '#8c631d' }}>THE WEDDING OF</p>
          <h1 className="hero-names font-serif-title">
            Sunil Kumar
            <span className="hero-ampersand">&amp;</span>
            Santhiya
          </h1>
          <p className="hero-venue">
            GURUVAYUR SRI KRISHNA TEMPLE
            <br />
            KERALAM
          </p>
          <p className="hero-date">FRIDAY, 13 NOVEMBER 2026</p>

          {/* Scroll Word & Scroll Symbol in White below Date 13 Nov 2026 - Enhanced Size */}
          <div
            className="hero-scroll-white-indicator"
            onClick={() => {
              const nextSec = document.querySelector('.couple-section');
              if (nextSec) {
                nextSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            role="button"
            tabIndex={0}
            title="Scroll down"
            aria-label="Scroll down to invitation"
          >
            <span className="hero-scroll-word-white">SCROLL</span>
            <svg
              className="hero-mouse-svg-white"
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.2"
                y="1.2"
                width="13.6"
                height="22.6"
                rx="6.8"
                stroke="#ffffff"
                strokeWidth="1.8"
                fill="rgba(255, 255, 255, 0.18)"
              />
              <line
                className="hero-mouse-wheel-white"
                x1="8"
                y1="5.5"
                x2="8"
                y2="9.5"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hero-chevron-svg-white"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.5 5L10 1"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Sacred Couple Standing at Mandapam Center Stage */}
        <div className="hero-couple-stage">
          <img
            src="/images/couple_full.webp"
            alt="Sunil Kumar & Santhiya"
            className="hero-couple-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </div>
      </section>

      {/* =========================================================
          2. MEET THE COUPLE SECTION
          ========================================================= */}
      <section className="section couple-section fade-in-section">
        {/* Overhead Hanging Marigold Garland & Temple Bells (No Background, Movable) */}
        <MovableMarigoldBells />

        <p className="font-caps-sub">BEGINNING OF FOREVER</p>
        <h2 className="section-title font-serif-title">Meet the Couple</h2>
        <div className="gold-accent-line"></div>

        {/* Groom Card: Details on Left, Groom on Right */}
        <div className="couple-card groom groom-layout">
          <svg className="mandala-watermark" viewBox="0 0 100 100" fill="none" stroke="#d4af37" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="10" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <ellipse key={deg} cx="50" cy="25" rx="5" ry="14" transform={`rotate(${deg} 50 50)`} />
            ))}
          </svg>

          {/* Left Side: Groom Details */}
          <div className="card-info-content">
            <p className="font-caps-sub" style={{ fontSize: '0.66rem' }}>THE GROOM</p>
            <h3 className="couple-name font-serif-title">R. Sunil Kumar</h3>
            <p className="couple-blessing">With Divine Blessings...</p>
            <div className="parent-badge">
              S/o Mr. Rajendran &amp; Mrs. Prema
            </div>
          </div>

          {/* Right Side: Traditional Cartoon Groom Illustration */}
          <img
            src="/images/cartoon_groom_clean.webp"
            alt="Traditional South Indian Groom"
            className="card-cartoon-character groom-char"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>

        {/* Delicate Heart Divider */}
        <div className="heart-divider">&hearts;</div>

        {/* Bride Card: Bride on Left, Details on Right */}
        <div className="couple-card bride bride-layout">
          <svg className="mandala-watermark left" viewBox="0 0 100 100" fill="none" stroke="#d4af37" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="10" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <ellipse key={deg} cx="50" cy="25" rx="5" ry="14" transform={`rotate(${deg} 50 50)`} />
            ))}
          </svg>

          {/* Left Side: Traditional Cartoon Bride Illustration in Saree */}
          <img
            src="/images/cartoon_bride_clean.webp"
            alt="Traditional South Indian Bride in Saree"
            className="card-cartoon-character bride-char"
            loading="eager"
            decoding="async"
            draggable={false}
          />

          {/* Right Side: Bride Details */}
          <div className="card-info-content">
            <p className="font-caps-sub" style={{ fontSize: '0.66rem' }}>THE BRIDE</p>
            <h3 className="couple-name font-serif-title">P. Santhiya</h3>
            <p className="couple-blessing">In the presence of love...</p>
            <div className="parent-badge">
              D/o Mr. Perumal &amp; Mrs. Poornam
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div className="quote-card">
          <p className="quote-text font-serif-title">
            &ldquo;Under the divine canopy of eternal grace, two souls unite in sacred matrimony.&rdquo;
          </p>
          <p className="compliments-tag">
            &mdash; WITH BEST COMPLIMENTS FROM BOTH FAMILIES &mdash;
          </p>
        </div>
      </section>

      {/* =========================================================
          3. COUNTDOWN & SACRED GATES
          ========================================================= */}
      <section className="section countdown-section fade-in-section">
        <div className="countdown-content">
          <p className="font-caps-sub">JOIN THE CELEBRATION</p>
          <h2 className="section-title font-serif-title">Counting Down the Days</h2>
          <p className="countdown-intro-text">
            Tap the sacred center ring to swing the golden sanctuary gates open
          </p>

          {/* Interactive Sanctuary Gates */}
          <div className={`gates-wrapper ${countdownGatesOpen ? 'opened' : ''}`}>
            {/* Content Revealed Behind the Gates */}
            <div className="gates-reveal">
              <span className="gates-reveal-tag">OUR WEDDING DAY</span>
              <b className="gates-reveal-date font-serif-title">Friday, 13th November 2026</b>
              <span className="gates-reveal-time">Muhurtham: 5:00 AM – 7:00 AM</span>

              {/* Live Ticking Countdown */}
              <div className="timer-boxes">
                <div className="timer-box">
                  <span className="timer-val">{countdown.days}</span>
                  <span className="timer-label">DAYS</span>
                </div>
                <div className="timer-box">
                  <span className="timer-val">{countdown.hours}</span>
                  <span className="timer-label">HOURS</span>
                </div>
                <div className="timer-box">
                  <span className="timer-val">{countdown.mins}</span>
                  <span className="timer-label">MINS</span>
                </div>
                <div className="timer-box">
                  <span className="timer-val">{countdown.secs}</span>
                  <span className="timer-label">SECS</span>
                </div>
              </div>
            </div>

            {/* Red Maroon Sanctuary Doors */}
            <div className="door door-left"></div>
            <div className="door door-right"></div>

            {/* Central Golden Medallion Ring */}
            <button
              className="gates-ring-btn"
              onClick={() => setCountdownGatesOpen(true)}
              aria-label="Open sanctuary gates"
            >
              <span className="gates-ring-om">&#2384;</span>
              <span className="gates-ring-text">OPEN</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WEDDING EVENTS SECTION
          ========================================================= */}
      <section className="section events-section fade-in-section">
        {/* Unified Overhead Traditional Hanging Diyas & Lotus (No Background, Movable) */}
        <MovableHangingDiyas />

        <p className="font-caps-sub">THE CELEBRATION</p>
        <h2 className="section-title font-serif-title">Wedding Events</h2>
        <div className="gold-accent-line"></div>

        {/* Event 1: Wedding Ceremony */}
        <div className="event-card">
          {/* Top Left Corner Peacock Feather (Facing Down-to-Up) */}
          <img
            src="/images/peacock_feather_transparent.webp"
            alt=""
            className="event-corner-peacock"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          <h3 className="event-title font-serif-title">Wedding Ceremony</h3>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#128197;</span>
            <div>
              <strong>Friday, 13th November 2026</strong>
            </div>
          </div>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#9200;</span>
            <div>
              <strong>5:00 AM – 7:00 AM (Muhurtham)</strong>
            </div>
          </div>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#128205;</span>
            <div>
              <span className="event-venue-strong">Guruvayur Sri Krishna Temple</span>
              <span className="event-venue-sub">Keralam</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Guruvayur+Sri+Krishna+Temple+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="event-btn"
          >
            VIEW LOCATION MAP
          </a>

          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sunil+Kumar+%26+Santhiya+Wedding&dates=20261112T233000Z/20261113T013000Z&location=Guruvayur+Sri+Krishna+Temple,+Keralam"
            target="_blank"
            rel="noopener noreferrer"
            className="event-btn secondary"
          >
            ADD TO CALENDAR
          </a>
        </div>

        {/* Event 2: Grand Reception */}
        <div className="event-card">
          {/* Top Left Corner Peacock Feather (Facing Down-to-Up) */}
          <img
            src="/images/peacock_feather_transparent.webp"
            alt=""
            className="event-corner-peacock"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          <h3 className="event-title font-serif-title">Grand Reception</h3>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#128197;</span>
            <div>
              <strong>Sunday, 15th November 2026</strong>
            </div>
          </div>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#9200;</span>
            <div>
              <strong>6:00 PM – 9:00 PM Onwards</strong>
            </div>
          </div>

          <div className="event-detail-row">
            <span className="event-detail-icon">&#128205;</span>
            <div>
              <span className="event-venue-strong">Bharathi Function Hall</span>
              <span className="event-venue-sub">Samalapuram</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bharathi+Function+Hall+Samalapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="event-btn"
          >
            VIEW LOCATION MAP
          </a>

          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sunil+%26+Santhiya+Reception&dates=20261115T123000Z/20261115T153000Z&location=Bharathi+Function+Hall,+Samalapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="event-btn secondary"
          >
            ADD TO CALENDAR
          </a>
        </div>
      </section>

      {/* =========================================================
          5. REDESIGNED THANK YOU & CELEBRATION FOOTER (Matching Image 2)
          ========================================================= */}
      <section className="section thankyou-redesigned-section fade-in-section">
        {/* Overhead Hanging Floral Garland with Baubles and Fairy Lights (No Background, Movable) */}
        <MovableThankYouGarland />

        {/* Center Auspicious Mangal Kalash (Image 2) */}
        <div className="mangal-kalash-container">
          <img
            src="/images/mangal_kalash_top.jpg"
            alt="Sacred Mangal Kalash"
            className="mangal-kalash-avatar"
          />
        </div>

        {/* With Gratitude & Thank You Typography (Image 2) */}
        <p className="font-caps-sub thankyou-gratitude-tag">WITH GRATITUDE</p>
        <h2 className="thankyou-cursive-title font-serif-title">Thank You</h2>

        <div className="thankyou-gold-line"></div>

        <p className="thankyou-honor-text">
          It is the greatest honor to have you as part of our story. We can&apos;t wait to celebrate with you!
        </p>

        {/* Couple Names Flanked by Auspicious Leaf & Floral Kalash Pots (Image 2) */}
        <div className="thankyou-couple-flank-row">
          <div className="flank-pot-box left">
            <KalashFlowerPot className="pot-svg" />
          </div>

          <div className="thankyou-couple-center">
            <span className="ty-couple-name font-serif-title">Sunil</span>
            <span className="ty-couple-amp">&amp;</span>
            <span className="ty-couple-name font-serif-title">Santhiya</span>
          </div>

          <div className="flank-pot-box right">
            <KalashFlowerPot className="pot-svg" />
          </div>
        </div>

        <div className="thankyou-gold-line subtle"></div>

        <p className="thankyou-wishes-text">
          Wishing you a lifetime of love and happiness.
        </p>

        <p className="thankyou-signature-credits">
          WITH LOVE &bull; MR. RAJENDRAN &amp; MRS. PREMA
          <br />
          MR. PERUMAL &amp; MRS. POORNAM
          <br />
          13 &bull; 11 &bull; 2026
        </p>

        {/* Traditional Royal Musicians Miniature Painting Footer (Image 2) */}
        <div className="musicians-footer-section">
          <img
            src="/images/musicians_footer.webp"
            alt="Royal Wedding Musicians Procession"
            className="musicians-footer-illustration"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </section>
      </div>

      {/* =========================================================
          6. FLOATING ACTIONS (Flower Petal Shower & Music Player)
          ========================================================= */}
      {/* Cascading Flower Petal Shower Canvas */}
      <FlowerShower active={flowersFlowing} fading={flowersFading} />

      {/* Floating Flower Shower Toggle Button (Flowers flow for 5 seconds on tap) */}
      {introOpened && (
        <button
          onClick={handleTriggerFlowerShower}
          className={`floating-action floating-flower-btn ${flowersFlowing ? 'active' : ''}`}
          title="Shower Flower Petals (5 sec)"
          aria-label="Shower Flower Petals"
        >
          <span>🌸</span>
        </button>
      )}

      {/* Floating Music Toggle Button */}
      {introOpened && (
        <button
          onClick={toggleMusic}
          className={`floating-action floating-music-btn ${isPlaying ? 'playing' : ''}`}
          aria-label="Toggle wedding music"
        >
          {isPlaying ? '♪' : '♫'}
        </button>
      )}

      {/* Background Wedding Song Audio */}
      <audio
        ref={audioRef}
        id="wedding-song"
        src="/assets/song.mp3"
        loop
        preload="auto"
      />
    </main>
  );
}

