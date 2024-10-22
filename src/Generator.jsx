import { WiredInput, WiredButton, WiredTextArea, WiredDialog } from 'react-wired-elements';
import './Generator.css'
import { useState } from 'react';

export default function Generator() {
  const [values, setValues] = useState({});
  const [result, setResult] = useState("");
  const [showError, setShowError] = useState(false);

  const getValue = (name) => {
    return values[name] || "";
  }

  const handleInput = (name, e) => {
    setValues({ ...values, [name]: e.target.value });
  }

  const handleSubmit = () => {
    if (!values.server || !values.username || !values.password) {
      setShowError(true);
      return;
    }
    const auth = {
      auths: {
        [values.server]: {
          auth: btoa(`${values.username}:${values.password}`)
        }
      }
    }
    setResult(btoa(JSON.stringify(auth, null, 2)));
  }

  const handleReset = () => {
    setValues({});
  }

  return <div className='container'>
    <div className="form-item">
      <div className="form-label">Docker Server:</div>
      <WiredInput className='input-font' value={getValue("server")} onChange={e => handleInput("server", e)} style={{ width: '720px' }} />
    </div>
    <div className="form-inline">
      <div className="form-item">
        <div className="form-label">Docker Username:</div>
        <WiredInput className='input-font' value={getValue("username")} onChange={e => handleInput("username", e)} style={{ width: '240px' }} />
      </div>
      <div className="form-item">
        <div className="form-label">Docker Password:</div>
        <WiredInput className='input-font' value={getValue("password")} onChange={e => handleInput("password", e)} style={{ width: '240px' }} />
      </div>
    </div>
    {/* <div className="form-item">
      <div className="form-label">Docker Email:</div>
      <WiredInput className='input-font' placeholder='Optional' value={getValue("email")} onChange={e => handleInput("email", e)} style={{ width: '360px' }} />
    </div> */}

    <div className='form-action'>
      <WiredButton onClick={handleReset}>Reset</WiredButton>
      <WiredButton elevation="1" onClick={handleSubmit}>Submit</WiredButton>
    </div>

    <WiredTextArea id="resultArea" className='input-font' rows="6" value={result} placeholder='' style={{ width: '99%' }} />

    <WiredDialog open={showError}>
      <p style={{ padding: '0 8px' }}>
        Server, Username, Password can not be empty!
      </p>
      <div style={{ textAlign: 'right', padding: '30px 16px 16px' }}>
        <WiredButton id="closeDialog" onClick={() => setShowError(false)}>Close</WiredButton>
      </div>
    </WiredDialog>
  </div>
}