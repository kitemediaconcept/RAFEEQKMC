import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { ProjectThumbnail } from './components/ProjectThumbnail';
import { BrandLogos } from './components/BrandLogos';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Check, Copy, ArrowUpRight, ArrowUpLeft } from 'lucide-react';

export default function App() {
  // Navigation active states
  const [infoOpen, setInfoOpen] = useState(true);
  const [workOpen, setWorkOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  // Language state: 'EN' or 'AR' (Full Arabic translation)
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  // Real-time ticking digital clock
  const [timeString, setTimeString] = useState('');

  // Selected project for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Contact modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Email copy feedback
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Image style toggle: Monochrome (matching reference) or Full Color
  const [isMonochrome, setIsMonochrome] = useState(true);

  const t = PORTFOLIO_DATA.ui[lang];
  const isAr = lang === 'AR';

  // Clock tick effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.projects.length;
    setSelectedProject(PORTFOLIO_DATA.projects[nextIndex]);
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#ebe9e5] text-neutral-900 py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center justify-start antialiased selection:bg-[#ff3b94] selection:text-white ${
        isAr ? 'lang-ar' : ''
      }`}
    >
      {/* Centered Portfolio Canvas matching exact design proportion */}
      <main className="w-full max-w-[460px] sm:max-w-[480px] space-y-3.5 sm:space-y-4">
        {/* =========================================================================
            TOP NAVIGATION BAR
            Left: Division / Kite glyph + RAFEEQ KMC with Lens-Drift Effect
            Right: Info ⊖, Work ⊕, Contact ⊕ (translated)
           ========================================================================= */}
        <header className="bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-xs border border-black/[0.04] flex items-center justify-between transition-all">
          {/* Brand Mark with Lens-Drift Focus Effect: RAFEEQ KMC */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group py-0.5 select-none"
            title="Rafeeq KMC · Kite Media Concept"
            onClick={() => {
              setInfoOpen(true);
              setWorkOpen(true);
              setContactOpen(true);
            }}
          >
            {/* Minimalist Division Glyph */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-900 group-hover:scale-110 transition-transform shrink-0"
            >
              <circle cx="12" cy="5" r="2.2" fill="currentColor" />
              <rect x="6" y="11" width="12" height="2.4" rx="1.2" fill="currentColor" />
              <circle cx="12" cy="19" r="2.2" fill="currentColor" />
            </svg>

            {/* Lens-Drift Animated Name: RAFEEQ KMC */}
            <div
              className="fx-focus text-[11px] sm:text-[12.5px] font-semibold text-neutral-900 tracking-[0.08em] whitespace-nowrap"
              role="img"
              aria-label="RAFEEQ KMC"
            >
              {'RAFEEQ KMC'.split('').map((char, index) =>
                char === ' ' ? (
                  <span key={index} className="inline-block w-1.5 sm:w-2" />
                ) : (
                  <b
                    key={index}
                    aria-hidden="true"
                    style={{ '--i': index } as React.CSSProperties}
                  >
                    {char}
                  </b>
                )
              )}
            </div>
          </div>

          {/* Right Navigation Pills (Localized) */}
          <nav className="flex items-center gap-1.5 sm:gap-2">
            {/* Info Pill */}
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                infoOpen
                  ? 'bg-[#ff3b94] text-white shadow-xs hover:bg-[#eb2b85]'
                  : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300/80'
              }`}
            >
              <span>{t.info}</span>
              <span className="flex items-center justify-center">
                {infoOpen ? (
                  // Minus circle icon ⊖
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                ) : (
                  // Plus circle icon ⊕
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                )}
              </span>
            </button>

            {/* Work Pill */}
            <button
              onClick={() => {
                setWorkOpen(!workOpen);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                workOpen
                  ? 'bg-neutral-900 text-white shadow-xs hover:bg-neutral-800'
                  : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300/80'
              }`}
            >
              <span>{t.work}</span>
              <span className="flex items-center justify-center">
                {workOpen ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                )}
              </span>
            </button>

            {/* Contact Pill */}
            <button
              onClick={() => {
                setContactOpen(!contactOpen);
                if (!contactOpen) {
                  setIsContactModalOpen(true);
                }
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                contactOpen
                  ? 'bg-white text-neutral-800 border border-neutral-300/80 hover:bg-neutral-100'
                  : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300/80'
              }`}
            >
              <span>{t.contact}</span>
              <span className="flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </span>
            </button>
          </nav>
        </header>

        {/* =========================================================================
            MAIN INFO CARD
            - Photo of Rafeeq KMC (with B&W / Color toggle)
            - Language switch EN / AR
            - Live digital clock
            - Bio description (in English or Arabic)
           ========================================================================= */}
        {infoOpen && (
          <section className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 shadow-xs border border-black/[0.04] space-y-6 transition-all duration-200">
            {/* Top row: Photo on left, Language + Clock on right */}
            <div className="flex items-start justify-between gap-4">
              {/* Rafeeq KMC Profile Picture */}
              <div className="relative group">
                <div className="w-[115px] h-[115px] sm:w-[130px] sm:h-[130px] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60 relative">
                  <img
                    src="/assets/aistudio/image_a565adae.png"
                    alt="Rafeeq KMC"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('public')) {
                        target.src = '/public/assets/aistudio/image_a565adae.png';
                      }
                    }}
                    className={`w-full h-full object-cover object-top transition-all duration-300 ${
                      isMonochrome ? 'grayscale contrast-110' : 'grayscale-0'
                    }`}
                  />

                  {/* Toggle filter badge overlay */}
                  <button
                    onClick={() => setIsMonochrome(!isMonochrome)}
                    title={isMonochrome ? 'Switch to Color photo' : 'Switch to Black & White photo'}
                    className={`absolute bottom-1.5 ${
                      isAr ? 'left-1.5' : 'right-1.5'
                    } bg-black/70 hover:bg-black text-white text-[9px] font-mono px-1.5 py-0.5 rounded-md backdrop-blur-xs transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer`}
                  >
                    {isMonochrome ? t.photoFilterColor : t.photoFilterBW}
                  </button>
                </div>
              </div>

              {/* Language Switcher and Live Clock */}
              <div className="flex flex-col items-end gap-2 text-neutral-800">
                {/* Language Switch: EN / AR */}
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-1 py-0.5 transition-colors cursor-pointer ${
                      lang === 'EN'
                        ? 'text-neutral-900 border-b-2 border-neutral-900 font-bold'
                        : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    EN
                  </button>
                  <span className="text-neutral-300">/</span>
                  <button
                    onClick={() => setLang('AR')}
                    className={`px-1 py-0.5 transition-colors cursor-pointer ${
                      lang === 'AR'
                        ? 'text-neutral-900 border-b-2 border-neutral-900 font-bold'
                        : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    AR
                  </button>
                </div>

                {/* Live Real-Time Digital Clock */}
                <div
                  className="font-mono-nums text-xs sm:text-sm font-normal text-neutral-800 tracking-tight"
                  title={t.clockTitle}
                >
                  {timeString || '13:55:19'}
                </div>
              </div>
            </div>

            {/* Bio Body Paragraph */}
            <div className="space-y-3">
              <h1 className="sr-only">
                {isAr ? 'رفيق كي إم سي - مدير إبداعي' : 'Rafeeq KMC - Creative Director'}
              </h1>
              <p
                className={`text-[14.5px] sm:text-[15.5px] leading-relaxed text-neutral-800 font-normal tracking-[-0.01em] ${
                  isAr ? 'text-justify' : ''
                }`}
              >
                {PORTFOLIO_DATA.bios[lang].summary}
              </p>
            </div>
          </section>
        )}

        {/* =========================================================================
            CLIENT LOGOS STRIP
            Kite Media Concept, Corekraft, Sign Mate (Supports Arabic tooltips)
           ========================================================================= */}
        <BrandLogos
          lang={lang}
          onBrandClick={(brandId) => {
            const match = PORTFOLIO_DATA.projects.find(
              (p) => p.id === brandId || p.type === brandId || (brandId === 'kite' && p.type === 'kmc')
            );
            if (match) {
              setSelectedProject(match);
            }
          }}
        />

        {/* =========================================================================
            WORK / PROJECTS SECTION
            Kite Media Concept, Corekraft, Sign Mate (Full Arabic translation)
           ========================================================================= */}
        {workOpen && (
          <div className="space-y-3.5 sm:space-y-4">
            {PORTFOLIO_DATA.projects.map((project) => {
              const projectTitle = isAr && project.titleAr ? project.titleAr : project.title;
              const projectSubtitle = isAr && project.subtitleAr ? project.subtitleAr : project.subtitle;
              const projectDesc = isAr && project.descriptionAr ? project.descriptionAr : project.description;

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-[26px] sm:rounded-[30px] p-4 sm:p-5 shadow-xs border border-black/[0.04] hover:border-black/[0.1] hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-4 sm:gap-5 group"
                >
                  {/* Visual Thumbnail */}
                  <ProjectThumbnail type={project.type} />

                  {/* Project Details */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight group-hover:text-[#ff3b94] transition-colors">
                          {projectTitle}
                        </h3>
                        {projectSubtitle && (
                          <div className="text-[11px] font-mono text-neutral-400">
                            {projectSubtitle}
                          </div>
                        )}
                      </div>
                      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        {isAr ? (
                          <ArrowUpLeft className="w-3 h-3 text-neutral-700" />
                        ) : (
                          <ArrowUpRight className="w-3 h-3 text-neutral-700" />
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-500 line-clamp-3">
                      {projectDesc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            FOOTER / CONTACT CARD
            @rafeeqkmc
            kitemediaconcept@gmail.com
           ========================================================================= */}
        {contactOpen && (
          <footer
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 shadow-xs border border-black/[0.04] hover:border-black/[0.1] transition-all duration-150 cursor-pointer group space-y-1 relative"
          >
            <div className="text-sm font-medium text-neutral-400 group-hover:text-neutral-600 transition-colors">
              {PORTFOLIO_DATA.handle}
            </div>

            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                onClick={(e) => e.stopPropagation()}
                className="text-sm sm:text-[15px] font-normal text-neutral-500 hover:text-neutral-900 transition-colors font-mono-nums"
              >
                {PORTFOLIO_DATA.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  copiedEmail
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
                title={t.copy}
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Interactive footer prompt */}
            <div className="pt-2 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
              <span>{t.companyTag}</span>
              <span className="text-[#ff3b94] group-hover:underline flex items-center gap-1 font-semibold">
                {t.sendInquiry}
              </span>
            </div>
          </footer>
        )}
      </main>

      {/* Interactive Case Study Detail Modal (Localized) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        lang={lang}
      />

      {/* Interactive Contact / Inquiry Drawer Modal (Localized) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
