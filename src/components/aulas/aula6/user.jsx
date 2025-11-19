
const User = () =>  {
  const { id } = useParams();
  return <h1>Usuário ID: {id}</h1>;
}

export default User;