import { jsx, jsxs } from 'react/jsx-runtime';
import { createStitches, createTheme } from '@stitches/core';
import { merge } from '../../utils.js';
import { useState, useEffect } from 'react';
import { VIEWS } from '../../constants.js';
import { MagicLink } from './interfaces/MagicLink.js';
import { SocialAuth } from './interfaces/SocialAuth.js';
import { EmailAuth } from './interfaces/EmailAuth.js';
import { ForgottenPassword } from './interfaces/ForgottenPassword.js';
import { UpdatePassword } from './interfaces/UpdatePassword.js';
import { UserContextProvider, useUser } from './UserContext.js';
import * as index from '../../../common/lib/Localization/index.js';

const defaultLocalization = Object.assign({}, index);
const {
  getCssText
} = createStitches();

function Auth(_ref) {
  let {
    supabaseClient,
    socialLayout = 'vertical',
    providers,
    view = 'sign_in',
    redirectTo,
    onlyThirdPartyProviders = false,
    magicLink = false,
    showLinks = true,
    appearance,
    theme = 'default',
    localization = {
      lang: 'en'
    },
    onSignUp
  } = _ref;

  /**
   * Localization support
   */
  var _a, _b;

  const i18n = merge(defaultLocalization[(_a = localization.lang) !== null && _a !== void 0 ? _a : 'en'], (_b = localization.variables) !== null && _b !== void 0 ? _b : {}); // const themes = Object.values(appearance.themeFile ?? {}).map((theme) => {
  //   // return
  // })

  const [authView, setAuthView] = useState(view);
  const [defaultEmail, setDefaultEmail] = useState('');
  const [defaultPassword, setDefaultPassword] = useState('');
  const [themes, setThemes] = useState({});
  /**
   * Simple boolean to detect if authView 'sign_in' or 'sign_up' is used
   *
   * @returns boolean
   */

  const SignView = authView === 'sign_in' || authView === 'sign_up';
  useEffect(() => {
    var _a, _b, _c, _d;
    /**
     * Create default theme
     *
     * createStitches()
     * https://stitches.dev/docs/api#theme
     *
     * to add a new theme use  createTheme({})
     * https://stitches.dev/docs/api#theme
     */


    createStitches({
      theme: merge((_b = (_a = appearance === null || appearance === void 0 ? void 0 : appearance.theme) === null || _a === void 0 ? void 0 : _a.default) !== null && _b !== void 0 ? _b : {}, (_d = (_c = appearance === null || appearance === void 0 ? void 0 : appearance.variables) === null || _c === void 0 ? void 0 : _c.default) !== null && _d !== void 0 ? _d : {})
    });
    const themessss = {};
    const themeKeys = (appearance === null || appearance === void 0 ? void 0 : appearance.theme) && Object.keys(appearance === null || appearance === void 0 ? void 0 : appearance.theme);

    if (themeKeys) {
      appearance.theme && Object.values(appearance.theme).map((theme, i) => {
        var _a, _b;

        const key = themeKeys[i]; // ignore default theme

        if (key === 'default') return {};
        const merged = merge((_a = appearance && appearance.theme && appearance.theme[key]) !== null && _a !== void 0 ? _a : {}, (_b = appearance && appearance.variables && appearance.variables[key]) !== null && _b !== void 0 ? _b : {});
        themessss[themeKeys[i]] = merged;
      });
    }

    setThemes(themessss);
  }, []);
  /**
   * Wraps around all auth components
   * renders the social auth providers if SignView is true
   *
   * also handles the theme override
   *
   * @param children
   * @returns React.ReactNode
   */

  const Container = _ref2 => {
    let {
      title,
      children
    } = _ref2;

    var _a, _b;

    return (// @ts-ignore
      jsxs("div", Object.assign({
        className: theme !== 'default' ? createTheme(merge( // @ts-ignore
        appearance === null || appearance === void 0 ? void 0 : appearance.theme[theme], (_b = (_a = appearance === null || appearance === void 0 ? void 0 : appearance.variables) === null || _a === void 0 ? void 0 : _a[theme]) !== null && _b !== void 0 ? _b : {})) : ''
      }, {
        children: [title && jsx("div", {
          children: jsx("h1", Object.assign({
            className: "t-36 mx-auto mb-8 max-w-[555px] text-darkNavy text-center md:mb-[40px]"
          }, {
            children: title
          }))
        }), SignView && jsx(SocialAuth, {
          appearance: appearance,
          supabaseClient: supabaseClient,
          providers: providers,
          socialLayout: socialLayout,
          redirectTo: redirectTo,
          onlyThirdPartyProviders: onlyThirdPartyProviders,
          i18n: i18n,
          view: authView
        }), !onlyThirdPartyProviders && children]
      }))
    );
  };

  useEffect(() => {
    /**
     * Overrides the authview if it is changed externally
     */
    setAuthView(view);
  }, [view]);
  const emailProp = {
    supabaseClient,
    setAuthView,
    defaultEmail,
    defaultPassword,
    setDefaultEmail,
    setDefaultPassword,
    redirectTo,
    magicLink,
    showLinks,
    i18n,
    appearance,
    onSignUp
  };
  /**
   * View handler, displays the correct Auth view
   * all views are wrapped in <Container/>
   */

  switch (authView) {
    case VIEWS.SIGN_IN:
      return jsx(Container, Object.assign({
        title: "Sign in"
      }, {
        children: jsx(EmailAuth, Object.assign({}, emailProp, {
          authView: 'sign_in'
        }))
      }));

    case VIEWS.SIGN_UP:
      return jsx(Container, Object.assign({
        title: "Create an account"
      }, {
        children: jsx(EmailAuth, {
          appearance: appearance,
          supabaseClient: supabaseClient,
          authView: 'sign_up',
          setAuthView: setAuthView,
          defaultEmail: defaultEmail,
          defaultPassword: defaultPassword,
          setDefaultEmail: setDefaultEmail,
          setDefaultPassword: setDefaultPassword,
          redirectTo: redirectTo,
          magicLink: magicLink,
          showLinks: showLinks,
          i18n: i18n,
          onSignUp: onSignUp
        })
      }));

    case VIEWS.FORGOTTEN_PASSWORD:
      return jsx(Container, Object.assign({
        title: "Reset password"
      }, {
        children: jsx(ForgottenPassword, {
          appearance: appearance,
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo,
          showLinks: showLinks,
          i18n: i18n
        })
      }));

    case VIEWS.MAGIC_LINK:
      return jsx(Container, {
        children: jsx(MagicLink, {
          appearance: appearance,
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo,
          showLinks: showLinks,
          i18n: i18n
        })
      });

    case VIEWS.UPDATE_PASSWORD:
      return jsx(Container, {
        children: jsx(UpdatePassword, {
          appearance: appearance,
          supabaseClient: supabaseClient,
          i18n: i18n
        })
      });

    default:
      return null;
  }
} // @ts-ignore


Auth.ForgottenPassword = ForgottenPassword; // @ts-ignore

Auth.UpdatePassword = UpdatePassword; // @ts-ignore

Auth.MagicLink = MagicLink; // @ts-ignore

Auth.UserContextProvider = UserContextProvider; // @ts-ignore

Auth.useUser = useUser;

export { Auth as default, getCssText };
