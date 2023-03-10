'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var Anchor = require('../../UI/Anchor.js');
var Button = require('../../UI/Button.js');
var Container = require('../../UI/Container.js');
require('../../UI/Divider.js');
var Input = require('../../UI/Input.js');
var Label = require('../../UI/Label.js');
var Message = require('../../UI/Message.js');

const VIEWS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password'
};

function EmailAuth(_ref) {
  let {
    authView = 'sign_in',
    defaultEmail,
    defaultPassword,
    setAuthView,
    setDefaultEmail,
    setDefaultPassword,
    supabaseClient,
    showLinks = true,
    redirectTo,
    magicLink,
    i18n,
    appearance,
    onSignUp
  } = _ref;

  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

  const isMounted = react.useRef(true);
  const [email, setEmail] = react.useState(defaultEmail);
  const [password, setPassword] = react.useState(defaultPassword);
  const [error, setError] = react.useState('');
  const [loading, setLoading] = react.useState(false);
  const [message, setMessage] = react.useState('');
  react.useEffect(() => {
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    return () => {
      isMounted.current = false;
    };
  }, [authView]);

  const handleSubmit = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setLoading(true);

    switch (authView) {
      case 'sign_in':
        const {
          error: signInError
        } = yield supabaseClient.auth.signInWithPassword({
          email,
          password
        });
        if (signInError) setError(signInError.message);
        break;

      case 'sign_up':
        let signUp;

        if (redirectTo) {
          signUp = supabaseClient.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: redirectTo
            }
          });
        } else {
          signUp = supabaseClient.auth.signUp({
            email,
            password
          });
        }

        const {
          data: {
            user: signUpUser,
            session: signUpSession
          },
          error: signUpError
        } = yield signUp;
        if (signUpError) setError(signUpError.message); // Check if session is null -> email confirmation setting is turned on
        else if (signUpUser && !signUpSession) {
          setMessage('Check your email for the confirmation link.');
          onSignUp === null || onSignUp === void 0 ? void 0 : onSignUp();
        }
        break;
    }
    /*
     * it is possible the auth component may have been unmounted at this point
     * check if component is mounted before setting a useState
     */


    if (isMounted.current) setLoading(false);
  });

  const handleViewChange = newView => {
    setDefaultEmail(email);
    setDefaultPassword(password);
    setAuthView(newView);
  };

  return jsxRuntime.jsxs("form", Object.assign({
    id: authView === 'sign_in' ? `auth-sign-in` : `auth-sign-up`,
    onSubmit: handleSubmit,
    autoComplete: 'on',
    style: {
      width: '100%'
    }
  }, {
    children: [jsxRuntime.jsxs(Container.Container, Object.assign({
      direction: "vertical",
      gap: "large",
      appearance: appearance
    }, {
      children: [jsxRuntime.jsxs(Container.Container, Object.assign({
        direction: "vertical",
        gap: "large",
        appearance: appearance
      }, {
        children: [jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx(Label.Label, Object.assign({
            htmlFor: "email",
            appearance: appearance
          }, {
            children: (_a = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _a === void 0 ? void 0 : _a.email_label
          })), jsxRuntime.jsx(Input.Input, {
            type: "email",
            name: "email",
            placeholder: (_b = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _b === void 0 ? void 0 : _b.email_input_placeholder,
            defaultValue: email,
            onChange: e => setEmail(e.target.value),
            autoComplete: "email",
            appearance: appearance
          })]
        }), jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx(Label.Label, Object.assign({
            htmlFor: "password",
            appearance: appearance
          }, {
            children: (_c = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _c === void 0 ? void 0 : _c.password_label
          })), jsxRuntime.jsx(Input.Input, {
            type: "password",
            name: "password",
            placeholder: (_d = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _d === void 0 ? void 0 : _d.password_input_placeholder,
            defaultValue: password,
            onChange: e => setPassword(e.target.value),
            autoComplete: authView === 'sign_in' ? 'current-password' : 'new-password',
            appearance: appearance
          })]
        })]
      })), jsxRuntime.jsx(Button.Button, Object.assign({
        type: "submit",
        color: "primary",
        loading: loading,
        appearance: appearance
      }, {
        children: (_e = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _e === void 0 ? void 0 : _e.button_label
      })), showLinks && jsxRuntime.jsxs(Container.Container, Object.assign({
        direction: "vertical",
        gap: "small",
        appearance: appearance
      }, {
        children: [authView === VIEWS.SIGN_IN && magicLink && jsxRuntime.jsx(Anchor.Anchor, Object.assign({
          href: "#auth-magic-link",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.MAGIC_LINK);
          },
          appearance: appearance
        }, {
          children: (_f = i18n === null || i18n === void 0 ? void 0 : i18n.magic_link) === null || _f === void 0 ? void 0 : _f.link_text
        })), authView === VIEWS.SIGN_IN && jsxRuntime.jsx(Anchor.Anchor, Object.assign({
          href: "#auth-forgot-password",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.FORGOTTEN_PASSWORD);
          },
          appearance: appearance
        }, {
          children: (_g = i18n === null || i18n === void 0 ? void 0 : i18n.forgotten_password) === null || _g === void 0 ? void 0 : _g.link_text
        })), authView === VIEWS.SIGN_IN ? jsxRuntime.jsx(Anchor.Anchor, Object.assign({
          href: "#auth-sign-up",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_UP);
          },
          appearance: appearance
        }, {
          children: (_h = i18n === null || i18n === void 0 ? void 0 : i18n.sign_up) === null || _h === void 0 ? void 0 : _h.link_text
        })) : jsxRuntime.jsx(Anchor.Anchor, Object.assign({
          href: "#auth-sign-in",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_IN);
          },
          appearance: appearance
        }, {
          children: (_j = i18n === null || i18n === void 0 ? void 0 : i18n.sign_in) === null || _j === void 0 ? void 0 : _j.link_text
        }))]
      }))]
    })), message && jsxRuntime.jsx(Message.Message, Object.assign({
      appearance: appearance
    }, {
      children: message
    })), error && jsxRuntime.jsx(Message.Message, Object.assign({
      color: "danger",
      appearance: appearance
    }, {
      children: error
    }))]
  }));
}

exports.EmailAuth = EmailAuth;
