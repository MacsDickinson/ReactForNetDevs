interface MenuItemProps {
    Title: string;
    Location: string;
}

class MenuItem extends React.Component<MenuItemProps, {}> {
    render() {
        return <li><a href={this.props.Location}>{this.props.Title}</a></li>
    }
}