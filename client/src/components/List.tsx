import { User } from "../types/User";
type Props = {
  userList: User[];
};
function List({userList}:Props) {

  return (
    <ul>
      {userList?.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default List;