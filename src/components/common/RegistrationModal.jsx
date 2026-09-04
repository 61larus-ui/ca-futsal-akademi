import { useId } from 'react'
import RegistrationForm from '../home/RegistrationForm'
import ModalShell from './ModalShell'

export default function RegistrationModal({ id, open, onClose }) {
  const titleId = useId()

  return (
    <ModalShell
      id={id}
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel="Ön kayıt penceresini kapat"
      size="wide"
      header={null}
    >
      <div className="registration-embed">
        <RegistrationForm headingId={titleId} />
      </div>
    </ModalShell>
  )
}
