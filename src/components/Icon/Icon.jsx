import "./icon.css"
import { ReactComponent as EmailIcon } from '@/assets/icons/email.svg?react';
import { ReactComponent as GitHubIcon } from '@/assets/icons/github.svg?react';
import { ReactComponent as LinkedInIcon } from '@/assets/icons/linkedin.svg?react';
import { ReactComponent as CurriculumIcon } from '@/assets/icons/curriculum.svg?react';
import{ ReactComponent as DarkModeIcon } from '@/assets/icons/dark-mode.svg?react';
import{ ReactComponent as LightModeIcon } from '@/assets/icons/light-mode.svg?react';

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