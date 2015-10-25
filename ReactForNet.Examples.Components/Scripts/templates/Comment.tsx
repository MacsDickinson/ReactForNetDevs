interface CommentProps {
    Message: string,
    Author: string
}

class CommentLine extends React.Component<CommentProps, {}> {
    render() {
        return <li><b>{ this.props.Author }</b> : { this.props.Message } </li>
    }
}