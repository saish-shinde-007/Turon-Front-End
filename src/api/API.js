const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://ec2-54-67-8-213.us-west-1.compute.amazonaws.com:3001';

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/operations/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("message",response.message);
            console.log("after message");
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const temp = (payload) =>
    fetch(`${api}/operations/FindTutor`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const humid = (payload) =>
    fetch(`${api}/operations/humid`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const table = (payload) =>
    fetch(`${api}/operations/table`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const FIND = (payload) =>
    fetch(`${api}/operations/find`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const TUTOR = (payload) =>
    fetch(`${api}/operations/tutor`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });