class HelloWorld extends React.Component {
    // Set the intial state of the component by calling this function
    constructor() {
        return { name: this.props.name }
    }
    // Handle the onChange event on the input - bound below
    handleChange(e) {
        e.preventDefault();

        var name = this.refs.name.getDOMNode().value;
        this.setState({ name: name });
    }

    render() {
        return <div>
                <h1 style={{ color: this.state.name }}>Hello {this.state.name}</h1>
                <input type="text" ref="name" onChange={this.handleChange} value={this.state.name} />
        </div>
    }
}

var mountNode = document.getElementById('welcomeMessage');
React.render(<HelloWorld name="World" />, mountNode);