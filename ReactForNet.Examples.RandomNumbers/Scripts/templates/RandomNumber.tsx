interface RandomNumberProps { refeshInterval: number; }
interface RandomNumberState { number: number; colour: string }

class RandomNumber extends React.Component<RandomNumberProps, RandomNumberState> {
    constructor(props: RandomNumberProps) {
        super();

        this.state = {
            number: this.newNumber(),
            colour: this.newColour()
        }

        window.setInterval(() => this.updateState(), props.refeshInterval);
    }
    newNumber() {
        return Math.random() * 10;
    }
    newColour() {
        var colours = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "violet"
        ]
        return colours[Math.round((Math.random() * 100) % 7)];
    }
    updateState() {
        this.setState({
            number: this.newNumber(),
            colour: this.newColour()
        });
    }
    render() {
        return <div className="randomNumber" style={{ color: this.state.colour }}>
                {this.state.number}
            </div>
    }
}