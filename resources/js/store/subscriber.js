import store from '../store'

store.subscribe((mutation) => {

    if (mutation.type === 'authService/SET_TOKEN') {
        if (mutation.payload) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`;  // Set Header
            localStorage.setItem('token', mutation.payload); // Store Token Locally.
        } else {
            axios.defaults.headers.common['Authorization'] = null;  // Remove Header
            localStorage.removeItem('token');// Remove Token from local storage.
        }
    }
});
