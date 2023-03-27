import axios from 'axios';

// import { Slide, toast } from 'react-toastify';

// const navigate = useNavigate();

// console.log(process.env.REACT_APP_SERVER);

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const headerconfi = config;
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            headerconfi.headers.Authorization = `bearer ${token.accessToken}`;
            // headerconfi.headers['x-access-token'] = token.accessToken;
        }
        return headerconfi;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== '/employee/login' && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const token = JSON.parse(localStorage.getItem('token'));

                    if (token) {
                        const { refreshToken } = token;

                        await instance
                            .post('/utils/adminrefreshToken', {
                                refreshToken,
                            })
                            .then((res) => {
                                const access_token =
                                    res.data?.data?.access_token ?? '';

                                token.accessToken = access_token; // new token

                                localStorage.setItem(
                                    'token',
                                    JSON.stringify(token)
                                ); // update of access token only
                                instance.defaults.headers.common.Authorization = `bearer ${token.accessToken}`;
                            })
                            .catch(() => {
                                localStorage.removeItem('token');
                                window.location.href = `${window.location.href}/login1`;
                                // window.location.pathname = '/login1';
                                // console.log(
                                //     error?.response?.data?.data?.message
                                // );
                            });
                    }
                    return instance(originalConfig);
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        // navigate('/login');
                        return Promise.reject(_error.response.data);
                    }

                    return Promise.reject(_error);
                }
            }
            // if (err.response.status === 404 && err.response.data) {
            //     console.log(err.response.data);
            //     return Promise.reject(err.response.data);
            // }
        }
        return Promise.reject(err);
    }
);

// instance.interceptors.request.use((config) => {
//     const tokensData = JSON.parse(localStorage.getItem('tokens'));
//     config.headers.common.Authorization = `bearer ${tokensData.access_token}`;
//     return config;
// });
export default instance;
