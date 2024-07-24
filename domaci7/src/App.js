import './App.css';
import Payments from './Components/Payments';
import PayPall from './Components/PayPall';
import { createContext, useState } from 'react';
import { VALUTE } from './Utils/Valute';

export const IznosContext = createContext(0);
export const ValutaContext = createContext('USD');

function App() {
  const [trenutnaValuta, setTrenutnaValuta] = useState('USD');
  const [iznos, setIznos] = useState(0);

  const updateValute = (e) => {
    setTrenutnaValuta(e.target.value);
  };

  const updateNovac = (e) => {
    setIznos(parseFloat(e.target.value));
  };

  return (
    <ValutaContext.Provider value={trenutnaValuta}>
      <IznosContext.Provider value={iznos}>
      <Payments />
        <input
          type='number'
          onChange={updateNovac}
          placeholder="Enter amount"
        />
        <select onChange={updateValute} value={trenutnaValuta}>
          {Object.keys(VALUTE).map(valuta => (
            <option key={valuta} value={valuta}>{valuta}</option>
          ))}
        </select>
        
        
      </IznosContext.Provider>
    </ValutaContext.Provider>
  );
}

export default App;
