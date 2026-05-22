import "./Icon.css"
import { ReactComponent as EmailIcon } from '@/assets/icons/email.svg?react';
import { ReactComponent as GitHubIcon } from '@/assets/icons/github.svg?react';
import { ReactComponent as LinkedInIcon } from '@/assets/icons/linkedin.svg?react';
import { ReactComponent as CurriculumIcon } from '@/assets/icons/curriculum.svg?react';
import{ ReactComponent as DarkModeIcon } from '@/assets/icons/dark-mode.svg?react';
import{ ReactComponent as LightModeIcon } from '@/assets/icons/light-mode.svg?react';

/**
 * Componente de icono dinámico.
 * Carga y renderiza un elemento SVG basado en el nombre proporcionado.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre del icono a renderizar (email, github, linkedin, curriculum, darkMode, lightMode).
 * @param {string} [props.className=''] - Clase CSS opcional para aplicar al icono.
 * @param {number} [props.size=20] - Tamaño del icono en píxeles.
 * @returns {JSX.Element|null} El componente SVG del icono o null si no se encuentra.
 */
function Icon ( {name, className= '', size=20} ) {
    const icons = {
    email: EmailIcon,
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    curriculum: CurriculumIcon,
    darkMode: DarkModeIcon,
    lightMode: LightModeIcon,
    };
    const IconComponent = icons[name];
    if (!IconComponent) {
        return null;
    }
    return (
        <IconComponent
      className={`icon ${className}`}
      width={size}
      height={size}
    />
    );
}
export default Icon;