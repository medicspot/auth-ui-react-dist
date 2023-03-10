/// <reference types="react" />
import { Appearance } from '../../types';
interface MessageProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    color?: 'default' | 'danger';
    appearance?: Appearance;
}
declare const Message: React.FC<MessageProps>;
export { Message };
//# sourceMappingURL=Message.d.ts.map