interface Props { name: string; }
interface State { name: string; }

class HelloWorld extends React.Component<Props, State> {
    constructor(props) {
        super();
        this.state = { name: props.name}
    }
    handleChange(e: React.FormEvent) {
        e.preventDefault();
        var nameNode = React.findDOMNode<HTMLInputElement>(this.refs["name"]);
        var name = nameNode.value.trim();
        this.setState({ name: name });
    }
    render() {
        return <div>
            <h1 style={{ color: this.state.name }}>Hello {this.state.name}</h1>
            <input type="text" ref="name" onChange={e => this.handleChange(e) } value={this.state.name} />
        </div>;
    }
}

var mountNode = document.getElementById('welcomeMessage');
React.render(<HelloWorld name="World" />, mountNode);