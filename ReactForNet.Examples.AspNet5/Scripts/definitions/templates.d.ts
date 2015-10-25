/// <reference path="../definitions/react-global.d.ts" />
interface Props {
    name: string;
}
interface State {
    name: string;
}
declare class HelloWorld extends React.Component<Props, State> {
    constructor(props: any);
    handleChange(e: React.FormEvent): void;
    render(): JSX.Element;
}
