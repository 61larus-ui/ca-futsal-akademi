import { NavLink } from 'react-router-dom'

export default function NavList({
  items,
  className = '',
  linkClassName = '',
  onNavigate,
  onAction,
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          {item.to ? (
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [linkClassName, isActive ? 'is-active' : null]
                  .filter(Boolean)
                  .join(' ')
              }
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          ) : item.action ? (
            <button
              type="button"
              className={[linkClassName, item.expanded ? 'is-active' : null]
                .filter(Boolean)
                .join(' ')}
              aria-haspopup="dialog"
              aria-expanded={Boolean(item.expanded)}
              aria-controls={item.controls}
              onClick={(event) => onAction?.(item, event)}
            >
              {item.label}
            </button>
          ) : (
            <a href={item.href} className={linkClassName} onClick={onNavigate}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
