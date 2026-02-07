import './TaskCard.scss';


const TaskCard = () => {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3 className="task-title">Task Title</h3>
        <span className="task-tag">Development</span>
      </div>
      <button className="btn-start">Start</button>
    </div>
  );
};

export default TaskCard;
