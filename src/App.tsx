import './App.css'
import { defineCustomElements, CreditCardInput, CardExpirationInput, CardFormContainer, CardHolderInput, CvvInput, ErrorMessage } from 'credit-card-components-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

defineCustomElements();

function App() {

  const creditCardSchema = Yup.object().shape({
    creditCard: Yup.string().trim().min(18, 'Card number is not valid').required('Card number is not valid'),
    cardExpiration: Yup.string().trim().min(5, 'Card expiration is not valid').required('Card expiration is not valid'),
    cvv: Yup.string().trim().min(3, 'Cvv is not valid').required('Cvv is not valid'),
    cardHolder: Yup.string().trim().min(1, 'Card holder is not valid').required('Card holder is not valid'),
  });

  const initialValues = {
    creditCard: '',
    cardExpiration: '',
    cvv: '',
    cardHolder: '',
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={creditCardSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched, dirty, values, setFieldValue, submitForm}) => (
        <Form>
          <CardFormContainer>
            <CreditCardInput slot="credit-card" name="creditCard" value={values.creditCard} onBlur={(event) => console.log(event)} onChanged={(event) => setFieldValue('creditCard', event.target.value)} error={errors.creditCard ? true : false}></CreditCardInput>
            <CardExpirationInput slot="expiration" name="cardExpiration" value={values.cardExpiration} onChanged={(event) => setFieldValue('cardExpiration', event.target.value)} error={errors.cardExpiration ? true : false}></CardExpirationInput>
            <CvvInput slot="cvv" name="cvv" value={values.cvv} onChanged={(event) => setFieldValue('cvv', event.target.value)} error={errors.cvv ? true : false}></CvvInput>
            <CardHolderInput slot="card-holder" name="cardHolder" value={values.cardHolder} onChanged={(event) => setFieldValue('cardHolder', event.target.value)} error={errors.cardHolder ? true : false}></CardHolderInput>
          </CardFormContainer>
          <div className='ErrorContainer'>
            { errors.creditCard && <ErrorMessage>{errors.creditCard}</ErrorMessage>}
            { errors.cardExpiration && <ErrorMessage>{errors.cardExpiration}</ErrorMessage>}
            { errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
            { errors.cardHolder && <ErrorMessage>{errors.cardHolder}</ErrorMessage>}
          </div>
        </Form>)}
      </Formik>
    </div>
  );
}
export default App
