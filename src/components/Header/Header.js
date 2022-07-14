import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopWrapper>
            <Logo />
          </DesktopWrapper>
          <ActionGroup>
            <DesktopButtonWrapper>
              <Button>
                Subscribe
              </Button>
              <LoginLink href="#">Already a subscriber?</LoginLink>
            </DesktopButtonWrapper>
            <MobileWrapper>
              <button>
                <User size={24} />
              </button>
            </MobileWrapper>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background-color: var(--color-gray-100);
    color:  var(--color-gray-900);
    padding: 8px 0;
    margin-bottom: 80px;
    margin-top: 16px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const MobileWrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopButtonWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    margin-bottom: -4px;
  }
`;

const LoginLink = styled.a`
  text-decoration: underline;
  font-style: italic;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export default Header;
