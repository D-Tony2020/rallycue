// ==== HeroSection ====
(function(){
/* RallyCue HeroSection — Athletic Tech Noir
   Full-viewport hero with background image, neural skeleton overlay,
   bold condensed headline, and dual CTA buttons */


const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/hero-scene-styled-f2SMkLFj8Uxc9tafcTzgpS.webp";

function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 h-px opacity-30"
        style={{
          background: "linear-gradient(to right, transparent, #E84B1A, transparent)",
          animation: "scanline 4s ease-in-out infinite",
          top: "40%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="nf-section-label mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            ◆ &nbsp; In-Motion Active Coaching
          </div>

          {/* Main headline */}
          <h1
            className="nf-display text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 11vw, 8rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            YOUR COACH.
            <br />
            <span style={{ color: "#E84B1A" }}>IN YOUR</span>
            <br />
            EVERY MOVE.
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            RallyCue pairs a voice-coaching headband with a stereo courtside camera to deliver real-time biomechanical cues — correcting your form within the same swing, not hours later.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.55s",
            }}
          >
            <button
              onClick={() => scrollTo("signup")}
              className="nf-btn-primary rounded-sm text-base"
            >
              Get Early Access →
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="nf-btn-outline rounded-sm text-base"
            >
              See How It Works
            </button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-5 sm:gap-8 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10"
            style={{
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.7s",
            }}
          >
            {[
              { value: "<500ms", label: "End-to-End Latency" },
              { value: "4 Sports", label: "Net-sport coverage" },
              { value: "~$50", label: "Hardware" },
              { value: "$25/mo", label: "Pro Coaching Plan" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="nf-display text-2xl md:text-3xl"
                  style={{ color: "#E84B1A" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/50 text-xs mt-1 uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.5 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      <style>{`
        @keyframes scanline {
          0% { top: 20%; opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { top: 80%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
window.HeroSection = HeroSection;
})();

// ==== ProblemSection ====
(function(){
/* RallyCue ProblemSection — Problem statement for net sports training
   Asymmetric layout with bold statement and problem cards */


const problems = [
  {
    icon: "⟳",
    title: "Wrong Patterns Reinforced",
    desc: "Without real-time correction, bad form is drilled into muscle memory — session after session.",
  },
  {
    icon: "◎",
    title: "Training Ignores Your Body",
    desc: "Generic drills ignore your physiology, reach, and movement baseline. One plan does not fit every player.",
  },
  {
    icon: "↗",
    title: "Progress Is Invisible",
    desc: "You can't measure what you can't see. Improvement trends remain vague and unverifiable across months.",
  },
  {
    icon: "$",
    title: "Coaching Is Unscalable",
    desc: "Private coaches in NYC / SF cost $80–$150/hr. ~95% of amateur practice time happens with zero guidance.",
  },
];

function ProblemSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" ref={ref} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #E84B1A 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bold statement */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s ease",
            }}
          >
            <div className="nf-section-label mb-6">◆ &nbsp; The Problem</div>
            <h2
              className="nf-display text-white mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              IN NET SPORTS,
              <br />
              <span style={{ color: "#E84B1A" }}>THE LEARNING</span>
              <br />
              LOOP IS
              <br />
              BROKEN.
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              From 31 interviews — 15 players, 3 coaches, 3 hardware PMs — one pattern held: amateurs train alone more than 85% of the time. On Reddit's r/10s, "rate my swing" videos are uploaded daily by players desperate enough to post their flaws to strangers.
            </p>

            {/* Research quote */}
            <div className="mt-8 p-4 border-l-2 border-[#E84B1A]/50 bg-white/3 rounded-r">
              <p className="text-white/50 text-sm italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                "They train alone for more than 85% of the time."
              </p>
              <p className="text-[#E84B1A]/70 text-xs mt-2 uppercase tracking-widest">— RallyCue Research · n = 31 interviews</p>
            </div>
          </div>

          {/* Right: Problem cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className="nf-card rounded-sm p-6 transition-all duration-300 hover:border-[#E84B1A]/40"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{ color: "#E84B1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", letterSpacing: "0.02em" }}
                >
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProblemSection = ProblemSection;
})();

// ==== ProductSection ====
(function(){
/* RallyCue ProductSection — Three-component product showcase
   Smart Voice Headband + Courtside AI Camera + Mobile App
   Athletic Tech Noir: black bg, orange-red accent, Barlow Condensed + Space Grotesk */


const HEADBAND_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/headband-styled-Vazy8qMFsVKZvNFmbhJNab.webp";
const CAMERA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/camera-styled-eiXBBeQx95HR4snvijSV86.webp";

const pillars = [
  {
    num: "01",
    title: "Stereo Vision Motion Capture",
    desc: "A courtside dual-camera rig reads 33 body joints and court geometry in 3D — no wearable sensors required to track your swing.",
    highlight: "BlazePose + Edge VPU, on-device",
  },
  {
    num: "02",
    title: "Voice-First Coaching Headband",
    desc: "An audio-only headband with built-in speaker and microphone delivers a ~2-second spoken cue before your next shot — and takes your voice commands back.",
    highlight: "Speaker + mic, no screen, no distraction",
  },
  {
    num: "03",
    title: "Adaptive Personalization",
    desc: "RallyCue learns your unique motion baseline and error patterns across sessions, so coaching gets sharper the more you play.",
    highlight: "Tailored to your body & history",
  },
];

function ProductSection() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeDevice, setActiveDevice] = useState("headband");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const headbandSpecs = [
    { label: "Speaker", value: "Voice Cue" },
    { label: "Mic", value: "Far-Field" },
    { label: "Battery", value: "8hr Play" },
  ];
  const cameraSpecs = [
    { label: "Vision", value: "Stereo 3D" },
    { label: "Joints", value: "33 Points" },
    { label: "Setup", value: "< 30 sec" },
  ];
  const appSpecs = [
    { label: "Platform", value: "iOS/Android" },
    { label: "Analytics", value: "Real-time" },
    { label: "Sync", value: "Cloud-based" },
  ];

  const getImage = () => {
    if (activeDevice === "headband") return HEADBAND_IMG;
    if (activeDevice === "camera") return CAMERA_IMG;
    return "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/hero-scene-styled-f2SMkLFj8Uxc9tafcTzgpS.webp";
  };

  const getSpecs = () => {
    if (activeDevice === "headband") return headbandSpecs;
    if (activeDevice === "camera") return cameraSpecs;
    return appSpecs;
  };

  const getLabel = () => {
    if (activeDevice === "headband") return "Smart Voice Headband";
    if (activeDevice === "camera") return "Courtside AI Camera";
    return "Mobile App";
  };

  return (
    <section id="product" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Subtle orange glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E84B1A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; The Product</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="nf-display text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              STEREO VISION +<br />
              <span style={{ color: "#E84B1A" }}>VOICE COACHING</span><br />
              COMBINED.
            </h2>
            <p className="text-white/50 text-base max-w-sm leading-relaxed lg:text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              A courtside stereo camera, a voice-only headband, and a mobile app work together to close the learning loop — no EEG, no body sensors, no calibration ritual.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Device showcase */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {/* Device toggle */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {(["headband", "camera", "app"]).map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDevice(d)}
                  className="px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    background: activeDevice === d ? "#E84B1A" : "rgba(255,255,255,0.05)",
                    border: activeDevice === d ? "1px solid #E84B1A" : "1px solid rgba(255,255,255,0.1)",
                    color: activeDevice === d ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {d === "headband" ? "◆ Headband" : d === "camera" ? "◆ Camera" : "◆ Mobile App"}
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-sm overflow-hidden" style={{ background: "#111" }}>
              <img
                key={activeDevice}
                src={getImage()}
                alt={getLabel()}
                className="w-full object-cover"
                style={{
                  aspectRatio: activeDevice === "app" ? "3/4" : "4/3",
                  maxHeight: "420px",
                  objectFit: "cover",
                  animation: "fade-in 0.4s ease",
                }}
              />
              {/* Overlay label */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#E84B1A]/40 rounded-sm px-3 py-1.5">
                <span className="text-[#E84B1A] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {getLabel()}
                </span>
              </div>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent" />
            </div>

            {/* Spec badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
              {getSpecs().map((spec) => (
                <div key={spec.label} className="nf-card rounded-sm p-3 text-center">
                  <div className="text-white font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>
                    {spec.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Three components note */}
            <div
              className="mt-4 px-4 py-3 rounded-sm flex items-center gap-3"
              style={{
                background: "rgba(200,255,0,0.05)",
                border: "1px solid rgba(200,255,0,0.15)",
              }}
            >
              <span className="text-[#C8FF00] text-sm">◆</span>
              <span className="text-white/50 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Camera sees every joint. Headband speaks the fix. App remembers the pattern. Three parts, one closed loop.
              </span>
            </div>
          </div>

          {/* Technology pillars */}
          <div
            className="space-y-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            {pillars.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActiveTab(i)}
                className="w-full text-left p-6 rounded-sm transition-all duration-300 border"
                style={{
                  background: activeTab === i ? "rgba(232,75,26,0.08)" : "rgba(255,255,255,0.02)",
                  borderColor: activeTab === i ? "rgba(232,75,26,0.5)" : "rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl font-black leading-none mt-0.5 shrink-0"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: activeTab === i ? "#E84B1A" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-base mb-1"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.15rem",
                        letterSpacing: "0.02em",
                        color: activeTab === i ? "#fff" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {p.title}
                    </h3>
                    {activeTab === i && (
                      <div>
                        <p className="text-white/60 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {p.desc}
                        </p>
                        <span
                          className="inline-block text-xs px-3 py-1 rounded-sm font-semibold uppercase tracking-widest"
                          style={{
                            background: "rgba(200,255,0,0.1)",
                            color: "#C8FF00",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          ✓ {p.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
window.ProductSection = ProductSection;
})();

// ==== TechPipelineSection ====
(function(){
/* RallyCue TechPipelineSection — Evidence-driven pipeline summary
   3 Key Values: <500ms end-to-end · Camera-angle agnostic · Multi-label classification */


const pillars = [
  {
    num: "01",
    metric: "< 500ms",
    title: "End-to-End Latency",
    desc: "From motion to voice cue — within one swing. Host-side processing choked on USB bandwidth, so we pushed 100% of inference to the edge VPU inside the camera chip.",
    stack: ["BlazePose", "Edge VPU"],
  },
  {
    num: "02",
    metric: "Camera-Agnostic",
    title: "Place Anywhere — Self-Calibrates",
    desc: "Raw-coordinate models overfit and broke the moment the tripod moved. Homography mapping converts pixel space to absolute court coordinates — pure motion pattern, independent of camera angle, height, or noise.",
    stack: ["Homography", "Kalman Filter"],
  },
  {
    num: "03",
    metric: "Multi-Label",
    title: "Error Classification with Confidence",
    desc: "A graph neural network reads joint relationships over time. It can flag multiple issues per swing — late contact, wrist collapse, footwork delay — each with its own confidence score.",
    stack: ["ST-GCN", "Focal Loss"],
  },
];

const cycles = [
  { label: "Cycle 1", title: "Latency: Host vs. Edge", fix: "100% Edge AI" },
  { label: "Cycle 2", title: "FPS: Precision vs. Speed", fix: "Downgrade to Lite Model" },
  { label: "Cycle 3", title: "Space: Viewpoint Trap", fix: "Homography Mapping" },
];

function TechPipelineSection() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #E84B1A 0px, #E84B1A 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #E84B1A 0px, #E84B1A 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; Tech Pipeline</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="nf-display text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              EVIDENCE-<wbr />DRIVEN<br />
              <span style={{ color: "#E84B1A" }}>ARCHITECTURE.</span>
            </h2>
            <p className="text-white/50 text-base max-w-sm leading-relaxed lg:text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Three engineering cycles. Three pivots. The result is an on-device pipeline that fits inside a single camera chip and speaks up within one swing.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: 3 key values */}
          <div className="lg:col-span-3 space-y-3">
            {pillars.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActive(i)}
                className="w-full text-left p-5 rounded-sm transition-all duration-300 border"
                style={{
                  background: active === i ? "rgba(232,75,26,0.08)" : "rgba(255,255,255,0.02)",
                  borderColor: active === i ? "rgba(232,75,26,0.5)" : "rgba(255,255,255,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${0.15 + i * 0.1}s, background 0.2s, border-color 0.2s`,
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-3xl font-black leading-none mt-0.5 shrink-0 w-10"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: active === i ? "#E84B1A" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <span
                        className="nf-display"
                        style={{
                          fontSize: "1.6rem",
                          color: active === i ? "#E84B1A" : "rgba(255,255,255,0.85)",
                        }}
                      >
                        {p.metric}
                      </span>
                      <span
                        className="text-white/50 text-xs uppercase tracking-widest"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {p.title}
                      </span>
                    </div>
                    {active === i && (
                      <>
                        <p className="text-white/60 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="inline-block text-[11px] px-2.5 py-1 rounded-sm font-semibold uppercase tracking-widest"
                              style={{
                                background: "rgba(200,255,0,0.1)",
                                color: "#C8FF00",
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Pivot ledger */}
          <div
            className="lg:col-span-2 rounded-sm p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <div className="nf-section-label mb-5">Architecture Evolution</div>
            <div className="space-y-5">
              {cycles.map((c, i) => (
                <div key={c.label} className="relative pl-5">
                  <div
                    className="absolute left-0 top-1 w-2 h-2 rounded-full"
                    style={{ background: "#E84B1A" }}
                  />
                  {i < cycles.length - 1 && (
                    <div
                      className="absolute left-[3px] top-4 bottom-[-16px] w-px"
                      style={{ background: "rgba(232,75,26,0.3)" }}
                    />
                  )}
                  <div
                    className="text-[10px] uppercase tracking-widest mb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "rgba(232,75,26,0.7)",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="text-white/80 text-sm font-semibold mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
                  >
                    {c.title}
                  </div>
                  <div className="text-white/50 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Pivot → <span className="text-[#C8FF00]/80">{c.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 pt-5 border-t text-xs leading-relaxed"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              No cloud dependency. No sensors on the body. The intelligence fits inside a single camera chip — and speaks through the headband before your next shot.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.TechPipelineSection = TechPipelineSection;
})();

// ==== StoryboardSection ====
(function(){
/* RallyCue StoryboardSection — 4-phase in-game feedback journey per investor deck
   First Session → Detect → Rest (AI Chat) → Second-Half Cue */


const STORYBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/hero-scene-styled-f2SMkLFj8Uxc9tafcTzgpS.webp";

const panels = [
  {
    num: "01",
    title: "First Session",
    tagline: "Capture. No setup ritual.",
    desc: "Place the stereo camera courtside on its tripod. Strap on the voice headband. The system self-calibrates through homography mapping — no matter where the tripod sits, the court geometry is absolute.",
    quote: "\"Camera locked. Go play — I'll watch the first five minutes.\"",
    quoteBy: "RallyCue Coach",
    tag: "Pre-Session",
  },
  {
    num: "02",
    title: "Detect & Flag",
    tagline: "Three issues surface, with evidence.",
    desc: "At the end of the opening set, the app pushes a short list of patterns the model caught — each with a confidence score and a clip. You tap the ones worth tracking; they become active coaching targets.",
    quote: "\"37% Late Contact · 24% Wrist Collapse · 18% Footwork Delay — select the ones to track.\"",
    quoteBy: "Mid-Session Analysis",
    tag: "Rest Interval",
  },
  {
    num: "03",
    title: "AI Chat — Understand Why",
    tagline: "Less data dump, more conversation.",
    desc: "During the break, you open the AI coach. It explains what's happening, why it matters, and a drill to fix it. Short. Specific. Not a 45-minute video review with nothing actionable.",
    quote: "\"Late contact loses power and direction. Strike the ball 12–18 inches in front of your lead foot.\"",
    quoteBy: "AI Coach · Chat Mode",
    tag: "Personalization",
  },
  {
    num: "04",
    title: "Second-Half Cue",
    tagline: "In-swing correction, in your ear.",
    desc: "Back on court, the headband speaks a 2-second cue after each flagged shot — before your muscle memory locks in the wrong pattern. Next swing gets the benefit of the last.",
    quote: "\"Earlier preparation. Up next: wrist stability.\"",
    quoteBy: "Headband Speaker · Live",
    tag: "In-Play",
  },
];

function StoryboardSection() {
  const [visible, setVisible] = useState(false);
  const [activePanel, setActivePanel] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = panels[activePanel];

  return (
    <section id="storyboard" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Lime glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8FF00 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; Storyboard</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="nf-display text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              ONE SESSION.<br />
              <span style={{ color: "#E84B1A" }}>FOUR BEATS.</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Alex, 35. Club-level tennis. Plays 4×/week. Has never had a consistent coach. Here's how his next practice runs.
            </p>
          </div>
        </div>

        {/* Storyboard image with tab overlay */}
        <div
          className="relative rounded-sm overflow-hidden mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.98)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <img
            src={STORYBOARD_IMG}
            alt="RallyCue storyboard — four phases of in-session coaching"
            className="w-full object-cover"
            style={{ maxHeight: "420px", objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />

          {/* Panel labels overlay */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4">
            {panels.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActivePanel(i)}
                className="p-4 text-left transition-all duration-300"
                style={{
                  background: activePanel === i ? "rgba(232,75,26,0.3)" : "rgba(0,0,0,0.45)",
                  borderTop: activePanel === i ? "2px solid #E84B1A" : "2px solid transparent",
                }}
              >
                <div
                  className="text-xs uppercase tracking-widest font-bold"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: activePanel === i ? "#E84B1A" : "rgba(255,255,255,0.45)",
                  }}
                >
                  {p.num} — {p.title}
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest mt-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: activePanel === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {p.tag}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active panel detail */}
        <div
          className="grid lg:grid-cols-2 gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <div
            key={activePanel}
            style={{ animation: "float-up 0.4s ease forwards" }}
          >
            <div
              className="text-6xl font-black mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(232,75,26,0.2)" }}
            >
              {active.num}
            </div>
            <h3
              className="nf-display text-white mb-2"
              style={{ fontSize: "2rem" }}
            >
              {active.title}
            </h3>
            <div className="nf-lime-text text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {active.tagline}
            </div>
            <p className="text-white/60 text-base leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {active.desc}
            </p>
          </div>

          <div
            className="flex flex-col justify-center"
            key={`quote-${activePanel}`}
            style={{ animation: "float-up 0.5s ease 0.1s forwards", opacity: 0 }}
          >
            <div
              className="p-6 rounded-sm"
              style={{
                background: "rgba(232,75,26,0.06)",
                border: "1px solid rgba(232,75,26,0.2)",
              }}
            >
              <div className="text-3xl text-[#E84B1A]/40 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>"</div>
              <p
                className="text-white/80 text-base leading-relaxed italic mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {active.quote.replace(/^"|"$/g, "")}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#E84B1A]/50" />
                <span className="text-[#E84B1A]/70 text-xs uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {active.quoteBy}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
window.StoryboardSection = StoryboardSection;
})();

// ==== CompetitorSection ====
(function(){
/* RallyCue CompetitorSection — 2x2 positioning matrix
   Axes: Real-time feedback × Personalization. RallyCue sits in the upper-right. */



const competitors = [
  { id: "rallycue", name: "RallyCue", tag: "Voice headband + stereo camera",       personalization: 88, realtime: 92, self: true },
  { id: "tonal",    name: "Tonal",    tag: "Strength, home gym",                     personalization: 70, realtime: 55 },
  { id: "fitbod",   name: "Fitbod",   tag: "Personalized strength plans",            personalization: 75, realtime: 15 },
  { id: "swing",    name: "SwingVision", tag: "Post-match tennis analysis",          personalization: 30, realtime: 20 },
  { id: "arccos",   name: "Arccos Golf", tag: "Shot tracking, post-round",           personalization: 25, realtime: 15 },
  { id: "apple",    name: "Apple Watch", tag: "General activity metrics",            personalization: 35, realtime: 40 },
  { id: "whoop",    name: "WHOOP",    tag: "Recovery & strain",                      personalization: 45, realtime: 30 },
];

function CompetitorSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState("rallycue");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = competitors.find((c) => c.id === hovered) || competitors[0];

  return (
    <section id="competitors" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E84B1A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; Landscape</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="nf-display text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              NOBODY DOES<br />
              <span style={{ color: "#E84B1A" }}>BOTH AXES.</span>
            </h2>
            <p className="text-white/50 text-base max-w-sm leading-relaxed lg:text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Connected-fitness gives personalization without real-time correction. Post-match analyzers flag issues after the reps are already drilled. RallyCue is the only one that intervenes inside the swing.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Matrix */}
          <div
            className="lg:col-span-3 relative rounded-sm p-4 sm:p-6 min-h-[340px]"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              aspectRatio: "1 / 1",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.98)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {/* Axis labels */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Real-Time Feedback →
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Personalization →
            </div>

            {/* Grid lines */}
            <div className="absolute inset-10 border border-white/10" />
            <div className="absolute inset-10">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
            </div>

            {/* Quadrant labels */}
            <div className="absolute inset-10 pointer-events-none">
              <span className="absolute top-2 left-2 text-[10px] text-white/25 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Real-time · Generic</span>
              <span className="absolute top-2 right-2 text-[10px] text-[#E84B1A]/70 uppercase tracking-widest font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Real-time · Personal</span>
              <span className="absolute bottom-2 left-2 text-[10px] text-white/25 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Post-hoc · Generic</span>
              <span className="absolute bottom-2 right-2 text-[10px] text-white/25 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Post-hoc · Personal</span>
            </div>

            {/* Dots */}
            <div className="absolute inset-10">
              {competitors.map((c) => {
                const x = c.personalization; // 0..100, left to right
                const y = 100 - c.realtime;  // invert: top = high
                const isActive = hovered === c.id;
                return (
                  <button
                    key={c.id}
                    onMouseEnter={() => setHovered(c.id)}
                    onFocus={() => setHovered(c.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 transition-all"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      zIndex: c.self ? 20 : isActive ? 15 : 10,
                    }}
                  >
                    <div
                      className="rounded-full transition-all"
                      style={{
                        width: c.self ? (isActive ? 22 : 18) : isActive ? 14 : 10,
                        height: c.self ? (isActive ? 22 : 18) : isActive ? 14 : 10,
                        background: c.self ? "#E84B1A" : isActive ? "#C8FF00" : "rgba(255,255,255,0.5)",
                        boxShadow: c.self ? "0 0 24px rgba(232,75,26,0.6)" : "none",
                        border: c.self ? "2px solid rgba(255,255,255,0.9)" : "none",
                      }}
                    />
                    <span
                      className="text-[10px] whitespace-nowrap font-semibold uppercase tracking-widest"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: c.self ? "#E84B1A" : isActive ? "#C8FF00" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {c.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div
            className="lg:col-span-2 rounded-sm p-6 flex flex-col"
            style={{
              background: active.self ? "rgba(232,75,26,0.08)" : "rgba(255,255,255,0.02)",
              border: active.self ? "1px solid rgba(232,75,26,0.4)" : "1px solid rgba(255,255,255,0.08)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <div className="nf-section-label mb-3" style={{ color: active.self ? "#E84B1A" : undefined }}>
              {active.self ? "◆ That's Us" : "Competitor"}
            </div>
            <h3 className="nf-display text-white mb-1" style={{ fontSize: "2.2rem" }}>
              {active.name}
            </h3>
            <p className="text-white/50 text-sm mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {active.tag}
            </p>

            <div className="space-y-3 mb-5">
              {[
                { label: "Personalization", value: active.personalization },
                { label: "Real-Time Feedback", value: active.realtime },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-[11px] uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="text-white/40">{m.label}</span>
                    <span className="text-white/60">{m.value}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${m.value}%`,
                        background: active.self ? "#E84B1A" : "rgba(200,255,0,0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-auto pt-5 border-t text-xs leading-relaxed"
              style={{
                borderColor: active.self ? "rgba(232,75,26,0.2)" : "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {active.self
                ? "The upper-right quadrant was empty. Voice-first real-time cues + adaptive personalization is the whitespace — we own it."
                : "Hover any competitor dot to compare. The upper-right remains open for RallyCue."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CompetitorSection = CompetitorSection;
})();

// ==== MarketScaleSection ====
(function(){
/* RallyCue MarketScaleSection — TAM/SAM/SOM + 4-sport revenue buildup */


const funnel = [
  { label: "TAM", value: "$22B", tag: "All U.S. sport players", width: "100%", color: "rgba(255,255,255,0.5)" },
  { label: "SAM", value: "$2.1B", tag: "Net-sport enthusiasts", width: "65%", color: "#C8FF00" },
  { label: "SOM", value: "$300M", tag: "Our obtainable market", width: "38%", color: "#E84B1A" },
];

const sports = [
  { name: "Tennis",     total: 25.7, corePct: 50, demoPct: 22, convPct: 18, payers: 509, revenue: 152 },
  { name: "Pickleball", total: 19.8, corePct: 31, demoPct: 22, convPct: 15, payers: 203, revenue:  61 },
  { name: "Baseball",   total: 16.7, corePct: 40, demoPct: 20, convPct: 13, payers: 174, revenue:  52 },
  { name: "Badminton",  total:  6.4, corePct: 30, demoPct: 40, convPct: 15, payers: 115, revenue:  35 },
];

function MarketScaleSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const totalPayers = sports.reduce((s, x) => s + x.payers, 0);
  const totalRevenue = sports.reduce((s, x) => s + x.revenue, 0);

  return (
    <section id="market" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #E84B1A 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; Market</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="nf-display text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              $300M OBTAINABLE.<br />
              <span style={{ color: "#E84B1A" }}>EVERY COLUMN</span> CITED.
            </h2>
            <p className="text-white/50 text-base max-w-sm leading-relaxed lg:text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Sourced from SFIA 2025 topline, USTA 2025 (n=18,000 panel), U.S. Census 2024, and connected-fitness benchmarks (Arccos Golf, WHOOP). Sensitivity analysis available on request.
            </p>
          </div>
        </div>

        {/* Funnel */}
        <div className="mb-12 space-y-3">
          {funnel.map((f, i) => (
            <div
              key={f.label}
              className="relative flex items-center gap-4 p-4 rounded-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                width: f.width,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-30px)",
                transition: `all 0.7s ease ${0.15 + i * 0.1}s`,
              }}
            >
              <div className="w-16 text-center">
                <div className="nf-display" style={{ fontSize: "1.1rem", color: f.color }}>{f.label}</div>
              </div>
              <div className="flex-1 flex items-baseline gap-4 flex-wrap">
                <span className="nf-display text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                  {f.value}
                </span>
                <span className="text-white/50 text-sm uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {f.tag}
                </span>
              </div>
              <div className="hidden md:block h-12 w-1" style={{ background: f.color, opacity: 0.6 }} />
            </div>
          ))}
        </div>

        {/* Sport breakdown table */}
        <div
          className="rounded-sm overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <div className="p-5 border-b border-white/5 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <div className="nf-section-label mb-1">How We Get to $300M</div>
              <div className="text-white/80 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Total × Core% × Demo% × Conv% → Payers × $300 AOV ($25/mo × 12) → Revenue
              </div>
            </div>
            <div className="flex gap-6 text-xs">
              <div>
                <div className="text-white/40 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Payers</div>
                <div className="nf-display text-[#C8FF00]" style={{ fontSize: "1.2rem" }}>{(totalPayers/1000).toFixed(2)}M</div>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Revenue</div>
                <div className="nf-display text-[#E84B1A]" style={{ fontSize: "1.2rem" }}>${totalRevenue}M</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <thead>
                <tr className="text-left text-white/35 text-[11px] uppercase tracking-widest">
                  <th className="px-5 py-3 font-medium">Sport</th>
                  <th className="px-5 py-3 font-medium text-right">Total (M)</th>
                  <th className="px-5 py-3 font-medium text-right">× Core %</th>
                  <th className="px-5 py-3 font-medium text-right">× Demo %</th>
                  <th className="px-5 py-3 font-medium text-right">× Conv %</th>
                  <th className="px-5 py-3 font-medium text-right">= Payers (K)</th>
                  <th className="px-5 py-3 font-medium text-right">Revenue ($M)</th>
                </tr>
              </thead>
              <tbody>
                {sports.map((s) => (
                  <tr key={s.name} className="border-t border-white/5 hover:bg-white/[0.03] transition">
                    <td className="px-5 py-3 text-white font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>{s.name}</td>
                    <td className="px-5 py-3 text-right text-white/60">{s.total.toFixed(1)}</td>
                    <td className="px-5 py-3 text-right text-white/60">{s.corePct}%</td>
                    <td className="px-5 py-3 text-right text-white/60">{s.demoPct}%</td>
                    <td className="px-5 py-3 text-right text-white/60">{s.convPct}%</td>
                    <td className="px-5 py-3 text-right text-[#C8FF00]">{s.payers}</td>
                    <td className="px-5 py-3 text-right text-[#E84B1A] font-semibold">${s.revenue}</td>
                  </tr>
                ))}
                <tr className="border-t border-white/10 bg-white/[0.02]">
                  <td className="px-5 py-3 text-white/80 font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>TOTAL</td>
                  <td className="px-5 py-3" />
                  <td className="px-5 py-3" />
                  <td className="px-5 py-3" />
                  <td className="px-5 py-3" />
                  <td className="px-5 py-3 text-right text-[#C8FF00] font-bold">{totalPayers}</td>
                  <td className="px-5 py-3 text-right text-[#E84B1A] font-bold">${totalRevenue}M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 border-t border-white/5 grid md:grid-cols-4 gap-4 text-[11px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {[
              { k: "Total Players", v: "SFIA 2025 + USTA 2025 (n=18,000)" },
              { k: "Core %", v: "SFIA def: ≥ 8–13 plays/year" },
              { k: "Demo Match", v: "U.S. Census 2024 × USTA cross-tab" },
              { k: "Conversion", v: "Arccos Golf + WHOOP benchmarks, 12–18%" },
            ].map((c) => (
              <div key={c.k}>
                <div className="text-white/35 uppercase tracking-widest mb-1">{c.k}</div>
                <div className="text-white/55">{c.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Future direction ribbon */}
        <div
          className="mt-10 p-5 rounded-sm flex flex-col md:flex-row items-start md:items-center gap-4"
          style={{
            background: "rgba(200,255,0,0.04)",
            border: "1px solid rgba(200,255,0,0.15)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.55s",
          }}
        >
          <span className="nf-display text-[#C8FF00]" style={{ fontSize: "1.6rem" }}>1M → 4M</span>
          <div className="flex-1 text-white/60 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Future direction: from U.S. to global markets, and from 4 sports to 12. Geographic expansion and added verticals unlock new user segments without re-engineering the core pipeline.
          </div>
          <div className="text-white/40 text-xs uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ARR @ 30% penetration ≈ $90M → Valuation ≈ $0.9B
          </div>
        </div>
      </div>
    </section>
  );
}
window.MarketScaleSection = MarketScaleSection;
})();

// ==== PricingSection ====
(function(){
/* RallyCue PricingSection — 4-tier model per investor deck
   Free Tier · Hardware (near cost) · Pro Subscription · B2B Venues */



const tiers = [
  {
    key: "free",
    label: "Free Tier",
    price: "$0",
    priceUnit: "— forever, no card",
    tagline: "Lower the barrier to first use.",
    features: [
      "Basic session recording + playback",
      "3 AI debriefs / month",
      "Shot count stats + basic dashboard",
      "Works with any friend's hardware",
    ],
    note: "Enough to feel the loop — not enough to replace a coach.",
    cta: "Start Free",
  },
  {
    key: "hardware",
    label: "Hardware Kit",
    price: "~$50",
    priceUnit: "— one-time, near cost",
    tagline: "Designed to convert, not to profit.",
    features: [
      "Voice-coaching headband (speaker + mic)",
      "Stereo courtside camera + tripod",
      "Charging dock & carry pouch",
      "1-month Pro trial included",
      "1-year hardware warranty",
    ],
    note: "Priced near BOM — the subscription is the business model, not the box.",
    cta: "Reserve Kit",
  },
  {
    key: "pro",
    label: "Pro Subscription",
    price: "$25",
    priceUnit: "/ month",
    tagline: "Core monetization engine.",
    featured: true,
    features: [
      "Unlimited AI debriefs + motion comparison",
      "Real-time voice coaching (hardware-bound)",
      "Personal motion history + progress dashboard",
      "Weakness-based drill recommendations",
      "Multi-sport: Tennis · Pickleball · Badminton · Baseball",
    ],
    note: "Less than one coaching hour. Unlimited sessions.",
    cta: "Join Early Access →",
  },
  {
    key: "b2b",
    label: "B2B · Venues",
    price: "Contact",
    priceUnit: "— SaaS + hardware license",
    tagline: "Independent revenue stream.",
    features: [
      "Venues purchase devices + SaaS license",
      "Players at partner venues get Pro free",
      "Branded dashboard for club management",
      "Acquisition channel + differentiated service",
    ],
    note: "Win-win: we reach players, venues level-up their offering.",
    cta: "Partner With Us",
  },
];

function PricingSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" ref={ref} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, #E84B1A 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="nf-section-label mb-4">◆ &nbsp; Business Model</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="nf-display text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              HARDWARE NEAR COST.<br />
              <span style={{ color: "#E84B1A" }}>SUBSCRIPTION</span> PAYS<br />
              THE BILLS.
            </h2>
            <p className="text-white/50 text-base max-w-sm leading-relaxed lg:text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Four tiers, one playbook: lower the entry barrier, bundle a trial with the box, monetize through recurring coaching, and let venues subsidize acquisition.
            </p>
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {tiers.map((tier, i) => (
            <div
              key={tier.key}
              className="rounded-sm p-6 relative flex flex-col"
              style={{
                background: tier.featured ? "rgba(232,75,26,0.08)" : "rgba(255,255,255,0.03)",
                border: tier.featured ? "1px solid rgba(232,75,26,0.5)" : "1px solid rgba(255,255,255,0.08)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${0.1 + i * 0.08}s`,
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: "#E84B1A",
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  Monetization Engine
                </div>
              )}

              <div className="nf-section-label mb-3" style={{ color: tier.featured ? "#E84B1A" : undefined }}>
                {tier.label}
              </div>

              <div className="mb-3">
                <div
                  className="nf-display"
                  style={{ fontSize: "2.6rem", color: tier.featured ? "#E84B1A" : "#fff" }}
                >
                  {tier.price}
                </div>
                <div className="text-white/40 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {tier.priceUnit}
                </div>
              </div>

              <div className="text-white/70 text-sm font-semibold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>
                {tier.tagline}
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {tier.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={tier.featured ? "text-[#C8FF00] text-xs mt-1" : "text-[#E84B1A] text-xs mt-1"}>
                      {tier.featured ? "✓" : "◆"}
                    </span>
                    <span className="text-white/60 text-[13px] leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-white/30 text-[11px] mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {tier.note}
              </div>

              {tier.cta && (
                <button
                  onClick={() => scrollTo("signup")}
                  className={tier.featured ? "nf-btn-primary w-full rounded-sm text-sm" : "nf-btn-outline w-full rounded-sm text-sm"}
                >
                  {tier.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comparison strip */}
        <div
          className="mt-12 grid md:grid-cols-2 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <div className="rounded-sm p-5 border border-white/5 bg-white/[0.02]">
            <div className="text-white/30 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Private Coach
            </div>
            <div className="flex items-baseline gap-2">
              <span className="nf-display text-white/40" style={{ fontSize: "2rem" }}>$3,000</span>
              <span className="text-white/30 text-xs">/ year</span>
            </div>
            <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ~30 hours × $100 — once every 3 weeks. Unscalable. Gone the moment they leave the court.
            </p>
          </div>
          <div className="rounded-sm p-5" style={{ background: "rgba(232,75,26,0.08)", border: "1px solid rgba(232,75,26,0.3)" }}>
            <div className="text-[#E84B1A] text-xs uppercase tracking-widest mb-2 font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              RallyCue Pro
            </div>
            <div className="flex items-baseline gap-2">
              <span className="nf-display" style={{ fontSize: "2rem", color: "#E84B1A" }}>$300</span>
              <span className="text-white/40 text-xs">/ year · 10× cheaper</span>
            </div>
            <p className="text-white/50 text-xs mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Always-on. Remembers every session. Speaks up the instant your form slips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PricingSection = PricingSection;
})();

// ==== SignupSection ====
(function(){
/* NeuroForm SignupSection — Early access registration + survey form
   Collects user info and gauges product acceptance */


const COURT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663143355705/63BBJrFkqAi5FcR9GxFZj4/neuroform-court-Fi9Hc8xcLFbDMbrRDWSrbG.webp";


const initialForm = {
  name: "",
  email: "",
  sport: "",
  frequency: "",
  coachingBudget: "",
  painPoint: "",
  willingness: "",
  referral: "",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgaozrp";

function SignupSection() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.sport) e.sport = "Please select a sport";
    if (!form.willingness) e.willingness = "Please answer this question";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          sport: form.sport,
          frequency: form.frequency,
          painPoint: form.painPoint,
          willingness: form.willingness,
          referral: form.referral,
          _subject: `RallyCue early-access signup — ${form.name}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || `Submission failed (${res.status})`);
      }
      try { sessionStorage.setItem("rc_survey_submitted", "1"); } catch (e) {}
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section id="signup" ref={ref} className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.3)" }}
          >
            <span className="text-2xl" style={{ color: "#C8FF00" }}>✓</span>
          </div>
          <h2
            className="nf-display text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            YOU'RE ON THE LIST.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Thank you, <strong className="text-white">{form.name}</strong>. We'll reach out to{" "}
            <strong className="text-[#E84B1A]">{form.email}</strong> when early access opens.
            Your feedback helps us build the coaching system you actually need.
          </p>
          <div
            className="inline-block px-6 py-3 rounded-sm text-sm"
            style={{
              background: "rgba(232,75,26,0.1)",
              border: "1px solid rgba(232,75,26,0.3)",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            We'll be in touch. Keep playing.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${COURT_BG})` }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <div className="nf-section-label mb-6">◆ &nbsp; Early Access</div>
            <h2
              className="nf-display text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              BE THE FIRST
              <br />
              TO <span style={{ color: "#E84B1A" }}>TRAIN</span>
              <br />
              SMARTER.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              We're building NeuroForm for players like you. Join our early access list and help shape the product — your feedback directly influences what we build.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: "◆", text: "Priority access before public launch" },
                { icon: "◆", text: "Founding member pricing (locked for life)" },
                { icon: "◆", text: "Direct input on product features" },
                { icon: "◆", text: "Beta testing invitations" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-[#E84B1A] text-xs">{item.icon}</span>
                  <span className="text-white/70 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="mt-10 p-4 rounded-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {["R", "C", "E", "D"].map((l) => (
                    <div
                      key={l}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-[#0A0A0A]"
                      style={{ background: "#E84B1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white/50 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  15 athletes + 3 coaches + 3 hardware PMs interviewed
                </span>
              </div>
              <p className="text-white/30 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Tennis · Pickleball · Badminton · Squash
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-sm p-8 space-y-6"
              style={{
                background: "rgba(13,13,13,0.9)",
                border: "1px solid rgba(232,75,26,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div>
                <h3
                  className="nf-display text-white mb-1"
                  style={{ fontSize: "1.8rem" }}
                >
                  GET EARLY ACCESS
                </h3>
                <p className="text-white/40 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Takes 2 minutes. Your answers help us build better.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Alex Chen"
                    className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder:text-white/20 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: errors.name ? "1px solid #E84B1A" : "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                  {errors.name && <p className="text-[#E84B1A] text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder:text-white/20 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: errors.email ? "1px solid #E84B1A" : "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                  {errors.email && <p className="text-[#E84B1A] text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Sport */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Primary Sport *
                </label>
                <select
                  value={form.sport}
                  onChange={(e) => update("sport", e.target.value)}
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: errors.sport ? "1px solid #E84B1A" : "1px solid rgba(255,255,255,0.1)",
                    color: form.sport ? "#fff" : "rgba(255,255,255,0.2)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <option value="" disabled style={{ background: "#1a1a1a" }}>Select your sport</option>
                  <option value="tennis" style={{ background: "#1a1a1a", color: "#fff" }}>Tennis</option>
                  <option value="pickleball" style={{ background: "#1a1a1a", color: "#fff" }}>Pickleball</option>
                  <option value="badminton" style={{ background: "#1a1a1a", color: "#fff" }}>Badminton</option>
                  <option value="squash" style={{ background: "#1a1a1a", color: "#fff" }}>Squash</option>
                  <option value="other" style={{ background: "#1a1a1a", color: "#fff" }}>Other racket sport</option>
                </select>
                {errors.sport && <p className="text-[#E84B1A] text-xs mt-1">{errors.sport}</p>}
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  How often do you play?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["1x/week", "2–3x/week", "4–5x/week", "Daily"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("frequency", opt)}
                      className="px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wide transition-all"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        background: form.frequency === opt ? "#E84B1A" : "rgba(255,255,255,0.05)",
                        border: form.frequency === opt ? "1px solid #E84B1A" : "1px solid rgba(255,255,255,0.1)",
                        color: form.frequency === opt ? "#fff" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Biggest pain point */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Biggest training challenge?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "No real-time feedback",
                    "Can't afford a coach",
                    "Hard to track progress",
                    "Muscle memory issues",
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("painPoint", opt)}
                      className="px-3 py-2.5 rounded-sm text-xs text-left transition-all"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: form.painPoint === opt ? "rgba(232,75,26,0.15)" : "rgba(255,255,255,0.03)",
                        border: form.painPoint === opt ? "1px solid rgba(232,75,26,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        color: form.painPoint === opt ? "#fff" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {form.painPoint === opt ? "◆ " : "○ "}{opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Willingness to pay */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Would you pay $25/month for always-on AI coaching (hardware ~$50)? *
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { value: "definitely", label: "Definitely — this solves a real problem" },
                    { value: "probably", label: "Probably — depends on the results" },
                    { value: "maybe", label: "Maybe — need to see it in action first" },
                    { value: "unlikely", label: "Unlikely — even at this price" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("willingness", opt.value)}
                      className="px-4 py-3 rounded-sm text-sm text-left transition-all flex items-center gap-3"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: form.willingness === opt.value ? "rgba(232,75,26,0.1)" : "rgba(255,255,255,0.03)",
                        border: form.willingness === opt.value ? "1px solid rgba(232,75,26,0.4)" : "1px solid rgba(255,255,255,0.08)",
                        color: form.willingness === opt.value ? "#fff" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      <span
                        className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0"
                        style={{
                          borderColor: form.willingness === opt.value ? "#E84B1A" : "rgba(255,255,255,0.2)",
                          background: form.willingness === opt.value ? "#E84B1A" : "transparent",
                        }}
                      >
                        {form.willingness === opt.value && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.willingness && <p className="text-[#E84B1A] text-xs mt-1">{errors.willingness}</p>}
              </div>

              {/* How did you hear */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  value={form.referral}
                  onChange={(e) => update("referral", e.target.value)}
                  placeholder="Friend, Reddit, Instagram, etc."
                  className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder:text-white/20 outline-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
              </div>

              {/* Submit */}
              {submitError && (
                <div
                  className="px-4 py-3 rounded-sm text-sm"
                  style={{
                    background: "rgba(232,75,26,0.1)",
                    border: "1px solid rgba(232,75,26,0.4)",
                    color: "#E84B1A",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="nf-btn-primary w-full rounded-sm text-base py-4"
                style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? "wait" : "pointer" }}
              >
                {submitting ? "Submitting…" : "Join Early Access →"}
              </button>

              <p className="text-white/20 text-xs text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                No spam. No commitment. Just early access to something that might change how you train.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SignupSection = SignupSection;
})();

// ==== Navbar ====
(function(){
/* RallyCue Navbar — Athletic Tech Noir style
   Fixed top nav with logo, links, and CTA button
   Dark background with orange accent */


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,75,26,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group"
        >
          <img
            src="src/assets/logo-mark.png"
            alt="RallyCue"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <img
            src="src/assets/logo-wordmark.png"
            alt="RallyCue"
            className="h-5 w-auto object-contain"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "Product", id: "product" },
            { label: "Tech", id: "tech" },
            { label: "Storyboard", id: "storyboard" },
            { label: "Landscape", id: "competitors" },
            { label: "Market", id: "market" },
            { label: "Pricing", id: "pricing" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("signup")}
            className="nf-btn-primary rounded-sm text-sm px-5 py-2.5"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Product", id: "product" },
            { label: "Tech", id: "tech" },
            { label: "Storyboard", id: "storyboard" },
            { label: "Landscape", id: "competitors" },
            { label: "Market", id: "market" },
            { label: "Pricing", id: "pricing" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-white/70 hover:text-white text-base font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("signup")}
            className="nf-btn-primary rounded-sm text-sm w-full mt-2"
          >
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
}
window.Navbar = Navbar;
})();

// ==== Footer ====
(function(){
/* RallyCue Footer — Minimal dark footer */

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="src/assets/logo-mark.png"
                alt="RallyCue"
                className="h-9 w-auto object-contain"
              />
              <img
                src="src/assets/logo-wordmark.png"
                alt="RallyCue"
                className="h-4 w-auto object-contain"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </div>
            <p className="text-white/30 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              In-Motion Active Coaching for competitive athletes.
              Real-time AI. Real results.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-white/20 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Navigate
            </div>
            <div className="space-y-2">
              {[
                { label: "Product", id: "product" },
                { label: "Tech", id: "tech" },
                { label: "Storyboard", id: "storyboard" },
                { label: "Landscape", id: "competitors" },
                { label: "Market", id: "market" },
                { label: "Pricing", id: "pricing" },
                { label: "Early Access", id: "signup" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-white/40 hover:text-white/70 text-sm transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div>
            <div className="text-white/20 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Sports Covered
            </div>
            <div className="space-y-2">
              {["Tennis", "Pickleball", "Badminton", "Baseball", "More coming soon..."].map((sport) => (
                <div key={sport} className="flex items-center gap-2">
                  <span className="text-[#E84B1A] text-xs">◆</span>
                  <span className="text-white/40 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{sport}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            © 2026 RallyCue. Concept product — for research and validation purposes.
          </p>
          <p className="text-white/15 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Team 55 · Maker Day 2 · 2026 · Li · Wang · Xie · Xu · Tsao
          </p>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
})();

// ==== SurveyInvitePopup ====
(function(){
/* RallyCue SurveyInvitePopup — Non-intrusive survey invitation
   Triggers after 30s dwell time OR 60% scroll depth, whichever first.
   Session-persistent: only shows once per session. */

const SEEN_KEY = "rc_survey_invite_seen";
const SUBMITTED_KEY = "rc_survey_submitted"; // set by SignupSection success

function SurveyInvitePopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Skip if already seen or already submitted
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      if (sessionStorage.getItem(SUBMITTED_KEY)) return;
    } catch (e) {}

    let triggered = false;
    const fire = () => {
      if (triggered) return;
      triggered = true;
      setShow(true);
      try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) {}
      cleanup();
    };

    // Time trigger: 30s
    const timer = setTimeout(fire, 30_000);

    // Scroll trigger: 60% depth
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = window.scrollY / scrollable;
      if (pct >= 0.6) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Also fire if user is already scrolled past 60% on mount
    onScroll();

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => setShow(false), 250);
  };

  const accept = () => {
    close();
    setTimeout(() => {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    }, 260);
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 100,
          opacity: closing ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Popup card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="survey-invite-title"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          left: "24px",
          maxWidth: "420px",
          marginLeft: "auto",
          zIndex: 101,
          background: "#0D0D0D",
          border: "1px solid rgba(232,75,26,0.4)",
          borderRadius: "4px",
          padding: "24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,75,26,0.1)",
          opacity: closing ? 0 : 1,
          transform: closing ? "translateY(20px) scale(0.98)" : "translateY(0) scale(1)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: closing ? "none" : "rc-popup-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Accent scan line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(to right, transparent, #E84B1A, transparent)",
          }}
        />

        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1,
            transition: "color 0.15s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
        >
          ✕
        </button>

        {/* Label */}
        <div
          className="nf-section-label"
          style={{ marginBottom: "12px", fontSize: "0.7rem" }}
        >
          ◆ &nbsp; Help Shape RallyCue
        </div>

        {/* Headline */}
        <h3
          id="survey-invite-title"
          className="nf-display text-white"
          style={{
            fontSize: "1.75rem",
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          GOT 2 MINUTES<br />TO SHAPE THE <span style={{ color: "#E84B1A" }}>FUTURE</span>?
        </h3>

        {/* Body */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.875rem",
            lineHeight: 1.55,
            marginBottom: "20px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          We're interviewing players right now. Your answers directly influence what we build — and you get early access + founding-member pricing.
        </p>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={accept}
            className="nf-btn-primary rounded-sm"
            style={{ fontSize: "0.85rem", padding: "0.7rem 1.3rem", flex: "1 1 auto" }}
          >
            Sure, Let's Go →
          </button>
          <button
            onClick={close}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.8rem",
              cursor: "pointer",
              padding: "0.7rem 0.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "color 0.15s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            Maybe later
          </button>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes rc-popup-in {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
window.SurveyInvitePopup = SurveyInvitePopup;
})();

