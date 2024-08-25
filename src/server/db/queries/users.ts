import { Query } from "../";
import { MysqlResponse, UsersTable } from "../models";

const find = (column: string, email: string) =>
  Query<UsersTable[]>("SELECT * FROM users WHERE ?? = ?;", [column, email]);
const insert = () => Query<MysqlResponse>("");

export default {
  find,
  insert,
};
