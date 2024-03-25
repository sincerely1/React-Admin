import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import { UserApi } from "@/api/services/userService";

import { USER_LIST } from "./assets/user.js";

const login = http.post(`/api${UserApi.Login}`, async ({ request }) => {
  const { username, password } = await request.json();

  const user = USER_LIST.find((item) => item.username === username);

  if (!user || user.password !== password) {
    return HttpResponse.json({
      code: 404,
      message: "Incorrect username or password.",
    });
  }

  return HttpResponse.json({
    code: 200,
    message: "",
    data: {
      user,
      accessToken: faker.string.uuid(),
    },
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userList = http.get("/api/users", (req) => {
  return HttpResponse.json({
    data: Array.from({ length: 10 }).map(() => ({
      fullname: faker.person.fullName(),
      email: faker.internet.email(),
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
      address: faker.location.streetAddress(),
    })),
  });
});
const userInfo = http.post(`/api${UserApi.UserInfo}`, async ({ request }) => {
  const { username } = await request.json();

  const user = USER_LIST.find((item) => item.username === username);

  return HttpResponse.json({
    code: 200,
    message: "",
    data: {
      user,
    },
  });
});

export default [login, userList, userInfo];
