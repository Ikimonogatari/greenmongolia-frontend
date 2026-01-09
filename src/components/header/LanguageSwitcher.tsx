"use client";

import {useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import {useTransition} from 'react';
import {setLocale} from '@/actions/locale';

type Props = {
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const LanguageSwitcher = ({toggleSubMenu}: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = async (nextLocale: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (nextLocale === locale) return;

    // Close dropdown by removing 'on' class from parent
    const listItem = e.currentTarget.closest('li.dropdown');
    if (listItem) {
      listItem.classList.remove('on');
      const subMenu = listItem.querySelector('ul.dropdown-menu') as HTMLUListElement | null;
      if (subMenu) {
        subMenu.style.maxHeight = '0';
      }
    }

    try {
      // Set the locale cookie
      await setLocale(nextLocale);
      
      // Small delay to ensure cookie is written, then reload
      // This ensures the middleware will read the new cookie on reload
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error('Failed to set locale:', error);
      // Fallback: still reload even if cookie setting fails
      window.location.reload();
    }
  };

  return (
    <ul className="nav navbar-nav navbar-right" style={{marginLeft: '15px'}}>
      <li className="dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 0',
            color: 'inherit',
            fontFamily: 'var(--font-default)',
          }}
        >
          <i className="fas fa-globe" style={{fontSize: '14px'}} />
          <span style={{fontWeight: 700}}>{locale.toUpperCase()}</span>
        </a>
        <ul 
          className="dropdown-menu" 
          style={{
            minWidth: '140px',
            background: 'var(--white)',
            border: '1px solid transparent',
            borderRadius: '2px',
            boxShadow: 'var(--box-shadow-extra, 0 5px 50px 0 rgba(0, 0, 0, 0.15))',
            padding: '20px',
            fontFamily: 'var(--font-default)',
          }}
        >
          <li>
            <a
              href="#"
              onClick={(e) => handleSwitch('en', e)}
              style={{
                cursor: 'pointer',
                padding: '12px 15px',
                color: locale === 'en' ? 'var(--color-primary, #f7c35f)' : 'var(--color-heading, #04000b)',
                fontWeight: locale === 'en' ? 700 : 600,
                fontSize: '16px',
                textTransform: 'uppercase',
                display: 'block',
                textDecoration: 'none',
                fontFamily: 'var(--font-default)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (locale !== 'en') {
                  e.currentTarget.style.color = 'var(--color-primary, #f7c35f)';
                }
              }}
              onMouseLeave={(e) => {
                if (locale !== 'en') {
                  e.currentTarget.style.color = 'var(--color-heading, #04000b)';
                }
              }}
            >
              English
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleSwitch('mn', e)}
              style={{
                cursor: 'pointer',
                padding: '12px 15px',
                color: locale === 'mn' ? 'var(--color-primary, #f7c35f)' : 'var(--color-heading, #04000b)',
                fontWeight: locale === 'mn' ? 700 : 600,
                fontSize: '16px',
                textTransform: 'uppercase',
                display: 'block',
                textDecoration: 'none',
                fontFamily: 'var(--font-default)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (locale !== 'mn') {
                  e.currentTarget.style.color = 'var(--color-primary, #f7c35f)';
                }
              }}
              onMouseLeave={(e) => {
                if (locale !== 'mn') {
                  e.currentTarget.style.color = 'var(--color-heading, #04000b)';
                }
              }}
            >
              Монгол
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
