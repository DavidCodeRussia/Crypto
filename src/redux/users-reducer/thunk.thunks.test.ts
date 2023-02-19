import { follow, actions, unfollow } from '.';
import { APIResponseType, EResultCode } from '../../API/api';
import { usersAPI } from '../../API/users-api';

jest.mock('../../API/users-api');

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const result: APIResponseType = {
  resultCode: EResultCode.Success,
  messages: [],
  data: {},
};

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  usersAPIMock.follow.mockClear();
  usersAPIMock.unfollow.mockClear();
});

test('follow logic', async () => {
  usersAPIMock.follow.mockReturnValue(Promise.resolve(result));
  const thunk = follow(1);
  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

test('unfollow logic', async () => {
  usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result));
  const thunk = unfollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});
