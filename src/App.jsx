import React, { useState, useEffect, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Creación del Contexto llamado MiContexto
const MiContexto = React.createContext();

// ComponenteA: Un componente que consume el valor del contexto MiContexto
const ComponenteA = () => {
  // Consumir el valor del contexto
  const usuario = useContext(MiContexto);

  // Retorna un párrafo con el valor del contexto
  return <p>El usuario es: {usuario}</p>;
};

function App() {
  // Estado para el contador
  const [count, setCount] = useState(0);
  // Estado para manejar la lista de usuarios obtenida desde la API
  const [users, setUsers] = useState([]);
  // Estado para manejar el estado de carga (loading)
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores (si ocurre uno)
  const [error, setError] = useState(null);
  // Estado para el usuario (valor que se pasa a través del contexto)
  const [usuario, setUsuario] = useState('Juan');

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Hacer la solicitud fetch a la API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanzamos un error
          throw new Error('Error al obtener los datos');
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        setUsers(data); // Actualizar el estado de los usuarios con los datos obtenidos
        setLoading(false); // Dejar de mostrar "cargando"
      })
      .catch((error) => {
        setError(error.message); // Si ocurre un error, actualizar el estado de error
        setLoading(false); // Dejar de mostrar "cargando"
      });
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez, cuando el componente se monta

  // useEffect para controlar el contador y asegurarse de que no pase de 10
  useEffect(() => {
    if (count > 10) {
      setCount(10); // Limita el contador a 10
      alert('Alcanzaste el limite del contador'); // Muestra una alerta si el contador supera el límite
    }
  }, [count]); // Dependencia del estado count

  return (
    <MiContexto.Provider value={usuario}>
      <div>
        {/* Mostrar el contador y un botón para incrementarlo */}
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrementar contador</button>

        {/* Componente que consume el contexto MiContexto */}
        <ComponenteA />

        {/* Mostrar mensaje de carga mientras esperamos la respuesta */}
        {loading && <p>Cargando usuarios...</p>}

        {/* Si ocurrió un error, mostrar el error */}
        {error && <p>Error: {error}</p>}

        {/* Si los datos están disponibles, mostrar la tabla con usuarios */}
        {!loading && !error && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Correo Electrónico</TableCell>
                  <TableCell>Ciudad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Itera sobre la lista de usuarios y muestra sus datos en la tabla */}
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.address.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </MiContexto.Provider>
  );
}

export default App;



/** 
  return(
    <TableContainer component={Paper}>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell>Nombre</TableCell>
      <TableCell>Apellido</TableCell>
      <TableCell>Edad</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
      {usersList.map((user, index) => (
        <TableRow key={index}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.age}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
    </TableContainer>
  )
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/