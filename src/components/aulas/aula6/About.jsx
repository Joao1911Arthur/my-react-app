import { useParams } from 'react-router-dom';

const About = () => {
  const { id } = useParams();
  return <h1>Usuário ID: {id}</h1>;
};

export default About;

