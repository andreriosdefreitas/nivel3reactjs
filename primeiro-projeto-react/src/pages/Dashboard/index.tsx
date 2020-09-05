import React from 'react';

import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoGithub from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoGithub} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/6298843?s=460&u=1c8209177ecef4773a53c55ccd53b810ad803010&v=4"
          alt="Profile"
        />
        <div>
          <strong>repository/repo1</strong>
          <p>Descrição do repositorio</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/6298843?s=460&u=1c8209177ecef4773a53c55ccd53b810ad803010&v=4"
          alt="Profile"
        />
        <div>
          <strong>repository/repo1</strong>
          <p>Descrição do repositorio</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
