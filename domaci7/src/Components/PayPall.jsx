import { useContext } from 'react';
import { ValutaContext, IznosContext } from '../App';
import { VALUTE } from '../Utils/Valute';

const PayPall = () => {
  const trenutnaValuta = useContext(ValutaContext);
  const iznos = useContext(IznosContext);
  const valuta = VALUTE[trenutnaValuta] ; 
  const vrednost = iznos * valuta;

  return (
    <h4>{trenutnaValuta} - {iznos} = {vrednost.toFixed(2)} RSD</h4>
  );
};

export default PayPall;


