import "./icon.css"
import { ReactComponent as EmailIcon } from '@/assets/icons/email.svg?react';

function Icon ( {name, className= '', size=20, } ) {
    const icons = {
    email: EmailIcon,
    //github: GitHubIcon,
    //linkedin: LinkedInIcon,
    //document: DocumentIcon,
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