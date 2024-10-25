import EmailPasswordAuth from './strategies/EmailPasswordAuth';
import GoogleAuth from './strategies/GoogleAuth';
// import AppleAuth from './strategies/AppleAuth';

export const getAuthStrategy = (authType) => {
  const strategies = {
    emailPassword: new EmailPasswordAuth(),
    google: new GoogleAuth(),
    // apple: new AppleAuth(),
  };

  if (!strategies[authType]) {
    throw new Error("Auth type not supported");
  }

  return strategies[authType];
};

export const authStrategy = {
  emailPassword: "emailPassword",
  google: "google",
  apple: "apple"
}