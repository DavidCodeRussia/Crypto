import { follow } from ".";
import { APIResponseType, EResultCode } from "../../API/api";
import { usersAPI } from "../../API/users-api";

jest.mock("../../API/users-api");

const usersAPIMock = usersAPI;
const result: APIResponseType = {
  resultCode: EResultCode.Success,
  messages: [],
  data: {},
};
// @ts-ignore
usersAPIMock.follow.mockReturnValue(Promise.resolve(result));

test("", () => {
  const thunk = follow(1);
  const dispatchMock = jest.fn();
  // @ts-ignore
  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);
});
