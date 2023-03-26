import api from 'api/auth';

class UserService {
    login(user) {
        return api.post('/employee/login', user);
    }

    getbooking(data) {
        return api.post('/room/getbooking', data);
    }
}

export default new UserService();
