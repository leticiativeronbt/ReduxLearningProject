export default function (state = null, action) {
  if (action.type === 'JOB_LIST') {
    return action.payload
  }
  return state
}
