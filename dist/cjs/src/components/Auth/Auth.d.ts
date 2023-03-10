/// <reference types="react" />
import { Auth as AuthProps } from '../../types';
export declare const getCssText: () => string;
declare function Auth({ supabaseClient, socialLayout, providers, view, redirectTo, onlyThirdPartyProviders, magicLink, showLinks, appearance, theme, localization, onSignUp, }: AuthProps): JSX.Element | null;
declare namespace Auth {
    var ForgottenPassword: typeof import("./interfaces/ForgottenPassword").ForgottenPassword;
    var UpdatePassword: typeof import("./interfaces/UpdatePassword").UpdatePassword;
    var MagicLink: typeof import("./interfaces/MagicLink").MagicLink;
    var UserContextProvider: (props: import("./UserContext").Props) => JSX.Element;
    var useUser: () => import("./UserContext").AuthSession;
}
export default Auth;
//# sourceMappingURL=Auth.d.ts.map