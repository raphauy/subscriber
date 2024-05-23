import './App.css'
import { SubscribeForm } from './components/subscribe-form'

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
    </div>
  )
}

export default App
