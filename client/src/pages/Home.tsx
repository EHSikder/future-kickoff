import { useEffect, useState } from "react";
import { Globe, Zap } from "lucide-react";

/**
 * Design Philosophy: Cosmic Luxury
 * - Dark mode with electric blue, purple, and orange accents
 * - Futuristic, high-tech aesthetic with glow effects
 * - Premium, cinematic presentation
 * - Minimalist layout with maximum impact
 */

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate target date: 20 minutes from deployment
    // This will be set when the page loads
    const calculateCountdown = () => {
      // World Cup 2026 starts on June 12, 2026
      const targetDate = new Date("2026-06-12T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/manus-storage/worldcup-bg-video_8b15b371.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Gradient Overlay - adds depth and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest text-blue-300 uppercase">
              The Future Awaits
            </span>
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                The Future is Closer
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Than You Think</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            FIFA World Cup 2026 is almost here. Get ready for the most anticipated tournament of the decade.
          </p>

          {/* Countdown Timer */}
          <div className="pt-8 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Days */}
              <div className="group">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-blue-500/30 rounded-lg p-6 md:p-8 hover:border-blue-400/60 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-black text-blue-300 drop-shadow-lg">
                      {String(countdown.days).padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-blue-200/70 uppercase tracking-widest mt-2">
                      Days
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 md:p-8 hover:border-purple-400/60 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-black text-purple-300 drop-shadow-lg">
                      {String(countdown.hours).padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-purple-200/70 uppercase tracking-widest mt-2">
                      Hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Minutes */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-orange-500/30 rounded-lg p-6 md:p-8 hover:border-orange-400/60 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-black text-orange-300 drop-shadow-lg">
                      {String(countdown.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-orange-200/70 uppercase tracking-widest mt-2">
                      Minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* Seconds */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-blue-400/30 rounded-lg p-6 md:p-8 hover:border-blue-300/60 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-black text-blue-200 drop-shadow-lg">
                      {String(countdown.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-blue-200/70 uppercase tracking-widest mt-2">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="group relative px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold uppercase tracking-widest">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-lg" />
              {/* Button Content */}
              <div className="relative px-6 py-3 bg-black rounded-lg group-hover:bg-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent">
                  Stay Tuned
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer - Decorative */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-gray-400/40 text-sm">
          <span>FIFA World Cup 2026</span>
          <span>•</span>
          <span>June 12 - July 12</span>
        </div>
      </div>

      {/* Animated Particles Effect (subtle) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
