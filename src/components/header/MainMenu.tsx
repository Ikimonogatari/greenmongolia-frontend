"use client";

import Link from 'next/link';
import {useTranslations} from 'next-intl';

interface DataType {
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  navbarPlacement?: string;
}

const MainMenu = ({toggleSubMenu, navbarPlacement}: DataType) => {
  const t = useTranslations('Header');

  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement} navbar-right`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('about')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/about-us">{t('aboutGmh')}</Link>
            </li>
            <li>
              <Link href="/board-of-advisors">{t('board')}</Link>
            </li>
            <li>
              <Link href="/governance">{t('governance')}</Link>
            </li>
            <li>
              <Link href="/careers">{t('careers')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('governanceMenu')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/governance/gmh-board">{t('gmhBoard')}</Link>
            </li>
            <li>
              <Link href="/governance/committees-panels-groups">{t('committees')}</Link>
            </li>
            <li>
              <Link href="/governance/policies-strategies">{t('policies')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('partners')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/partners/local-partners">{t('localPartners')}</Link>
            </li>
            <li>
              <Link href="/partners/un-partners">{t('unPartners')}</Link>
            </li>
            <li>
              <Link href="/partners/private-partners">{t('privatePartners')}</Link>
            </li>
            <li>
              <Link href="/partners/donate">{t('donate')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('projects')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/projects/national-programs-projects">{t('nationalPrograms')}</Link>
            </li>
            <li>
              <Link href="/projects/un-programs-projects">{t('unPrograms')}</Link>
            </li>
            <li>
              <Link href="/projects/gmh-programs-projects">{t('gmhPrograms')}</Link>
            </li>
            <li>
              <Link href="/projects/gmh-initiatives">{t('initiatives')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('news')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/news/news-media">{t('newsMedia')}</Link>
            </li>
            <li>
              <Link href="/news/events">{t('events')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('resources')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/data-resources/gmh-data-resources">{t('dataResources')}</Link>
            </li>
            <li>
              <Link href="/data-resources/gmh-tools-methods">{t('toolsMethods')}</Link>
            </li>
            <li>
              <Link href="/data-resources/gmh-publications">{t('publications')}</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>
            {t('membership')}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/membership/membership-categories">{t('categories')}</Link>
            </li>
            <li>
              <Link href="/membership/applications">{t('applications')}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;