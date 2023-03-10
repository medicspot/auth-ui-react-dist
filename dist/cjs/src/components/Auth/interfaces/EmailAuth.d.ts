/// <reference types="react" />
import { SupabaseClient } from '@supabase/supabase-js';
import { Appearance, I18nVariables, RedirectTo, ViewSignUp, ViewSignIn } from './../../../types';
export interface EmailAuthProps {
    authView: ViewSignIn | ViewSignUp;
    defaultEmail: string;
    defaultPassword: string;
    setAuthView: any;
    setDefaultEmail: (email: string) => void;
    setDefaultPassword: (password: string) => void;
    supabaseClient: SupabaseClient;
    showLinks?: boolean;
    redirectTo?: RedirectTo;
    magicLink?: boolean;
    i18n: I18nVariables;
    appearance?: Appearance;
    onSignUp?: () => void;
}
declare function EmailAuth({ authView, defaultEmail, defaultPassword, setAuthView, setDefaultEmail, setDefaultPassword, supabaseClient, showLinks, redirectTo, magicLink, i18n, appearance, onSignUp, }: EmailAuthProps): JSX.Element;
export { EmailAuth };
//# sourceMappingURL=EmailAuth.d.ts.map