/// <reference types="react" />
import { Auth } from './';
declare const _default: {
    title: string;
    component: typeof Auth;
};
export default _default;
export declare const Default: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
    };
};
export declare const withSocialAuth: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
        providers: string[];
    };
};
export declare const withAllSocialAuth: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
        providers: string[];
    };
};
export declare const withSocialLargeButtons: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
        providers: string[];
        socialButtonSize: string;
    };
};
export declare const withColouredSocialAuth: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
        socialColors: boolean;
        providers: string[];
    };
};
export declare const withSocialAuthHorizontal: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
        providers: string[];
        socialLayout: string;
    };
};
export declare const updatePassword: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
    };
};
export declare const magicLink: {
    (args: any): JSX.Element;
    args: {
        supabaseClient: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
    };
};
export declare const withCustomClassNames: (args: any) => JSX.Element;
export declare const ChangeViewState: (args: any) => JSX.Element;
//# sourceMappingURL=Auth.stories.d.ts.map