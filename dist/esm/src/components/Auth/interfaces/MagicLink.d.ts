/// <reference types="react" />
import { SupabaseClient } from '@supabase/supabase-js';
import { Appearance, I18nVariables, RedirectTo } from '../../../types';
declare function MagicLink({ setAuthView, supabaseClient, redirectTo, i18n, appearance, showLinks, }: {
    setAuthView: any;
    supabaseClient: SupabaseClient;
    redirectTo?: RedirectTo;
    i18n: I18nVariables;
    appearance?: Appearance;
    showLinks?: boolean;
}): JSX.Element;
export { MagicLink };
//# sourceMappingURL=MagicLink.d.ts.map