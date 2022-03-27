import React, {useContext} from 'react';
import {
  createStyles,
  Container,
  Title,
  Button,
  TextInput,
  Textarea,
} from '@mantine/core';
import {useForm} from '@mantine/form';
import FeedbackContext, {FeedbackForm} from '../../contexts/FeedbackContext';

const useStyles = createStyles(theme => ({
  fullBleed: {
    backgroundColor: theme.colors.gray[1],
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  feedback: {
    marginTop: '2rem',
  },

  submit: {
    width: '100%',
    marginTop: '2rem',
    [theme.fn.largerThan('sm')]: {
      width: 'initial',
    },
  },

  submitError: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    right: 0,
    '-ms-transform': 'translate(-50%, -50%)',
    transform: 'translate(100%, -48%)',
  },
}));

const Feedback: React.FC = () => {
  const {classes} = useStyles();
  const {sendFeedback} = useContext(FeedbackContext);

  const feedbackForm = useForm({
    initialValues: {
      email: '',
      feedback: '',
    },
    validate: (value: FeedbackForm) => {
      let emailError = null;

      if (value.email && !/^\S+@\S+$/.test(value.email)) {
        emailError = 'Invalid email';
      }

      return {email: emailError};
    },
  });

  const footerHeight = 320;
  const containerHeight = `calc(100vh - ${footerHeight}px)`;

  return (
    <Container className={classes.wrapper} style={{height: containerHeight}}>
      <Title className={classes.title}>
        Give feedback
      </Title>

      <form
        onSubmit={feedbackForm.onSubmit(
          values => {
            sendFeedback({email: values.email, feedback: values.feedback}, feedbackForm.reset);
          },
        )}
      >
        <TextInput
          placeholder="Your email"
          label="Tell us who you are (optional)"
          {...feedbackForm.getInputProps('email')}
        />
        <Textarea
          placeholder="What do you think?"
          label="Share your thoughts"
          className={classes.feedback}
          required
          {...feedbackForm.getInputProps('feedback')}
        />

        <Button
          variant="default"
          type="submit"
          className={classes.submit}
        >
          Send Feedback
        </Button>
      </form>
    </Container>
  );
};

export default Feedback;
