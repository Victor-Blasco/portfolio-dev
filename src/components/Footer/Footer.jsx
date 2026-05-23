import './Footer.css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import Icon from '@/components/Icon/Icon';

function Footer() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer glass-panel" ref={sectionRef}>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Victor Blasco</h3>
          <p>{t("footer.role")}</p>
          <div className="footer-socials">
            <a href="https://github.com/Victor-Blasco" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href="https://linkedin.com/in/victor-blasco-garcia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="mailto:victorblascogar@gmail.com" aria-label="Email">
              <Icon name="email" />
            </a>
          </div>
        </div>

        <div className='footer-links'>
          <a href="#root">{t("footer.home")}</a>
          <a href="#about">{t("navbar.about")}</a>
          <a href="#projects">{t("navbar.projects")}</a>
          <a href="#experience">{t("navbar.experience")}</a>
          <a href="#contact">{t("navbar.contact")}</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t("footer.copyright", { year: currentYear })} • {t("footer.design_by")}</p>
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label={t("footer.back_to_top")}>
          ↑ {t("footer.back_to_top")}
        </button>
      </div>
    </footer>
  );
}

export default Footer;