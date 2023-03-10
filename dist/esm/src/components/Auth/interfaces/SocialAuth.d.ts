/// <reference types="react" />
import { Provider, SupabaseClient } from '@supabase/supabase-js';
import { Appearance, I18nVariables, SocialLayout } from '../../../types';
interface SocialAuthProps {
    supabaseClient: SupabaseClient;
    socialLayout: SocialLayout;
    providers?: Provider[];
    redirectTo: RedirectTo;
    onlyThirdPartyProviders: boolean;
    view: 'sign_in' | 'sign_up';
    i18n: I18nVariables;
    appearance?: Appearance;
}
declare type RedirectTo = undefined | string;
declare function SocialAuth({ supabaseClient, socialLayout, providers, redirectTo, onlyThirdPartyProviders, view, i18n, appearance, }: SocialAuthProps): JSX.Element;
export { SocialAuth };
//# sourceMappingURL=SocialAuth.d.ts.map