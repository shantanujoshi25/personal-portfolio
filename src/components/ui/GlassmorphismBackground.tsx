import { motion } from 'framer-motion';

const GlassmorphismBackground = () => {
  // Generate static sphere data for consistent positioning
  const spheres = [
    { id: 1, x: 15, y: 20, size: 350, delay: 0 },
    { id: 2, x: 75, y: 15, size: 280, delay: 2 },
    { id: 3, x: 25, y: 65, size: 320, delay: 4 },
    { id: 4, x: 85, y: 70, size: 240, delay: 1 },
    { id: 5, x: 45, y: 40, size: 200, delay: 3 },
    { id: 6, x: 65, y: 85, size: 180, delay: 5 }
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 10
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Enhanced base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 20% 30%, rgba(244, 208, 63, 0.25) 0%, rgba(244, 208, 63, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 600px 800px at 80% 20%, rgba(247, 220, 111, 0.2) 0%, rgba(247, 220, 111, 0.06) 40%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 50% 80%, rgba(248, 196, 113, 0.15) 0%, rgba(248, 196, 113, 0.04) 50%, transparent 80%),
            radial-gradient(ellipse 900px 700px at 10% 70%, rgba(241, 196, 15, 0.12) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Large animated 3D spheres with improved visibility */}
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className="absolute rounded-full"
          style={{
            width: sphere.size,
            height: sphere.size,
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            background: `
              radial-gradient(ellipse at 35% 25%, 
                rgba(244, 208, 63, 0.8) 0%,
                rgba(247, 220, 111, 0.6) 25%,
                rgba(248, 196, 113, 0.4) 50%,
                rgba(241, 196, 15, 0.2) 75%,
                transparent 100%
              )
            `,
            filter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            boxShadow: `
              0 0 ${sphere.size * 0.5}px rgba(244, 208, 63, 0.3),
              inset 0 0 ${sphere.size * 0.3}px rgba(255, 255, 255, 0.1)
            `
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.15, 0.85, 1],
            opacity: [0.7, 1, 0.5, 0.7],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25 + sphere.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sphere.delay
          }}
        />
      ))}
      
      {/* Floating orb particles with enhanced visibility */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `
              radial-gradient(circle at center, 
                rgba(244, 208, 63, 0.9) 0%,
                rgba(247, 220, 111, 0.6) 50%,
                transparent 100%
              )
            `,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(244, 208, 63, 0.4)`
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.sin(particle.id) * 40, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 20 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Enhanced ambient light spots */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
        style={{
          background: `
            radial-gradient(circle at center, 
              rgba(244, 208, 63, 0.4) 0%,
              rgba(244, 208, 63, 0.2) 30%,
              rgba(244, 208, 63, 0.1) 60%,
              transparent 100%
            )
          `,
          filter: 'blur(40px)'
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: `
            radial-gradient(circle at center, 
              rgba(247, 220, 111, 0.4) 0%,
              rgba(247, 220, 111, 0.2) 30%,
              rgba(247, 220, 111, 0.1) 60%,
              transparent 100%
            )
          `,
          filter: 'blur(35px)'
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244, 208, 63, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 208, 63, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

export default GlassmorphismBackground;