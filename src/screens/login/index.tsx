import React, {useCallback, useState} from 'react';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {strings} from '../../common/localize';
import styles from './login.styles';
import {isValidEmail, isValidPassword} from '../../common/utils';
import {useDispatch} from 'react-redux';
import {changeLoginStateAction} from '../../redux/actions/app-actions';
import Header from '../../common/components/header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  const checkNextEnabled = useCallback(() => {
    return isValidEmail(email) && isValidPassword(password);
  }, [email, password]);

  const handleChangeEmail = useCallback((email: string) => {
    setEmailError(false);
    setEmail(email);
  }, []);
  const handleChangePassword = useCallback((password: string) => {
    setPasswordError(false);
    setPassword(password);
  }, []);
  const handleSubmit = useCallback(() => {
    dispatch(changeLoginStateAction());
  }, []);

  const handleCheckEmail = useCallback(() => {
    if (email.length > 0) setEmailError(!isValidEmail(email));
  }, [email]);
  const handleCheckPassword = useCallback(() => {
    if (password.length > 0) setPasswordError(!isValidPassword(password));
  }, [password]);

  const getForm = () => {
    return (
      <>
        <TextInput
          testID="emailInput"
          label={strings('email')}
          value={email}
          onChangeText={handleChangeEmail}
          mode="outlined"
          maxLength={50}
          error={emailError}
          onBlur={handleCheckEmail}
          right={<TextInput.Icon icon={'email'} />}
        />
        <HelperText type="error" visible={emailError}>
          {strings('invalid_email')}
        </HelperText>
        <TextInput
          testID="pwdInput"
          label={strings('password')}
          value={password}
          maxLength={15}
          onBlur={handleCheckPassword}
          onChangeText={handleChangePassword}
          style={styles.mt16}
          mode="outlined"
          error={passwordError}
          secureTextEntry={!showPwd}
          right={
            <TextInput.Icon
              icon={showPwd ? 'eye' : 'eye-off'}
              onPress={() => setShowPwd(!showPwd)}
            />
          }
        />
        <HelperText type="error" visible={passwordError}>
          {strings('password_rule')}
        </HelperText>
      </>
    );
  };

  return (
    <>
      <Header title={strings('screen1Title')} />
      <View style={styles.root}>
        {getForm()}
        <Button
          accessibilityLabel="submitBtn"
          testID="submitBtn"
          mode="contained"
          onPress={handleSubmit}
          disabled={!checkNextEnabled()}
          style={styles.mt16}>
          {strings('submit')}
        </Button>
      </View>
    </>
  );
};

export default Login;
