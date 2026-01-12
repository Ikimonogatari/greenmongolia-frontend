"use client";

import {useLocale} from 'next-intl';
import {setLocale} from '@/actions/locale';
import { FaGlobe } from "react-icons/fa";

type Props = {
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const LanguageSwitcher = ({toggleSubMenu}: Props) => {
  const locale = useLocale();

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
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 0',
            color: 'var(--color-heading, #04000b)',
            textDecoration: 'none',
            fontFamily: 'var(--font-default)',
            fontWeight: 600,
            fontSize: '14px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-theme, #ffb524)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-heading, #04000b)';
          }}
        >
          <FaGlobe style={{fontSize: '14px'}} />
          <span style={{fontWeight: 700}}>{locale.toUpperCase()}</span>
        </a>
        <ul 
          className="dropdown-menu language-switcher-dropdown" 
          style={{
            minWidth: 'auto',
            width: 'auto',
            background: 'var(--white)',
            color: 'var(--color-heading)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '6px 0 !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important',
            fontFamily: 'var(--font-default)',
            marginTop: '5px',
            marginLeft: '0 !important',
            listStyle: 'none !important',
            left: 'auto !important',
            right: '0 !important',
          }}
        >
          <li style={{ margin: '0 !important', padding: '0 !important', listStyle: 'none !important' }}>
            <a
              href="#"
              onClick={(e) => handleSwitch('en', e)}
              style={{
                cursor: 'pointer',
                padding: '8px 12px !important',
                paddingLeft: '12px !important',
                paddingRight: '12px !important',
                color: locale === 'en' ? 'var(--color-theme, #ffb524)' : 'var(--color-heading, #04000b)',
                fontWeight: locale === 'en' ? 600 : 500,
                fontSize: '14px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-default)',
                transition: 'color 0.2s ease, background-color 0.2s ease',
                margin: '0 !important',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (locale !== 'en') {
                  e.currentTarget.style.color = 'var(--color-theme, #ffb524)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 181, 36, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (locale !== 'en') {
                  e.currentTarget.style.color = 'var(--color-heading, #04000b)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '18px' }}>🇬🇧</span>
              English
            </a>
          </li>
          <li style={{ margin: '0 !important', padding: '0 !important', listStyle: 'none !important' }}>
            <a
              href="#"
              onClick={(e) => handleSwitch('mn', e)}
              style={{
                cursor: 'pointer',
                padding: '8px 12px !important',
                paddingLeft: '12px !important',
                paddingRight: '12px !important',
                color: locale === 'mn' ? 'var(--color-theme, #ffb524)' : 'var(--color-heading, #04000b)',
                fontWeight: locale === 'mn' ? 600 : 500,
                fontSize: '14px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-default)',
                transition: 'color 0.2s ease, background-color 0.2s ease',
                margin: '0 !important',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (locale !== 'mn') {
                  e.currentTarget.style.color = 'var(--color-theme, #ffb524)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 181, 36, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (locale !== 'mn') {
                  e.currentTarget.style.color = 'var(--color-heading, #04000b)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '18px' }}>🇲🇳</span>
              Монгол
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
