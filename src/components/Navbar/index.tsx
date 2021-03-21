import React, { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UrlObject } from 'node:url';
import { Container, Menu, LinkButton } from './styles';
import Logo from './logo.svg';
import Inicio from './inicio.svg';
import Roupas from './roupas.svg';
import Eletronico from './eletronicos.svg';
import Acessorios from './acessorios.svg';

interface SubMenuProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  name: string;
  active: boolean;
  href: string | UrlObject;
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
          <SubMenu
            active={pathname === '/'}
            icon={<Inicio />}
            name="início"
            href="/"
          />
          <SubMenu
            active={pathname === '/aa'}
            icon={<Roupas />}
            name="roupas"
            href="/roupas"
          />
          <SubMenu
            active={pathname === '/a'}
            icon={<Eletronico />}
            name="eletrônicos"
            href="/eletronicos"
          />
          <SubMenu
            active={pathname === '/b'}
            icon={<Acessorios />}
            name="acessórios"
            href="/acessórios"
          />
        </div>
      </Menu>
    </>
  );
};

const SubMenu = ({ icon, name, href, ...props }: SubMenuProps) => {
  return (
    <Link href={href}>
      <LinkButton {...props}>
        {icon}
        <em>{name}</em>
      </LinkButton>
    </Link>
  );
};

export default components;
