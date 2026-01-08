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

  const handleSwitch = async (nextLocale: string) => {
    if (nextLocale === locale) return;

    await setLocale(nextLocale);

    startTransition(() => {
      router.refresh();
    });
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
          }}
        >
          <i className="fas fa-globe" style={{fontSize: '14px'}} />
          <span style={{fontWeight: 700}}>{locale.toUpperCase()}</span>
        </a>
        <ul className="dropdown-menu" style={{minWidth: '140px'}}>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSwitch('en');
              }}
              style={{
                cursor: 'pointer',
                fontWeight: locale === 'en' ? 700 : 600,
                color: locale === 'en' ? 'var(--blue, #007bff)' : 'inherit',
              }}
            >
              English
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSwitch('mn');
              }}
              style={{
                cursor: 'pointer',
                fontWeight: locale === 'mn' ? 700 : 600,
                color: locale === 'mn' ? 'var(--blue, #007bff)' : 'inherit',
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
