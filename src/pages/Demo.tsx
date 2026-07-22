import { useNavigate } from 'react-router-dom'

function Demo() {
  const navigate = useNavigate()

  return (
    <section id="center">
      <div>
        <h1>Demo Page</h1>
        <p>This is an example page to show React Router in action.</p>
        <p>You can navigate back to the home page using the link above, or use the button below.</p>
        <button
          type="button"
          className="counter"
          onClick={() => navigate('/')}
        >
          Go Back to Home
        </button>
      </div>
    </section>
  )
}

export default Demo
