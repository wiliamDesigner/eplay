import { HeaderBar, Links, linkItem } from './styles'
import logo from '../../assets/image/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="eplay" />
    <nav>
      <Links>
        <linkItem>
          <a href="#">Categoria</a>
        </linkItem>
        <linkItem>
          <a href="#">Novidades</a>
        </linkItem>
        <linkItem>
          <a href="#">Promoções</a>
        </linkItem>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
