import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://test-backend.itdelta.agency/api',
})

export default instance