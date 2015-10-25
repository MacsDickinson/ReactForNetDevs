interface MenuProps {
    Items: MenuItemProps[];
}

class Menu extends React.Component<MenuProps, {}> {
    render() {
        var menuItems = this.props.Items.map(function (item) {
            return <MenuItem Title={item.Title} Location={item.Location} />
        });

        return <ul> {menuItems} </ul>
    }
}
