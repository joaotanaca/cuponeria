import React, { HTMLAttributes } from 'react';
import { Container, Menu, Link } from './styles';
import Logo from './logo.svg';
import Inicio from './inicio.svg';
import Roupas from './roupas.svg';
import Eletronico from './eletronicos.svg';
import Acessorios from './acessorios.svg';
import { useRouter } from 'next/router';

interface SubMenuProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  name: string;
  active: boolean;
}

const components: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Container>
        <div className="logo_container container">
          <Logo />
        </div>
      </Container>
      <Menu>
        <div className="container">
          <SubMenu active={pathname === '/'} icon={<Inicio />} name="início" />
          <SubMenu active={pathname === '/aa'} icon={<Roupas />} name="roupas" />
          <SubMenu
            active={pathname === '/a'}
            icon={<Eletronico />}
            name="eletrônicos"
          />
          <SubMenu
            active={pathname === '/b'}
            icon={<Acessorios />}
            name="acessórios"
          />
        </div>
      </Menu>
    </>
  );
};

const SubMenu = ({ icon, name, ...props }: SubMenuProps) => {
  return (
    <Link {...props}>
      {icon}
      <em>{name}</em>
    </Link>
  );
};

export default components;
