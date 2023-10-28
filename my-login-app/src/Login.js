import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Realiza una solicitud POST al backend Django para autenticar al usuario
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          // Inicio de sesión exitoso, podrías redirigir al usuario a otra página
          alert('inicio seccion')
          alert(data.message);
        } else if (data.error) {
          // Autenticación fallida, muestra un mensaje de error
          alert('error')
          setError(data.error);
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        setError('Error de red');
      });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className='formularioge'>
          <h2>Bienvenido a Tickify</h2>
          <p className="under-title">Ingresa tu email y contraseña para ingresar.</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form className="login-form">
            <div className="form-group">
              <label className="custom-label">Email:</label><br></br>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="custom-input"
              />
            </div><br></br>
            <div>
              <label className="custom-label">Contraseña:</label><br></br>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="custom-input"
              />
            </div><br></br>
            <button type="button" onClick={handleLogin} className="custom-button">
              Iniciar sesión
            </button>
          </form><br></br>
        </div>
      </div>
    </div>
  );
}

export default Login;
