import { useCallback, useId, useMemo, useState } from 'react'
import { ModalsContext } from './modals-context'

export function ModalsProvider({ children }) {
  const [academyOpen, setAcademyOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [programsView, setProgramsView] = useState('selection')
  const [staffOpen, setStaffOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [whyFutsalOpen, setWhyFutsalOpen] = useState(false)
  const academyDialogId = useId()
  const programsDialogId = useId()
  const staffDialogId = useId()
  const contactDialogId = useId()
  const registrationDialogId = useId()
  const whyFutsalDialogId = useId()

  const closeAcademy = useCallback(() => {
    setAcademyOpen(false)
  }, [])

  const closePrograms = useCallback(() => {
    setProgramsOpen(false)
    setProgramsView('selection')
  }, [])

  const closeStaff = useCallback(() => {
    setStaffOpen(false)
  }, [])

  const closeContact = useCallback(() => {
    setContactOpen(false)
  }, [])

  const closeRegistration = useCallback(() => {
    setRegistrationOpen(false)
  }, [])

  const closeWhyFutsal = useCallback(() => {
    setWhyFutsalOpen(false)
  }, [])

  const openAcademy = useCallback(() => {
    setProgramsOpen(false)
    setProgramsView('selection')
    setStaffOpen(false)
    setContactOpen(false)
    setRegistrationOpen(false)
    setWhyFutsalOpen(false)
    setAcademyOpen(true)
  }, [])

  const openPrograms = useCallback((view = 'selection') => {
    setAcademyOpen(false)
    setStaffOpen(false)
    setContactOpen(false)
    setRegistrationOpen(false)
    setWhyFutsalOpen(false)
    setProgramsView(view)
    setProgramsOpen(true)
  }, [])

  const openStaff = useCallback(() => {
    setAcademyOpen(false)
    setProgramsOpen(false)
    setProgramsView('selection')
    setContactOpen(false)
    setRegistrationOpen(false)
    setWhyFutsalOpen(false)
    setStaffOpen(true)
  }, [])

  const openContact = useCallback(() => {
    setAcademyOpen(false)
    setProgramsOpen(false)
    setProgramsView('selection')
    setStaffOpen(false)
    setRegistrationOpen(false)
    setWhyFutsalOpen(false)
    setContactOpen(true)
  }, [])

  const openRegistration = useCallback(() => {
    setAcademyOpen(false)
    setProgramsOpen(false)
    setProgramsView('selection')
    setStaffOpen(false)
    setContactOpen(false)
    setWhyFutsalOpen(false)
    setRegistrationOpen(true)
  }, [])

  const openWhyFutsal = useCallback(() => {
    setAcademyOpen(false)
    setProgramsOpen(false)
    setProgramsView('selection')
    setStaffOpen(false)
    setContactOpen(false)
    setRegistrationOpen(false)
    setWhyFutsalOpen(true)
  }, [])

  const value = useMemo(
    () => ({
      academyOpen,
      academyDialogId,
      openAcademy,
      closeAcademy,
      programsOpen,
      programsView,
      programsDialogId,
      openPrograms,
      closePrograms,
      setProgramsView,
      staffOpen,
      staffDialogId,
      openStaff,
      closeStaff,
      contactOpen,
      contactDialogId,
      openContact,
      closeContact,
      registrationOpen,
      registrationDialogId,
      openRegistration,
      closeRegistration,
      whyFutsalOpen,
      whyFutsalDialogId,
      openWhyFutsal,
      closeWhyFutsal,
    }),
    [
      academyOpen,
      academyDialogId,
      openAcademy,
      closeAcademy,
      programsOpen,
      programsView,
      programsDialogId,
      openPrograms,
      closePrograms,
      staffOpen,
      staffDialogId,
      openStaff,
      closeStaff,
      contactOpen,
      contactDialogId,
      openContact,
      closeContact,
      registrationOpen,
      registrationDialogId,
      openRegistration,
      closeRegistration,
      whyFutsalOpen,
      whyFutsalDialogId,
      openWhyFutsal,
      closeWhyFutsal,
    ],
  )

  return <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
}
