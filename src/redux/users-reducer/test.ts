import usersReducers, { actions } from '.';
import { TInitialState } from './types';

let state: TInitialState;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'Dimych',
        followed: false,
        photos: { small: null, large: null },
        status: 'status',
      },
      {
        id: 1,
        name: 'Dasha',
        followed: false,
        photos: { small: null, large: null },
        status: 'status1',
      },
      {
        id: 2,
        name: 'Kolya',
        followed: true,
        photos: { small: null, large: null },
        status: 'status2',
      },
      {
        id: 3,
        name: 'Alena',
        followed: true,
        photos: { small: null, large: null },
        status: 'status3',
      },
      {
        id: 4,
        name: 'David',
        followed: false,
        photos: { small: null, large: null },
        status: 'status4',
      },
    ],
    friends: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    filter: {
      term: '',
    },
    isFetching: false,
    followingInProgress: [],
  };
});

test('follow success', () => {
  const newState = usersReducers(state, actions.followSuccess(1));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {
  const newState = usersReducers(state, actions.unfollowSuccess(3));

  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
