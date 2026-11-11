import { Hero } from '../components/home/Hero.jsx'
import { RoutineSection } from '../components/home/RoutineSection.jsx'
import { FeesSection } from '../components/home/FeesSection.jsx'
import { Art } from '../components/home/Art.jsx'
import { ContactSection } from '../components/home/ContactSection.jsx'

export function HomePage(props) {
  return <><Hero setView={props.setView} /><RoutineSection setView={props.setView} /><FeesSection setView={props.setView} /><Art {...props} /><ContactSection setView={props.setView} /></>
}
