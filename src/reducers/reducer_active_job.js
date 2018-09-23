// this state contains only the part of app state this reducer is responsible for
export default function (state = null, action) {
  if (action.type === 'JOB_SELECTED') {
    return action.payload
  }
  return state
}
