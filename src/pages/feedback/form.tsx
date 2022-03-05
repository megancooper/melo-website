import React, {useContext} from 'react';
import {Formik, Field, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import FeedbackContext from '../../contexts/FeedbackContext';
import Button from '../../components/button';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().optional(),
  feedback: Yup.string()
    .min(1, 'You must enter something.')
    .required('Feedback is required.'),
});

interface FeedbackForm {
  email: string;
  feedback: string;
}

const Form = () => {
  const {create, success} = useContext(FeedbackContext);
  const handleFeedback = (
    value: {email: string, feedback: string},
    formikContext: FormikHelpers<FeedbackForm>,
  ) => create(value.email, value.feedback, formikContext);

  return (
    <div className="container mx-auto px-6 py-2 pb-24 lg:pb-0 flex justify-between items-center mt-20">
      <div className="mx-auto mt-10 w-full lg:w-4/6 flex flex-col">
        <h1 className="text-5xl font-bold mb-6 mx-auto">
          Tell us what you think 👀
        </h1>

        <Formik
          enableReinitialize
          initialValues={{email: '', feedback: ''}}
          validationSchema={validationSchema}
          onSubmit={handleFeedback}
        >
          {({handleSubmit}) => (
            <>
              <Field
                placeholder="Enter your email (optional)"
                type="email"
                name="email"
                className="mb-4 lg:mb-6 flex-grow"
              />
              <Field
                type="textarea"
                component="textarea"
                name="feedback"
                placeholder={'Request a feature 🔨\nReport a bug 🐛\nAnything!\n'}
                rows={5}
                className="mb-4 lg:mb-6 flex-grow"
              />
              <Button
                onClick={() => handleSubmit()}
                className="lg:mx-auto"
              >
                Submit Feedback
              </Button>
            </>
          )}
        </Formik>

        {success && <div className="mt-6 mx-auto">Thanks! 🎉</div>}
      </div>
    </div>
  );
};

export default Form;
