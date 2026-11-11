import { useEffect, useRef, useState } from 'react'
import { initialAdmission, studentProfile } from '../data/academyData.js'
import { useSketchpad } from './useSketchpad.js'

export function useAcademyApp() {
  const [currentView, setCurrentView] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginRole, setLoginRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [loginForm, setLoginForm] = useState({ identifier: '', password: '', remember: true })
  const [admissionForm, setAdmissionForm] = useState(initialAdmission)
  const [admissionSubmitted, setAdmissionSubmitted] = useState(false)
  const [lastApplicationId, setLastApplicationId] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const toastTimerRef = useRef(null)
  const showToast = (message) => {
    setToastMessage(message)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToastMessage(''), 3500)
  }
  const sketchpad = useSketchpad(currentView, showToast)

  useEffect(() => () => window.clearTimeout(toastTimerRef.current), [])

  const setView = (view) => {
    if (view === 'home') sketchpad.resetTemplateForHome()
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    setIsLoggedIn(true)
    setView('dashboard')
    showToast(`স্বাগতম, ${studentProfile.name}! ড্যাশবোর্ডে সফলভাবে লগইন হয়েছে।`)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setView('home')
    showToast('সফলভাবে লগআউট করা হয়েছে।')
  }

  const handleAdmissionSubmit = (event) => {
    event.preventDefault()
    setLastApplicationId(`KV-${Math.floor(1000 + Math.random() * 9000)}`)
    setAdmissionSubmitted(true)
    showToast('ভর্তি আবেদন সফলভাবে সম্পন্ন হয়েছে!')
  }

  const fillDemoCredentials = () => {
    setLoginForm((form) => ({ ...form, identifier: 'KV-2026-08', password: '123456' }))
    showToast('ডেমো তথ্য সফলভাবে পূর্ণ করা হয়েছে!')
  }

  return {
    ...sketchpad,
    admissionForm,
    admissionSubmitted,
    currentView,
    fillDemoCredentials,
    handleAdmissionSubmit,
    handleLogin,
    handleLogout,
    isLoggedIn,
    lastApplicationId,
    loginForm,
    loginRole,
    setAdmissionForm,
    setAdmissionSubmitted,
    setCurrentView,
    setLoginForm,
    setLoginRole,
    setShowPassword,
    setView,
    showPassword,
    showToast,
    toastMessage,
  }
}
