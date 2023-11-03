import Navbar from '@/components/nav/navbar'
import { useNavData } from './config-navigation'

export default function Home() {
  const navData = useNavData();

  return (
    <main>
      <Navbar data={navData} />
    </main>
  )
}
