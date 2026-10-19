import { useEffect, useState } from 'react';
import { Alert, Badge, Card, CardBody, CardTitle, Spinner, Table } from 'reactstrap';

function TeamInfo() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/info')
      .then((res) => {
        if (!res.ok) throw new Error('Respuesta inválida');
        return res.json();
      })
      .then(setInfo)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <Alert color="danger">No se pudo obtener la información del API.</Alert>;
  }

  if (!info) {
    return <Spinner color="primary" />;
  }

  return (
    <Card className="mt-4 shadow-sm">
      <CardBody>
        <CardTitle tag="h5">Integrantes del equipo</CardTitle>
        <Alert color="success">{info.message}</Alert>
        <Table striped responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Carrera</th>
              <th>Materias aprobadas</th>
            </tr>
          </thead>
          <tbody>
            {info.integrantes.map((p) => (
              <tr key={p.nombre}>
                <td>{p.nombre}</td>
                <td>{p.edad}</td>
                <td>{p.carrera}</td>
                <td>
                  <Badge color="primary">{p.materiasAprobadas}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default TeamInfo;