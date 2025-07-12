import axios from "axios"

export const countIncrementHandler = () => {
  return {type: 'countIncrement'}
}
export const getUsersHandler = () => {
  return async function (dispatch) {
    try {
      const getUsers = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
      console.log(getUsers, "==>> getUsers")

      dispatch({
        type: 'addUsers',
        payload: getUsers.data.data
      })
    } catch (error) {
      console.log(error, "==>>> error")
    }
  }
}