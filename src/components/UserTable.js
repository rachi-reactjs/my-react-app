import "./UserTable.css";
const UserTable = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
