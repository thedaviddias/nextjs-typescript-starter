import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { usePlausible } from 'next-plausible'
import { useEffect } from 'react'

const NotFoundPage: NextPage = () => {
  const router = useRouter()
  const plausible = usePlausible()

  useEffect(() => {
    plausible('404', {
      props: { page: document.location.pathname },
    })
  }, [plausible])

  const handleClick = () => router.push('/')

  return (
    <div>
      <div className="mt-10 text-center">
        <button onClick={handleClick}>Back home</button>
      </div>
    </div>
  )
}

export default NotFoundPage
