import axios from "axios"

export const getUsers = async () => {

  const {data} = await axios({
    method: 'GET',
    url: '/api/reports',
  })

  return data
}

export const logIn = async (data) => {

  const response = await axios({
    method: 'POST',
    url: '/api/users/auth',
    data
  })

  return response
}

