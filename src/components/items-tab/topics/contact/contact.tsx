import { GitHubIcon, LinkedInIcon } from '../../../shared/icons';
import './contact.css';
import { FolderCodeIcon, Mail } from 'lucide-react';
export const Contact = () => {
    return (
        <div className="contact-card">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out through any of the following channels:</p>
            <ul className="contact-list">
                <li>
                    <a href="https://nfmdev.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                        <FolderCodeIcon className="contact-icon" />
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="mailto:nicofioritom@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="contact-icon" />
                        nicofioritom@gmail.com
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nico-fiorito" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        linkedin.com/in/nico-fiorito
                    </a>
                </li>
                <li>
                    <a href="https://github.com/NFMdev" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                        github.com/NFMdev
                    </a>
                </li>
            </ul>
        </div>
    );
}