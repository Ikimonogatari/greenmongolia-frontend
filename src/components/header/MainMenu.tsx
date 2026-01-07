import Link from 'next/link';

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
}

const MainMenu = ({ toggleSubMenu, navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} navbar-right`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-gmh">About GMH</Link></li>
                        <li><Link href="/board-of-advisors">Board of Advisors</Link></li>
                        <li><Link href="/governance">Governance</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Governance</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/governance/gmh-board">GMH Board</Link></li>
                        <li><Link href="/governance/committees-panels-groups">Committees & Panels</Link></li>
                        <li><Link href="/governance/policies-strategies">Policies</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Partners</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/partners/local-partners">Local Partners</Link></li>
                        <li><Link href="/partners/un-partners">UN Partners</Link></li>
                        <li><Link href="/partners/private-partners">Private Partners</Link></li>
                        <li><Link href="/partners/donate">Donate</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/projects/national-programs-projects">National Programs</Link></li>
                        <li><Link href="/projects/un-programs-projects">UN Programs</Link></li>
                        <li><Link href="/projects/gmh-programs-projects">GMH Programs</Link></li>
                        <li><Link href="/projects/gmh-initiatives">Initiatives</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>News</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/news/news-media">News Media</Link></li>
                        <li><Link href="/news/events">Events</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Resources</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/data-resources/gmh-data-resources">Data & Resources</Link></li>
                        <li><Link href="/data-resources/gmh-tools-methods">Tools & Methods</Link></li>
                        <li><Link href="/data-resources/gmh-publications">Publications</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Membership</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/membership/membership-categories">Categories</Link></li>
                        <li><Link href="/membership/applications">Applications</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;