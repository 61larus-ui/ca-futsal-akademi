import { MapPin, Star, UsersRound, Zap } from 'lucide-react'
import { QUICK_INFO_ITEMS } from '../../data/home'
import { useModals } from '../../context/useModals'
import Container from '../common/Container'
import './QuickInfo.css'

const QUICK_INFO_ICONS = {
  'users-round': UsersRound,
  zap: Zap,
  star: Star,
  'map-pin': MapPin,
}

export default function QuickInfo() {
  const { openPrograms, programsDialogId } = useModals()

  return (
    <section className="quick-info" id="quick-info" aria-label="Akademi özeti">
      <Container>
        <ul className="quick-info__grid">
          {QUICK_INFO_ITEMS.map((item) => {
            const Icon = QUICK_INFO_ICONS[item.icon]
            const inner = (
              <>
                {Icon ? (
                  <Icon
                    className="quick-info__icon"
                    size={28}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                ) : null}
                <div className="quick-info__copy">
                  <span className="quick-info__title">{item.title}</span>
                  <span className="quick-info__text">{item.description}</span>
                </div>
              </>
            )

            return (
              <li key={item.id} className="quick-info__item">
                {item.programView ? (
                  <button
                    type="button"
                    className="quick-info__body"
                    aria-haspopup="dialog"
                    aria-controls={programsDialogId}
                    onClick={() => openPrograms(item.programView)}
                  >
                    {inner}
                  </button>
                ) : (
                  <div className="quick-info__body">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
