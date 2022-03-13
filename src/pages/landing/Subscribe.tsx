import React, {useContext} from 'react';
import cx from 'classnames';
import {
  Container,
  TextInput,
  Button,
  createStyles,
} from '@mantine/core';
import {useForm} from '@mantine/form';
import SubscribeContext from '../../contexts/SubscribeContext';

const useStyles = createStyles(theme => ({
  fullBleed: {
    backgroundColor: theme.colors.indigo[1],
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    margin: 'auto',
    width: 'fit-content',
    position: 'relative',

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
    },
  },

  textInput: {
    [theme.fn.largerThan('sm')]: {
      minWidth: 400,
      marginRight: '0.5rem',
    },
  },

  submit: {
    width: '100%',
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

const Subscribe = () => {
  const {classes} = useStyles();
  const {subscribe} = useContext(SubscribeContext);

  const subscribeForm = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div className={classes.fullBleed}>
      <Container className={classes.wrapper}>

        <form
          onSubmit={subscribeForm.onSubmit((values: {email: string}) => subscribe(values.email))}
          className={classes.form}
        >
          <TextInput
            placeholder="Your email"
            label="Receive updates about Melo"
            className={classes.textInput}
            required
            {...subscribeForm.getInputProps('email')}
          />
          <Button
            variant="default"
            type="submit"
            className={cx(
              classes.submit,
              {
                [classes.submitError]: !!subscribeForm.errors.email,
              },
            )}
          >
            Subscribe
          </Button>
        </form>

      </Container>
    </div>
  );
};

export default Subscribe;
