interface AppProps { count: number; }

class App extends React.Component<AppProps, {}> {
    render() {
        var numbers = [];
        for (var n = 1; n <= this.props.count; n++) {
            numbers.push(<RandomNumber refeshInterval={n} />);
        }

        return <div>
                {numbers}
            </div>;
    }
}

var mountNode = document.getElementById('app');
React.render(<App count={1000} />, mountNode);