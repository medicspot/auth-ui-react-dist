'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var constants = require('../../../constants.js');
var Anchor = require('../../UI/Anchor.js');
var Button = require('../../UI/Button.js');
var Container = require('../../UI/Container.js');
require('../../UI/Divider.js');
var Input = require('../../UI/Input.js');
var Label = require('../../UI/Label.js');
var Message = require('../../UI/Message.js');

function MagicLink(_ref) {
  let {
    setAuthView,
    supabaseClient,
    redirectTo,
    i18n,
    appearance,
    showLinks
  } = _ref;

  var _a, _b, _c, _d;

  const [email, setEmail] = react.useState('');
  const [error, setError] = react.useState('');
  const [message, setMessage] = react.useState('');
  const [loading, setLoading] = react.useState(false);

  const handleMagicLinkSignIn = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const {
      error
    } = yield supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo
      }
    });
    if (error) setError(error.message);else setMessage('Check your email for the magic link');
    setLoading(false);
  });

  return jsxRuntime.jsx("form", Object.assign({
    id: "auth-magic-link",
    onSubmit: handleMagicLinkSignIn
  }, {
    children: jsxRuntime.jsxs(Container.Container, Object.assign({
      gap: "large",
      direction: "vertical",
      appearance: appearance
    }, {
      children: [jsxRuntime.jsxs(Container.Container, Object.assign({
        gap: "large",
        direction: "vertical",
        appearance: appearance
      }, {
        children: [jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx(Label.Label, Object.assign({
            appearance: appearance
          }, {
            children: (_a = i18n === null || i18n === void 0 ? void 0 : i18n.magic_link) === null || _a === void 0 ? void 0 : _a.email_input_label
          })), jsxRuntime.jsx(Input.Input, {
            type: "email",
            placeholder: (_b = i18n === null || i18n === void 0 ? void 0 : i18n.magic_link) === null || _b === void 0 ? void 0 : _b.email_input_placeholder,
            onChange: e => setEmail(e.target.value),
            appearance: appearance
          })]
        }), jsxRuntime.jsx(Button.Button, Object.assign({
          color: "primary",
          type: "submit",
          loading: loading,
          appearance: appearance
        }, {
          children: (_c = i18n === null || i18n === void 0 ? void 0 : i18n.magic_link) === null || _c === void 0 ? void 0 : _c.button_label
        }))]
      })), showLinks && jsxRuntime.jsx(Anchor.Anchor, Object.assign({
        href: "#auth-sign-in",
        onClick: e => {
          e.preventDefault();
          setAuthView(constants.VIEWS.SIGN_IN);
        },
        appearance: appearance
      }, {
        children: (_d = i18n === null || i18n === void 0 ? void 0 : i18n.sign_in) === null || _d === void 0 ? void 0 : _d.link_text
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
    }))
  }));
}

exports.MagicLink = MagicLink;
