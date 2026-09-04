export default function StaffCard({ member }) {
  const isLogo = member.variant === 'logo'
  const className = [
    'staff-card',
    `staff-card--${member.id}`,
    isLogo ? 'staff-card--logo' : 'staff-card--person',
  ].join(' ')

  const inner = (
    <>
      <div className="staff-card__media">
        <div className="staff-card__image-stage">
          <img
            className={isLogo ? 'staff-card__logo' : 'staff-card__photo'}
            src={member.image}
            alt={member.imageAlt}
            width={isLogo ? '160' : '640'}
            height={isLogo ? '192' : '800'}
            loading="lazy"
          />
        </div>
      </div>
      <div className="staff-card__body">
        <h3 className="staff-card__name">{member.name}</h3>
        {member.roleLines.length > 0 ? (
          <p className="staff-card__role">
            {member.roleLines.map((line) => (
              <span key={line} className="staff-card__role-line">
                {line}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </>
  )

  if (member.href) {
    return (
      <a href={member.href} className={className}>
        {inner}
      </a>
    )
  }

  return <article className={className}>{inner}</article>
}
