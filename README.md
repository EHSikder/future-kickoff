# ⚽ Future Kickoff - World Cup 2026 Countdown

A premium, futuristic countdown website for the FIFA World Cup 2026. Features a looping video background, real-time countdown timer, bilingual support (English & Arabic), and notification system.

**Live Demo**: Deploy to Vercel using the guide below!

---

## 🎯 Features

✨ **Premium Design**
- Cosmic energy ring video background
- Dark mode with electric blue, purple, and orange accents
- Glow effects and gradient overlays
- Responsive design for all devices

⏱️ **Real-Time Countdown**
- Live countdown to June 12, 2026 (Tournament Start)
- Displays: Days, Hours, Minutes, Seconds
- Updates every second

🌍 **Bilingual Support**
- English & Arabic (العربية)
- Language toggle in top-right corner
- RTL (Right-to-Left) support for Arabic

🔔 **Notification System**
- "Stay Tuned" button enables browser notifications
- Users get updates about the tournament
- Visual feedback when notifications are enabled

---

## 🚀 Quick Deploy to Vercel

**For Non-Technical Users**: Follow the step-by-step guide in `VERCEL_DEPLOYMENT_GUIDE.md`

**For Developers**:
```bash
# Clone the repository
git clone https://github.com/EHSikder/future-kickoff.git
cd future-kickoff

# Install dependencies
pnpm install

# Run locally
pnpm dev

# Build for production
pnpm build

# Deploy to Vercel (automatic from GitHub)
# Just push to main branch and Vercel will auto-deploy
```

---

## 📋 Project Structure

```
future-kickoff/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main countdown page
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Main app component
│   │   ├── index.css             # Global styles & theme
│   │   └── main.tsx              # React entry point
│   ├── index.html                # HTML template
│   └── public/                   # Static files
├── package.json                  # Dependencies
└── VERCEL_DEPLOYMENT_GUIDE.md   # Deployment instructions
```

---

## 🎨 Design Philosophy

**Cosmic Luxury** - A futuristic, high-tech aesthetic inspired by the video background:
- Deep blacks and dark blues as foundation
- Electric blue (#2E5BFF), purple (#8A2BE2), and orange (#FF4500) accents
- Premium typography (Syne display, Space Grotesk body)
- Smooth animations and hover effects
- No emojis - only professional icons

---

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel (static hosting)

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🌐 Multilingual Content

### English
- Heading: "The Future is Closer Than You Think"
- Subtitle: "FIFA World Cup 2026 is almost here. Get ready to predict the matches of the most anticipated tournament of the decade."
- Tournament: June 12 - July 19, 2026

### العربية (Arabic)
- Heading: "المستقبل أقرب مما تعتقد"
- Subtitle: "كأس العالم FIFA 2026 على الأبواب. استعد للتنبؤ بمباريات أكثر البطولات توقعاً في العقد."
- Tournament: 12 يونيو - 19 يوليو 2026

---

## 🔔 Notifications

The "Stay Tuned" button enables browser notifications. Users will receive updates about:
- Tournament start reminders
- Match schedules
- Important announcements

**Note**: Notifications require user permission in the browser.

---

## 📝 Environment Variables

This is a **static website** - no backend required. All environment variables are optional and handled by Vercel automatically.

---

## 🐛 Troubleshooting

### Video not playing?
- Check your internet connection
- Try a different browser
- Clear browser cache

### Countdown not updating?
- Refresh the page
- Check browser console for errors
- Make sure JavaScript is enabled

### Notifications not working?
- Check browser notification permissions
- Try in a different browser
- Some browsers require HTTPS (Vercel provides this automatically)

---

## 📄 License

MIT License - Feel free to use this project for your own purposes.

---

## 👤 Author

Created with ❤️ for World Cup 2026 fans worldwide.

---

## 🎯 Next Steps

1. **Deploy to Vercel** using the guide in `VERCEL_DEPLOYMENT_GUIDE.md`
2. **Share your website** with friends and family
3. **Customize** the colors, text, or video to match your brand
4. **Add more features** like match predictions, team info, or live scores

---

## 📞 Support

For deployment help, see `VERCEL_DEPLOYMENT_GUIDE.md`

For technical issues, check the browser console (F12) for error messages.

---

**Ready to deploy?** Follow the simple steps in `VERCEL_DEPLOYMENT_GUIDE.md` - it takes just 5 minutes! ⚽🚀
