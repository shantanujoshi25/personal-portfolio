import { motion } from 'framer-motion';

const PulsatingSpheres = () => {
  const spheres = [
    {
      id: 1,
      x: '15%',
      y: '40%',
      size: 500,
      opacity: 0.4,
      duration: 12,
      delay: 0
    },
    {
      id: 2,
      x: '35%',
      y: '25%',
      size: 400,
      opacity: 0.35,
      duration: 15,
      delay: 3
    },
    {
      id: 3,
      x: '25%',
      y: '70%',
      size: 450,
      opacity: 0.3,
      duration: 14,
      delay: 6
    },
    {
      id: 4,
      x: '45%',
      y: '55%',
      size: 350,
      opacity: 0.25,
      duration: 18,
      delay: 2
    },
    {
      id: 5,
      x: '10%',
      y: '80%',
      size: 300,
      opacity: 0.2,
      duration: 16,
      delay: 5
    },
    {
      id: 6,
      x: '40%',
      y: '15%',
      size: 280,
      opacity: 0.18,
      duration: 20,
      delay: 8
    }
  ];

  return (
    <div className="fixed inset-0" style={{ zIndex: -50 }}>
      {/* Dark background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
        }}
      />
      
      {/* Pulsating spheres */}
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className="absolute rounded-full"
          style={{
            left: sphere.x,
            top: sphere.y,
            width: sphere.size,
            height: sphere.size,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle at center, 
              rgba(244, 208, 63, ${sphere.opacity}) 0%, 
              rgba(247, 220, 111, ${sphere.opacity * 0.7}) 30%, 
              rgba(248, 196, 113, ${sphere.opacity * 0.4}) 60%, 
              transparent 100%
            )`
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [sphere.opacity, sphere.opacity * 0.1, sphere.opacity],
            filter: [
              'blur(0px)',
              `blur(${sphere.size * 0.02}px)`,
              'blur(0px)'
            ]
          }}
          transition={{
            duration: sphere.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sphere.delay
          }}
        />
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 12 + 4,
            height: Math.random() * 12 + 4,
            background: `rgba(244, 208, 63, ${Math.random() * 0.3 + 0.1})`,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(244, 208, 63, ${Math.random() * 0.4 + 0.2})`
          }}
          animate={{
            scale: [0.5, 2, 0.5],
            opacity: [0, 1, 0],
            y: [0, -150, 0],
            x: [0, Math.sin(i) * 50, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Background ambient glow - focused on left side */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 20% 50%, rgba(244, 208, 63, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 500px 600px at 35% 30%, rgba(247, 220, 111, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 400px 300px at 25% 80%, rgba(248, 196, 113, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default PulsatingSpheres;