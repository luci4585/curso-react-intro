import './TodoCounter.css';

export default function TodoCounter({ total, completed }: { total: number; completed: number }) {
  return (
    <h1 className="TodoCounter">
      {completed === total ? (
      <span>¡Felicidades! Has completado todas las TODOs</span>
      ) : (
      <span> Has completado {completed} de {total} TODOs</span>
      )}
    </h1>
  );
}
