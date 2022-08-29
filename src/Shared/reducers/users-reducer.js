export default function usersReducer(state, action) {
  switch (action.type) {
    case "POPULATE_USERS":
      return action.users;
    case "ADD_USER":
      return [...state, action.user];
    case "UPDATE_USER":
      return [
        ...[state.users.filter((user) => user.mobile !== action.user.mobile)],
        action.user,
      ];
    default:
      return state;
  }
}
