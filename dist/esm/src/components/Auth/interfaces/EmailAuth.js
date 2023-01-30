import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { Anchor } from '../../UI/Anchor.js';
import { Button } from '../../UI/Button.js';
import { Container } from '../../UI/Container.js';
import '../../UI/Divider.js';
import { Input } from '../../UI/Input.js';
import { Label } from '../../UI/Label.js';
import { Message } from '../../UI/Message.js';

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
    appearance
  } = _ref;

  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

  const isMounted = useRef(true);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    return () => {
      isMounted.current = false;
    };
  }, [authView]);

  const handleSubmit = e => __awaiter(this, void 0, void 0, function* () {
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
        const {
          data: {
            user: signUpUser,
            session: signUpSession
          },
          error: signUpError
        } = yield supabaseClient.auth.signUp(Object.assign({
          email,
          password
        }, redirectTo && {
          options: {
            emailRedirectTo: redirectTo
          }
        }));
        if (signUpError) setError(signUpError.message); // Check if session is null -> email confirmation setting is turned on
        else if (signUpUser && !signUpSession) setMessage('Check your email for the confirmation link.');
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

  return jsxs("form", Object.assign({
    id: authView === 'sign_in' ? `auth-sign-in` : `auth-sign-up`,
    onSubmit: handleSubmit,
    autoComplete: 'on',
    style: {
      width: '100%'
    }
  }, {
    children: [jsxs(Container, Object.assign({
      direction: "vertical",
      gap: "large",
      appearance: appearance
    }, {
      children: [jsxs(Container, Object.assign({
        direction: "vertical",
        gap: "large",
        appearance: appearance
      }, {
        children: [jsxs("div", {
          children: [jsx(Label, Object.assign({
            htmlFor: "email",
            appearance: appearance
          }, {
            children: (_a = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _a === void 0 ? void 0 : _a.email_label
          })), jsx(Input, {
            type: "email",
            name: "email",
            placeholder: (_b = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _b === void 0 ? void 0 : _b.email_input_placeholder,
            defaultValue: email,
            onChange: e => setEmail(e.target.value),
            autoComplete: "email",
            appearance: appearance
          })]
        }), jsxs("div", {
          children: [jsx(Label, Object.assign({
            htmlFor: "password",
            appearance: appearance
          }, {
            children: (_c = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _c === void 0 ? void 0 : _c.password_label
          })), jsx(Input, {
            type: "password",
            name: "password",
            placeholder: (_d = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _d === void 0 ? void 0 : _d.password_input_placeholder,
            defaultValue: password,
            onChange: e => setPassword(e.target.value),
            autoComplete: authView === 'sign_in' ? 'current-password' : 'new-password',
            appearance: appearance
          })]
        })]
      })), jsx(Button, Object.assign({
        type: "submit",
        color: "primary",
        loading: loading,
        appearance: appearance
      }, {
        children: (_e = i18n === null || i18n === void 0 ? void 0 : i18n[authView]) === null || _e === void 0 ? void 0 : _e.button_label
      })), showLinks && jsxs(Container, Object.assign({
        direction: "vertical",
        gap: "small",
        appearance: appearance
      }, {
        children: [authView === VIEWS.SIGN_IN && magicLink && jsx(Anchor, Object.assign({
          href: "#auth-magic-link",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.MAGIC_LINK);
          },
          appearance: appearance
        }, {
          children: (_f = i18n === null || i18n === void 0 ? void 0 : i18n.magic_link) === null || _f === void 0 ? void 0 : _f.link_text
        })), authView === VIEWS.SIGN_IN && jsx(Anchor, Object.assign({
          href: "#auth-forgot-password",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.FORGOTTEN_PASSWORD);
          },
          appearance: appearance
        }, {
          children: (_g = i18n === null || i18n === void 0 ? void 0 : i18n.forgotten_password) === null || _g === void 0 ? void 0 : _g.link_text
        })), authView === VIEWS.SIGN_IN ? jsx(Anchor, Object.assign({
          href: "#auth-sign-up",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_UP);
          },
          appearance: appearance
        }, {
          children: (_h = i18n === null || i18n === void 0 ? void 0 : i18n.sign_up) === null || _h === void 0 ? void 0 : _h.link_text
        })) : jsx(Anchor, Object.assign({
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
    })), message && jsx(Message, Object.assign({
      appearance: appearance
    }, {
      children: message
    })), error && jsx(Message, Object.assign({
      color: "danger",
      appearance: appearance
    }, {
      children: error
    }))]
  }));
}

export { EmailAuth };
