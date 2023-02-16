import { follow, actions } from ".";
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

test("follow logic", async () => {
  const thunk = follow(1);
  const dispatchMock = jest.fn();
  // @ts-ignore
  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 3));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(3));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowingProgress(false, 3));
});
