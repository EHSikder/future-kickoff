import { useEffect, useState } from "react";
import { Zap, Bell } from "lucide-react";

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
      "Fifa world cup 2026 is almost here. Get ready to predict and win. Stay Tuned",
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
      "كأس العالم لكرة القدم 2026 على الأبواب. استعدوا للتوقع والفوز. تابعونا!",
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
  const [notified, setNotified] = useState(false);

  const t = translations[language];

  useEffect(() => {
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
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = () => {
    setIsSpinning(true);

    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("World Cup 2026 Countdown", {
          body: "You will receive updates about the tournament!",
          icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%232E5BFF'/><text x='50' y='60' font-size='50' fill='white' text-anchor='middle' font-weight='bold'>⚽</text></svg>",
        });
        setNotified(true);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("World Cup 2026 Countdown", {
              body: "You will receive updates about the tournament!",
              icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%232E5BFF'/><text x='50' y='60' font-size='50' fill='white' text-anchor='middle' font-weight='bold'>⚽</text></svg>",
            });
            setNotified(true);
          }
        });
      }
    }

    setTimeout(() => setIsSpinning(false), 2000);
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-black ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      {/* Video Background — place your file at: client/public/bg-video.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>



      {/* Language Toggle */}
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest text-blue-300 uppercase">
              {t.tagline}
            </span>
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Main Heading */}          
            <div className="space-y-4">
  <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
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

          {/* Countdown Timer — single digital box */}
          <div className="pt-8 pb-4 flex justify-center">
            <div className="relative">
              {/* Ambient glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{
                  background:
                    "linear-gradient(to right, rgba(59,130,246,0.35), rgba(168,85,247,0.35), rgba(249,115,22,0.35))",
                }}
              />
              {/* Timer box */}
              <div
                className="relative backdrop-blur-md rounded-2xl px-6 md:px-10 py-6 md:py-8 flex items-center gap-1 md:gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,18,40,0.92), rgba(22,36,56,0.92))",
                  border: "1px solid rgba(99,160,255,0.35)",
                  boxShadow:
                    "0 0 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Days */}
                <div className="flex flex-col items-center min-w-[3ch]">
                  <span
                    className="text-4xl md:text-6xl font-black tabular-nums leading-none"
                    style={{ color: "#93c5fd", fontFamily: "'Courier New', monospace", textShadow: "0 0 18px rgba(147,197,253,0.6)" }}
                  >
                    {String(countdown.days).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
                    {t.days}
                  </span>
                </div>

                {/* Separator */}
                <span
                  className="text-3xl md:text-5xl font-black pb-5 select-none"
                  style={{ color: "rgba(147,197,253,0.5)" }}
                >
                  :
                </span>

                {/* Hours */}
                <div className="flex flex-col items-center min-w-[3ch]">
                  <span
                    className="text-4xl md:text-6xl font-black tabular-nums leading-none"
                    style={{ color: "#d8b4fe", fontFamily: "'Courier New', monospace", textShadow: "0 0 18px rgba(216,180,254,0.6)" }}
                  >
                    {String(countdown.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
                    {t.hours}
                  </span>
                </div>

                {/* Separator */}
                <span
                  className="text-3xl md:text-5xl font-black pb-5 select-none"
                  style={{ color: "rgba(216,180,254,0.5)" }}
                >
                  :
                </span>

                {/* Minutes */}
                <div className="flex flex-col items-center min-w-[3ch]">
                  <span
                    className="text-4xl md:text-6xl font-black tabular-nums leading-none"
                    style={{ color: "#fdba74", fontFamily: "'Courier New', monospace", textShadow: "0 0 18px rgba(253,186,116,0.6)" }}
                  >
                    {String(countdown.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
                    {t.minutes}
                  </span>
                </div>

                {/* Separator */}
                <span
                  className="text-3xl md:text-5xl font-black pb-5 select-none"
                  style={{ color: "rgba(253,186,116,0.5)" }}
                >
                  :
                </span>

                {/* Seconds */}
                <div className="flex flex-col items-center min-w-[3ch]">
                  <span
                    className="text-4xl md:text-6xl font-black tabular-nums leading-none"
                    style={{ color: "#93c5fd", fontFamily: "'Courier New', monospace", textShadow: "0 0 18px rgba(147,197,253,0.6)" }}
                  >
                    {String(countdown.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
                    {t.seconds}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={handleNotificationClick}
              disabled={notified}
              className={`group relative px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold uppercase tracking-widest transition-all duration-300 ${
                isSpinning ? "opacity-75" : ""
              } ${notified ? "cursor-default" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-lg" />
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

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-gray-400/40 text-sm">
          <span>{t.footer1}</span>
          <span>•</span>
          <span>{t.footer2}</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
