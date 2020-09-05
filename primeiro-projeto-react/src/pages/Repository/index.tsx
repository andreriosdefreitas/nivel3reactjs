import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoGithub from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoGithub} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/6298843?s=400&u=1c8209177ecef4773a53c55ccd53b810ad803010&v=4"
            alt="Owner"
          />
          <div>
            <strong>sfasfasdfasdfa</strong>
            <p>asdfasdfasdf</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123123</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>123123</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>123123</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="fdwfsdfs">
          <div>
            <strong>safasdfa</strong>
            <p>safasdfa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
