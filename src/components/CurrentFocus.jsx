import { Hash, Play, Pause, CheckSquare, ChevronRight } from 'lucide-react'
import './CurrentFocus.scss';

const CurrentFocus = () => {
  return (
    <section className='focus-section'>
        {/* Section header */}
        <div className="section-header">
            <div className="focus-label">
                <span className="pulse-dot">
                </span>
                CURRENT FOCUS
            </div>
            <div className="tracking-info">
                <Play size={14} className='icon-spin' />
                <span>Auto-Tracking Active</span>
            </div>
        </div>

        {/* The Big Active Card */}
        <div className="focus-card">
            {/* Top Row : Tags & Actions */}
            <div className="card-top">
                <div className="tag">
                    <Hash size={12} />DEVELOPMENT
                </div>
                <div className="action-buttons">
                    <button className="btn-pause">
                        <Pause size={16}/> Pause
                    </button>
                    <button className="btn-finish">
                        <CheckSquare size={16}/> End Task
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="card-content">
                <h1>Deep Work : UI Design</h1>
                <p>Refining the main dashboard components for the new dextop release</p>
            </div>

            {/* Footer : Mindset Toggle */}
            <div className="card-footer">
                <button className='mindset-trigger'>
                    <ChevronRight size={16}/>
                    <span>MINDSET LOG</span>
                </button>
            </div>
        </div>
    </section>

  )
}

export default CurrentFocus