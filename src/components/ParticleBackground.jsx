const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4),
  top: (index * 13) % 92,
  left: (index * 17) % 96,
  delay: (index % 8) * 0.8,
  duration: 8 + (index % 6),
}));

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-purple-400/35 blur-[1px] animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16),transparent_60%)]" />
    </div>
  );
}
