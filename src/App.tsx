import './App.css'
import { defineCustomElements, CreditCardInput, CardExpirationInput, CardFormContainer, CardHolderInput, CvvInput, ErrorMessage } from 'credit-card-components-react';
import { Formik, Form } from 'formik';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{}}
        enableReinitialize={true}
        // validationSchema={createCaseSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched, dirty, values, setFieldValue, submitForm }) => (
        <Form>
        <CardFormContainer>
          <CreditCardInput slot="credit-card" onChanged={(event) => console.log(event)}></CreditCardInput>
          <CardExpirationInput slot="expiration"></CardExpirationInput>
          <CvvInput slot="cvv"></CvvInput>
          <CardHolderInput slot="card-holder"></CardHolderInput>
        </CardFormContainer>
        <div className='ErrorContainer'>
          <ErrorMessage>The card number is required</ErrorMessage>
        </div>
        </Form>)}
      </Formik>
    </div>
  );
}
export default App
