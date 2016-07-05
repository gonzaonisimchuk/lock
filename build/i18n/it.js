Auth0.registerLanguageDictionary("it", {
  error: {
    forgotPassword: {
      "too_many_requests": "Lei è stato raggiunto il limite di tentativi di modifica della password . Si prega di attendere prima di riprovare.",
      "lock.fallback": "Ci dispiace, qualcosa è andato storto quando si richiede la modifica della password."
    },
    login: {
      "blocked_user": "L’utente è bloccato.",
      "invalid_user_password": "Credenziali non corrette.",
      "lock.fallback": "Ci dispiace, qualcosa è andato storto quando si tenta di accedere.",
      "lock.invalid_code": "Codice errato.",
      "lock.invalid_email_password": "email o password sbagliata.",
      "lock.invalid_username_password": "Nome utente o password sbagliata.",
      "lock.network": "Non siamo riusciti a raggiungere il server. Si prega di controllare la connessione e riprova.",
      "lock.popup_closed": "Finestra popup chiusa. Riprova per favore.",
      "lock.unauthorized": "Autorizzazioni non sono state concesse. Riprova per favore.",
      "password_change_required": "È necessario aggiornare la password perché questa è la prima volta che si esegue il login, or perché la password è scaduta.",
      "password_leaked": "Questo accesso è stato bloccato perché la password è trapelato in un altro sito . Ti abbiamo inviato una email con le istruzioni su come sbloccarla."
    },
    passwordless: {
      "bad.email": "L’email non è valido ",
      "bad.phone_number": "Il numero di telefono non è valido",
      "lock.fallback": "Ci dispiace, qualcosa è andato storto"
    },
    signUp: {
      "invalid_password": "La password è troppo debole.",
      "lock.fallback": "Ci dispiace, qualcosa è andato storto quando si tenta di iscriversi.",
      "user_exists": "L’utente esiste già.",
      "username_exists": "Il nome utente esiste già."
    }
  },
  success: {
    logIn: "Grazie per il login.",
    forgotPassword: "Abbiamo appena inviato un email per reimpostare la password.",
    magicLink: "La abbiamo inviato un link per il login <br />a %s.",
    signUp: "Grazie per esserti iscritto."
  },
  blankErrorHint: "Non può essere vuoto",
  codeInputPlaceholder: "il Suo codice",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "o",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "or",
  emailInputPlaceholder: "email@example.com",
  enterpriseLoginIntructions: "Effettuare il login con le credenziali aziendali.",
  enterpriseActiveLoginInstructions: "Si prega di inserire le credenziali aziendali a  %s.",
  failedLabel: "Fallito!",
  forgotPasswordAction: "Non ricordo la password?",
  forgotPasswordInstructions: "Si prega d’inserare il Suo indirizzo email. La invieremo una email per reimpostare la password.",
  invalidErrorHint: "Non valido",
  lastLoginInstructions: "L’ultima volta Lei ha effettuato l’accesso con",
  loginAtLabel: "Accedere a %s",
  loginLabel: "Accesso",
  loginWithLabel: "Accede con %s",
  notYourAccountAction: "Non è il suo account?",
  passwordInputPlaceholder: "La sua password",
  passwordStrength: {
    containsAtLeast: "Essa deve contenere almeno %d dei seguenti %d tipi di caratteri:",
    identicalChars: "Non più di %d caratteri identici in una fila (e.g., \"%s\" non autorizzato)",
    nonEmpty: "La password non vuota richiesta",
    numbers: "Numeri (i.e. 0-9)",
    lengthAtLeast: "Almeno %d caratteri di lunghezza",
    lowerCase: "Lettere minuscole (a-z)",
    shouldContain: "Dovrebbe contenere:",
    specialCharacters: "Caratteri speciali (e.g. !@#$%^&*)",
    upperCase: "Caratteri maiuscoli (A-Z)"
  },
  passwordlessEmailAlternativeInstructions: "Altrimenti, si prega d’inserare la Sua email per accedere <br> o creare un account",
  passwordlessEmailCodeInstructions: "Una email con il codice è stato inviato %s.",
  passwordlessEmailInstructions: "Si prega d’inserare la Sua email <br>o creare un account",
  passwordlessSMSAlternativeInstructions: "Altrimenti, si prega d’inserare il numero di telefono per accedere <br>o creare un account",
  passwordlessSMSCodeInstructions: "Un SMS con il codice è stato inviato<br> a %s.",
  passwordlessSMSInstructions: "Si prega d’inserare il numero di telefono <br>o creare un account",
  phoneNumberInputPlaceholder: "il Suo numero di telefono",
  resendCodeAction: "Non ha ottentuo il codice?",
  resendLabel: "Inviare di nuovo",
  resendingLabel: "Reinvio...",
  retryLabel: "Riprovare per favore",
  sentLabel: "Inviato!",
  signUpLabel: "Registrazione",
  signUpTerms: "",
  signUpWithLabel: "Registra con %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On abilitati",
  unrecoverableError: "Qualcosa è andato storto.<br />Si prega di contattare il supporto tecnico.",
  usernameFormatErrorHint: "Si prega di utilizzare 1-15 lettere, numeri e \"_\"",
  usernameInputPlaceholder: "il Suo nome utente",
  usernameOrEmailInputPlaceholder: "il Suo nome utente or email", // TODO
  title: "Auth0",
  welcome: "Benvenuto %s!",
  windowsAuthInstructions: "Si è connessi dalla rete aziendale&hellip;",
  windowsAuthLabel: "Autenticazione Windows"
});
