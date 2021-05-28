// Styles
import { Wrapper } from './ListItem.styles';
// IMG
import TypeScriptLogo from '../../assets/typescritptLogo.png'
import JavaScriptLogo from '../../assets/javascritptLogo.png'

type Props = {
    href: string;
    language: string;
}

const ListItem: React.FC<Props> = (props) => (
    <Wrapper target={'_blank'} href={props.href}>
        <img
            src={props.language === 'typescript' ? TypeScriptLogo : JavaScriptLogo}
            alt={props.language}
        />
        <span>{props.children}</span>
    </Wrapper>
)


export default ListItem