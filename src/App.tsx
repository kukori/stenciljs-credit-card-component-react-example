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
        {({ errors, touched, setTouched, values, setFieldValue}) => (
        <Form>
          <CardFormContainer>
            <CreditCardInput slot="credit-card" name="creditCard" value={values.creditCard} onBlur={() => setTouched({ ...touched, creditCard: true })} onChanged={(event) => setFieldValue('creditCard', event.target.value)} error={errors.creditCard && touched.creditCard ? true : false}></CreditCardInput>
            <CardExpirationInput slot="expiration" name="cardExpiration" value={values.cardExpiration} onBlur={() => setTouched({ ...touched, cardExpiration: true })} onChanged={(event) => setFieldValue('cardExpiration', event.target.value)} error={errors.cardExpiration && touched.cardExpiration ? true : false}></CardExpirationInput>
            <CvvInput slot="cvv" name="cvv" value={values.cvv} onBlur={() => setTouched({ ...touched, cvv: true })} onChanged={(event) => setFieldValue('cvv', event.target.value)} error={errors.cvv && touched.cvv ? true : false}></CvvInput>
            <CardHolderInput slot="card-holder" name="cardHolder" value={values.cardHolder} onBlur={() => setTouched({ ...touched, cardHolder: true })} onChanged={(event) => setFieldValue('cardHolder', event.target.value)} error={errors.cardHolder && touched.cardHolder ? true : false}></CardHolderInput>
          </CardFormContainer>
          <div className='ErrorContainer'>
            { errors.creditCard && touched.creditCard && <ErrorMessage>{errors.creditCard}</ErrorMessage>}
            { errors.cardExpiration && touched.cardExpiration && <ErrorMessage>{errors.cardExpiration}</ErrorMessage>}
            { errors.cvv && touched.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
            { errors.cardHolder && touched.cardHolder && <ErrorMessage>{errors.cardHolder}</ErrorMessage>}
          </div>
        </Form>)}
      </Formik>
    </div>
  );
}
export default App
