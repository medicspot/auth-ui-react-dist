/// <reference types="react" />
import { Appearance } from '../../types';
export interface LoaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    appearance?: Appearance;
}
declare function Loader({ appearance, ...props }: LoaderProps): JSX.Element;
export { Loader };
//# sourceMappingURL=Loader.d.ts.map