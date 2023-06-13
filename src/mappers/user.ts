import { dateTime } from "@helpers";

function createUserMapper(user: Object) {
  const { name, email }: any = user;

  return {
    id: Math.floor(Math.random()),
    name,
    email,
    created_at: dateTime.now,
  };
}

export default {
  createUserMapper,
};
