import { ChevronLeft, ChevronRight, Code2, ExternalLink, ImageIcon, Info, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function ProjectCard({
  title,
  category,
  description,
  details,
  detailStack,
  codeLabel,
  galleryImages,
  image,
  imagePosition,
  accent,
  status,
  icon: Icon,
  stack,
  github,
  preview,
}) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const hasGithub = github && github !== "#";
  const hasPreview = preview && preview !== "#";
  const hasGallery = Array.isArray(galleryImages) && galleryImages.length > 0;
  const detailParagraphs = Array.isArray(details) ? details : [details];
  const isAnyModalOpen = isInfoModalOpen || isGalleryOpen;
  const currentGalleryImage = hasGallery ? galleryImages[activeGalleryIndex] : null;
  const isCardClickable = hasPreview;
  const codeButtonLabel = codeLabel ?? "Codigo";

  const openPreview = () => {
    if (!hasPreview) return;
    window.open(preview, "_blank", "noopener,noreferrer");
  };

  const openGallery = () => {
    if (!hasGallery) return;
    setActiveGalleryIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);
  const showPreviousImage = () => {
    if (!hasGallery) return;
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };
  const showNextImage = () => {
    if (!hasGallery) return;
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!isAnyModalOpen) return undefined;

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        if (isGalleryOpen) {
          closeGallery();
          return;
        }

        setIsInfoModalOpen(false);
      }

      if (!isGalleryOpen) return;

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isAnyModalOpen, isGalleryOpen, galleryImages]);

  const infoModal = isInfoModalOpen
    ? createPortal(
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setIsInfoModalOpen(false)}
        >
          <div
            className={`project-modal accent-${accent}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setIsInfoModalOpen(false)}
              aria-label={`Cerrar informacion de ${title}`}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <span className="project-modal-category">{category}</span>
            <h4 id={`project-modal-title-${title}`}>{title}</h4>
            {detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {detailStack?.length ? (
              <div className="project-modal-stack" aria-label={`Tecnologias y plataformas usadas en ${title}`}>
                {detailStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>,
        document.body
      )
    : null;

  const galleryModal = isGalleryOpen && currentGalleryImage
    ? createPortal(
        <div
          className="project-modal-backdrop project-gallery-backdrop"
          role="presentation"
          onClick={closeGallery}
        >
          <div
            className={`project-gallery accent-${accent}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-gallery-title-${title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeGallery}
              aria-label={`Cerrar galeria de ${title}`}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="project-gallery-header">
              <div>
                <span className="project-modal-category">Galeria</span>
                <h4 id={`project-gallery-title-${title}`}>{title}</h4>
              </div>
              <div className="project-gallery-meta">
                <ImageIcon size={16} aria-hidden="true" />
                <span>
                  {activeGalleryIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            <div className="project-gallery-stage">
              <button
                type="button"
                className="project-gallery-nav project-gallery-nav-left"
                onClick={showPreviousImage}
                aria-label={`Ver captura anterior de ${title}`}
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>

              <div className="project-gallery-frame">
                <img
                  className="project-gallery-image"
                  src={currentGalleryImage}
                  alt={`Captura ${activeGalleryIndex + 1} del proyecto ${title}`}
                />
              </div>

              <button
                type="button"
                className="project-gallery-nav project-gallery-nav-right"
                onClick={showNextImage}
                aria-label={`Ver captura siguiente de ${title}`}
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="project-gallery-thumbs" aria-label={`Miniaturas de ${title}`}>
              {galleryImages.map((galleryImage, index) => (
                <button
                  key={galleryImage}
                  type="button"
                  className={`project-gallery-thumb${index === activeGalleryIndex ? " is-active" : ""}`}
                  onClick={() => setActiveGalleryIndex(index)}
                  aria-label={`Ver captura ${index + 1} de ${title}`}
                >
                  <img src={galleryImage} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <article
        className={`project-card accent-${accent}${isCardClickable ? " is-clickable" : ""}`}
        onClick={isCardClickable ? openPreview : undefined}
        onKeyDown={
          isCardClickable
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPreview();
                }
              }
            : undefined
        }
        role={isCardClickable ? "link" : undefined}
        tabIndex={isCardClickable ? 0 : undefined}
        aria-label={isCardClickable ? `Abrir demo de ${title}` : undefined}
      >
        <div className="project-media">
          <img
            src={image}
            alt={`Vista conceptual del proyecto ${title}`}
            style={{ objectPosition: imagePosition ?? "center" }}
          />
          <div className="project-overlay"></div>
        </div>

        <div className="project-content">
          <div className="project-copy">
            <div className="project-status project-status-inline">
              {Icon ? <Icon size={15} aria-hidden="true" /> : null}
              <span>{status}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className="project-stack" aria-label={`Tecnologias de ${title}`}>
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-actions">
            {hasGallery ? (
              <button
                type="button"
                className="project-button project-button-primary"
                onClick={(event) => {
                  event.stopPropagation();
                  openGallery();
                }}
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>Demo</span>
              </button>
            ) : (
              <a
                className={`project-button project-button-primary${hasPreview ? "" : " is-disabled"}`}
                href={hasPreview ? preview : undefined}
                target={hasPreview ? "_blank" : undefined}
                rel={hasPreview ? "noreferrer" : undefined}
                aria-disabled={!hasPreview}
                onClick={(event) => event.stopPropagation()}
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>Demo</span>
              </a>
            )}

            <a
              className={`project-button project-button-secondary${hasGithub ? "" : " is-disabled"}`}
              href={hasGithub ? github : undefined}
              target={hasGithub ? "_blank" : undefined}
              rel={hasGithub ? "noreferrer" : undefined}
              aria-disabled={!hasGithub}
              onClick={(event) => event.stopPropagation()}
            >
              <Code2 size={15} aria-hidden="true" />
              <span>{codeButtonLabel}</span>
            </a>

            <button
              type="button"
              className="project-button project-button-ghost"
              onClick={(event) => {
                event.stopPropagation();
                setIsInfoModalOpen(true);
              }}
            >
              <Info size={15} aria-hidden="true" />
              <span>Mas info</span>
            </button>
          </div>
        </div>
      </article>

      {infoModal}
      {galleryModal}
    </>
  );
}

export default ProjectCard;
