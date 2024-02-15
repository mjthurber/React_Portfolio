import gitHubCat from '../assets/GithubCat.png';
import linkedIn from '../assets/linkedinIcon.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div>
                <a href="https://github.com/mjthurber" target="_blank" rel="noreferrer"><img className="footer-apps" src={gitHubCat} alt="github logo" /></a><a href="https://www.linkedin.com/in/matthew-thurber-b02002107/" target="_blank" rel="noreferrer"><img className="footer-apps" src={linkedIn} alt="linkedIn logo" /></a>

            </div>
        </footer>
    )
}
export default Footer;
