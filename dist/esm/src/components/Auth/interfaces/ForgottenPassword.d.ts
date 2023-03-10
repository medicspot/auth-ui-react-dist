/// <reference types="react" />
import { SupabaseClient } from '@supabase/supabase-js';
import { Appearance, I18nVariables, RedirectTo } from '../../../types';
declare function ForgottenPassword({ setAuthView, supabaseClient, redirectTo, i18n, appearance, showLinks, }: {
    setAuthView: any;
    supabaseClient: SupabaseClient;
    redirectTo?: RedirectTo;
    i18n: I18nVariables;
    appearance?: Appearance;
    showLinks?: boolean;
}): JSX.Element;
export { ForgottenPassword };
//# sourceMappingURL=ForgottenPassword.d.ts.map