import { useEffect, useState } from 'react';

function HealthStatus() {
  const [message, setMessage] = useState('Consultando el API...');
  const [ok, setOk] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('Respuesta inválida');
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setOk(true);
      })
      .catch(() => {
        setMessage('No se pudo conectar con el API');
        setOk(false);
      });
  }, []);

  return (
    <section className="health-section">
      <div className={`health-box ${ok === false ? 'health-error' : ''}`}>
        <h4>Estado del API</h4>
        <p>{message}</p>
      </div>
    </section>
  );
}

export default HealthStatus;