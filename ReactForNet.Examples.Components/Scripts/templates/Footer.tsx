interface FooterProps {
    FooterLinks: MenuItemProps[];
}

class Footer extends React.Component<FooterProps, {}> {
    render() {
        var footerLinks = this.props.FooterLinks.map(function (link) {
            return <MenuItem Title={link.Title} Location={link.Location} />
        });

        return <footer>
            <ul>
                <li> &copy; {new Date().getFullYear() } ACME Corp</li>
                {footerLinks}
            </ul>
        </footer>
    }
}