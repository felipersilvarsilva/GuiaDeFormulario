
import { useState } from 'react';
import './App.css'

function App() {
  const [formValues, setFormValues] = useState({salvar_senha: 'n'})

  const handleDataChange = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === "checkbox";
    
    const data =  formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked
    }

    const newValue = isCheckbox ? data : value;    
    setFormValues({ ...formValues, [name]: newValue });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleDataChange}
          value={formValues.email || ''}
        />
        <input
          type="text"
          name="nome"
          placeholder="nome"
          onChange={handleDataChange}
          value={formValues.nome || ''}
        />
        <select
          name="language"
          onChange={handleDataChange}
          value={formValues.language || ''}>
          <option value="JavaScript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
        </select>
        <div className="radios">
          <label>
            <input
              type="radio"
              value='s'
              name='salvar_senha'
              onChange={handleDataChange}
              checked={formValues.salvar_senha === 's'}
            /> Salva Senha
          </label>
          <label>
            <input
              type="radio"
              value='n'
              name='salvar_senha'
              onChange={handleDataChange}
              checked={formValues.salvar_senha === 'n'}
            /> Nunca Salvar Senha
          </label>
        </div>
        <div className="checks">
          <label>
            <input
              type="checkbox"
              value='instagra'
              name='social'
              onChange={handleDataChange}
              checked={formValues.social && formValues.social.instagra || ''}
            /> instagra
          </label>
          <label>
            <input
              type="checkbox"
              value='facebook'
              name='social'
              onChange={handleDataChange}
              checked={formValues.social && formValues.social.facebook || ''}
            /> facebook
          </label>
        </div>
        <textarea 
        cols="30" 
        rows="10" 
        name='bio' 
        placeholder="Bio" 
        onChange={handleDataChange} 
        value={formValues.bio || ''
        }/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
