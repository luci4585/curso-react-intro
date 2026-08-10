import './TodoCount.css';

function TodoCount({ total, completed }: { total: number; completed: number }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCount };