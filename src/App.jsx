import './App.css'
import { Toast } from './components/Toast.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Header } from './components/layout/Header.jsx'
import { AdmissionPage } from './pages/AdmissionPage.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { useAcademyApp } from './hooks/useAcademyApp.js'

function App() {
  const app = useAcademyApp()

  return (
    <>
      <div className="children-watermark" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentView={app.currentView} isLoggedIn={app.isLoggedIn} setView={app.setView} handleLogout={app.handleLogout} />
        <main className="flex-grow">
          {app.currentView === 'home' && <HomePage {...app} />}
          {app.currentView === 'admission' && (
            <AdmissionPage
              form={app.admissionForm}
              setForm={app.setAdmissionForm}
              submitted={app.admissionSubmitted}
              setSubmitted={app.setAdmissionSubmitted}
              applicationId={app.lastApplicationId}
              handleSubmit={app.handleAdmissionSubmit}
              setView={app.setView}
            />
          )}
          {app.currentView === 'login' && (
            <LoginPage
              role={app.loginRole}
              setRole={app.setLoginRole}
              form={app.loginForm}
              setForm={app.setLoginForm}
              showPassword={app.showPassword}
              setShowPassword={app.setShowPassword}
              fillDemoCredentials={app.fillDemoCredentials}
              handleLogin={app.handleLogin}
              showToast={app.showToast}
              setView={app.setView}
            />
          )}
          {app.currentView === 'dashboard' && (
            <Dashboard setView={app.setView} showToast={app.showToast} handleLogout={app.handleLogout} />
          )}
        </main>
        <Footer setView={app.setView} />
        <Toast message={app.toastMessage} />
      </div>
    </>
  )
}

export default App
