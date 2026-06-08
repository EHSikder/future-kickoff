import { useEffect, useState } from "react";
import { Globe, Zap, Bell, Check } from "lucide-react";

/**
 * Design Philosophy: Cosmic Luxury
 * - Dark mode with electric blue, purple, and orange accents
 * - Futuristic, high-tech aesthetic with glow effects
 * - Premium, cinematic presentation
 * - Minimalist layout with maximum impact
 * - Bilingual support: English & Arabic
 */

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type Language = "en" | "ar";

const translations = {
  en: {
    tagline: "The Future Awaits",
    heading1: "The Future is Closer",
    heading2: "Than You Think",
    subtitle:
      "FIFA World Cup 2026 is almost here. Get ready to predict the matches of the most anticipated tournament of the decade.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    stayTuned: "Stay Tuned",
    footer1: "FIFA World Cup 2026",
    footer2: "June 12 - July 19",
  },
  ar: {
    tagline: "المستقبل ينتظر",
    heading1: "المستقبل أقرب",
    heading2: "مما تعتقد",
    subtitle:
      "كأس العالم FIFA 2026 على الأبواب. استعد للتنبؤ بمباريات أكثر البطولات توقعاً في العقد.",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
    stayTuned: "ابق على تواصل",
    footer1: "كأس العالم FIFA 2026",
    footer2: "12 يونيو - 19 يوليو",
  },
};

export default function Home() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [language, setLanguage] = useState<Language>("en");
  const [isSpinning, setIsSpinning] = useState(false);

  const t = translations[language];

  useEffect(() => {
    // Calculate target date: World Cup 2026 starts on June 12, 2026
    const calculateCountdown = () => {
      const targetDate = new Date("2026-06-12T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = () => {
    setIsSpinning(true);

    // Request notification permission from browser
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("World Cup 2026 Countdown", {
          body: "You will receive updates about the tournament!",
          icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%232E5BFF'/><text x='50' y='60' font-size='50' fill='white' text-anchor='middle' font-weight='bold'>⚽</text></svg>",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("World Cup 2026 Countdown", {
              body: "You will receive updates about the tournament!",
              icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%232E5BFF'/><text x='50' y='60' font-size='50' fill='white' text-anchor='middle' font-weight='bold'>⚽</text></svg>",
            });
          }
        });
      }
    }

    // Stop spinning after 2 seconds
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-black ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
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

      {/* Language Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            language === "en"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
              : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 border border-slate-600/30"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("ar")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            language === "ar"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
              : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 border border-slate-600/30"
          }`}
        >
          العربية
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest text-blue-300 uppercase">
              {t.tagline}
            </span>
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                {t.heading1}
              </span>
              <br />
              <span className="text-white drop-shadow-lg">{t.heading2}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
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
                      {t.days}
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
                      {t.hours}
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
                      {t.minutes}
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
                      {t.seconds}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Notifications */}
          <div className="pt-8">
            <button
              onClick={handleNotificationClick}
              className={`group relative px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold uppercase tracking-widest transition-all duration-300 ${
                isSpinning ? "opacity-75" : ""
              }`}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-lg" />
              {/* Button Content */}
              <div
                className={`relative px-6 py-3 bg-black rounded-lg group-hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSpinning ? "animate-spin" : ""
                }`}
              >
                <Bell className={`w-5 h-5 ${isSpinning ? "opacity-0" : ""}`} />
                <span className="bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent">
                  {t.stayTuned}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer - Decorative */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-gray-400/40 text-sm">
          <span>{t.footer1}</span>
          <span>•</span>
          <span>{t.footer2}</span>
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
