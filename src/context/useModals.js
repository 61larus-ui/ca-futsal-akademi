import { useContext } from 'react'
import { ModalsContext } from './modals-context'

export function useModals() {
  const value = useContext(ModalsContext)
  if (!value) {
    throw new Error('useModals must be used within ModalsProvider')
  }
  return value
}
