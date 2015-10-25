/// <reference path='..\definitions\react-global.d.ts' />

interface AppProps {
    Comments: CommentProps[];
    MenuItems: MenuItemProps[];
    FooterLinks: MenuItemProps[];
}

class App extends React.Component<AppProps, {}> {
    render() {
        return <div>
                <Header MenuItems={this.props.MenuItems} />
                <CommentList Comments={this.props.Comments} />
                <Footer FooterLinks={this.props.FooterLinks} />
            </div>
    }
}