import './App.css'
import { SubscribeForm } from './components/subscribe-form'
import { Analytics } from "@vercel/analytics/react"

type Props = {
  clientId: string | null
}

function App({ clientId }: Props) {

  console.log('clientId', clientId)

  if (!clientId) {
    return (
      <div className='flex flex-col items-center p-10'>
        <p>data-client-id no configurado</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center p-10'>
      <SubscribeForm clientId={clientId} />
      <Analytics />
    </div>
  )
}

export default App
