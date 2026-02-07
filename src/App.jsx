import CurrentFocus from "./components/CurrentFocus"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="main-content">
        {/* Step 2: Focus Card added here */}
        <CurrentFocus /> 
        
        {/* Placeholder for Next Step */}
        <div style={{maxWidth: '800px', margin: '0 auto', color: '#666', textAlign: 'center'}}>
          Up Next List (Coming Soon...)
        </div>
      </main>
    </div>
  )
}

export default App