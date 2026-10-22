import React from 'react';
import { X, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  lang?: 'EN' | 'AR';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  lang = 'EN',
}) => {
  if (!project) return null;

  const t = PORTFOLIO_DATA.ui[lang];
  const isAr = lang === 'AR';

  const title = isAr && project.titleAr ? project.titleAr : project.title;
  const subtitle = isAr && project.subtitleAr ? project.subtitleAr : project.subtitle;
  const fullDescription =
    isAr && project.fullDescriptionAr ? project.fullDescriptionAr : project.fullDescription;
  const deliverables =
    isAr && project.deliverablesAr ? project.deliverablesAr : project.deliverables;
  const metrics = isAr && project.metricsAr ? project.metricsAr : project.metrics;
  const badge = isAr && project.badgeAr ? project.badgeAr : project.badge;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        dir={isAr ? 'rtl' : 'ltr'}
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl border border-black/[0.08] p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>{t.caseStudy}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail & Hero Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <ProjectThumbnail type={project.type} className="w-24 h-24 sm:w-28 sm:h-28" />

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {title}
            </h2>
            <p className="text-sm font-medium text-neutral-600">
              {subtitle}
            </p>
            {badge && (
              <span className="inline-block mt-1 text-[11px] font-medium text-[#ff3b94] bg-[#ff3b94]/10 rounded-full px-2.5 py-0.5">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* Full Overview */}
        <div className="space-y-3 pt-2 border-t border-neutral-100">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {t.overviewAndImpact}
          </h4>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            {fullDescription}
          </p>
        </div>

        {/* Metrics highlight if any */}
        {metrics && (
          <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/60 flex items-center justify-between">
            <div className="text-xs font-mono text-neutral-500">{t.keyMetric}</div>
            <div className="text-sm font-bold text-neutral-900 font-mono-nums">
              {metrics}
            </div>
          </div>
        )}

        {/* Deliverables */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {t.scopeAndDeliverables}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-50 rounded-xl px-3 py-2 border border-neutral-100"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3b94] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <button
            onClick={onNextProject}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-2 px-3 rounded-xl hover:bg-neutral-100"
          >
            {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : null}
            <span>{t.nextProject}</span>
            {!isAr ? <ArrowRight className="w-3.5 h-3.5" /> : null}
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.email}?subject=Inquiry regarding Project`}
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors py-2 px-4 rounded-xl"
          >
            <span>{t.inquireWork}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
