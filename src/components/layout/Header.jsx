import { useEffect, useId, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { CTA_LINK, NAV_LINKS } from '../../data/navigation'
import { useModals } from '../../context/useModals'
import Button from '../common/Button'
import Container from '../common/Container'
import Logo from '../common/Logo'
import NavList from '../common/NavList'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const toggleRef = useRef(null)
  const {
    academyOpen,
    academyDialogId,
    openAcademy,
    programsOpen,
    programsDialogId,
    openPrograms,
    staffOpen,
    staffDialogId,
    openStaff,
    contactOpen,
    contactDialogId,
    openContact,
    registrationOpen,
    registrationDialogId,
    openRegistration,
    whyFutsalOpen,
    whyFutsalDialogId,
    openWhyFutsal,
  } = useModals()

  const navItems = NAV_LINKS.map((item) => {
    if (item.action === 'open-academy') {
      return { ...item, expanded: academyOpen, controls: academyDialogId }
    }
    if (item.action === 'open-programs') {
      return { ...item, expanded: programsOpen, controls: programsDialogId }
    }
    if (item.action === 'open-why-futsal') {
      return { ...item, expanded: whyFutsalOpen, controls: whyFutsalDialogId }
    }
    if (item.action === 'open-staff') {
      return { ...item, expanded: staffOpen, controls: staffDialogId }
    }
    if (item.action === 'open-contact') {
      return { ...item, expanded: contactOpen, controls: contactDialogId }
    }
    return item
  })

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      if (
        event.key === 'Escape' &&
        menuOpen &&
        !academyOpen &&
        !programsOpen &&
        !staffOpen &&
        !contactOpen &&
        !registrationOpen &&
        !whyFutsalOpen
      ) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, academyOpen, programsOpen, staffOpen, contactOpen, registrationOpen, whyFutsalOpen])

  useEffect(() => {
    document.body.classList.toggle('is-nav-open', menuOpen)

    return () => {
      document.body.classList.remove('is-nav-open')
    }
  }, [menuOpen])

  useEffect(() => {
    function onResize() {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function onDrawerRegister() {
    closeMenu()
    openRegistration()
  }

  function onNavAction(item) {
    setMenuOpen(false)
    if (item.action === 'open-academy') {
      openAcademy()
    }
    if (item.action === 'open-programs') {
      openPrograms('selection')
    }
    if (item.action === 'open-why-futsal') {
      openWhyFutsal()
    }
    if (item.action === 'open-staff') {
      openStaff()
    }
    if (item.action === 'open-contact') {
      openContact()
    }
  }

  const headerClass = [
    'site-header',
    scrolled ? 'site-header--scrolled' : '',
    menuOpen ? 'site-header--open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <Container className="site-header__bar">
        <Logo variant="header" />

        <nav className="site-header__nav" aria-label="Ana menü">
          <NavList
            items={navItems}
            className="nav-list nav-list--desktop"
            linkClassName="nav-list__link"
            onAction={onNavAction}
          />
        </nav>

        <Button
          className="site-header__cta"
          aria-haspopup="dialog"
          aria-expanded={registrationOpen}
          aria-controls={registrationDialogId}
          onClick={openRegistration}
        >
          {CTA_LINK.label}
          <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
        </Button>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </Container>

      <div id={menuId} className="site-header__drawer" hidden={!menuOpen}>
        <Container className="site-header__drawer-inner">
          <nav aria-label="Mobil menü">
            <NavList
              items={navItems}
              className="nav-list nav-list--mobile"
              linkClassName="nav-list__link"
              onNavigate={closeMenu}
              onAction={onNavAction}
            />
          </nav>
          <Button
            className="site-header__drawer-cta btn--block"
            aria-haspopup="dialog"
            aria-expanded={registrationOpen}
            aria-controls={registrationDialogId}
            onClick={onDrawerRegister}
          >
            {CTA_LINK.label}
            <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </Button>
        </Container>
      </div>
    </header>
  )
}
