import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img width={150} src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>company-website</dt>
        <dd>{user.company.web}</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  display: flex;
  flex-wrap: wrap;

  dt {
    width: 50%;
    margin: 0;
  }
  dd {
    width: 50%;
    margin: 0;
  }
`;
