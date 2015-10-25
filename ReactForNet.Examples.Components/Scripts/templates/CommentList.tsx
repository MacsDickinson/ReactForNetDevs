/// <reference path='..\definitions\react-global.d.ts' />

interface CommentListProps {
    Comments: CommentProps[]
}

class CommentList extends React.Component<CommentListProps, {}> {
    render() {
        var commentNodes = this.props.Comments.map(function (comment) {
            return (
                <CommentLine Author={comment.Author} Message={comment.Message} />
            )
        });
        return <ul>
                { commentNodes }
            </ul>;
    }
}