interface HeaderProps {
    MenuItems: MenuItemProps[]
}

class Header extends React.Component<HeaderProps, {}> {
    render() {
        return <header>
            <img src="/Styles/logo.png" width="200" />
            <Menu Items={this.props.MenuItems} />
        </header>
    }
}

