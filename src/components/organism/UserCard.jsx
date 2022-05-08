import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "./user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
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
    </Card>
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
    overflow-wrap: break-word;
  }
`;
