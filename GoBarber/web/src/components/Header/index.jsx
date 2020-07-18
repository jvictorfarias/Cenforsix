import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, HeaderContent, Profile, Info } from './styles';

import logoImg from '../../assets/logo.svg';
import { signOutRequest } from '../../store/modules/auth/actions';

const Header = () => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="logo" />
        <Profile>
          <Link to="/dashboard">
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/285/abott@adorable.png'
              }
              alt="avatar"
            />
          </Link>
          <Info>
            <span>Bem-vindo(a), </span>
            <Link to="/profile">
              <strong>{profile.name}</strong>
            </Link>
          </Info>
        </Profile>

        <button onClick={() => dispatch(signOutRequest())} type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
