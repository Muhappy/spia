import axios from 'utils/axios'
import { setToken, getToken } from './TokenServices'


export async function login(credentials:any) {
    const {data} = await axios.post('/users/login', credentials)
    await setToken(data.data.token)
}

export async function loadUser() {
    const token = await getToken()
    const {data:user} = await axios.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return user
}
