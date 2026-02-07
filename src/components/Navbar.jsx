import { Layers, Plus, CheckCircle } from 'lucide-react'; // Icons
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* left side : logo */}
        <div className="nav-brand">
            <div className="logo-icon">
                <Layers size={20} color="white" />
            </div>
            <span className="brand-name">Focus Queue</span>
        </div>
        {/* right side : Actions */}
        <div className="nav-actions">
            {/* Done couter pill */}
            <div className="status-pill">
                <CheckCircle size={16} className='icon-success'/>
                <span>5 Done</span>
            </div>

            {/* new task button */}
            <button className='btn-primary'>
                <Plus size={18} />
                <span>New Task</span>
            </button>

            {/* prifile avatar (placeholder) */}
            <div className="user-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar