const url = process.env.REACT_APP_POST_API_URL;

const postApiClient = {
    getAllPostsUsingCB: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(err => {
                errorCB("JSON Parse Error...");
            })
        }).catch(err => {
            errorCB("Communication Error...");
        });
    },

    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("JSON Parse Error...");
                })
            }).catch(err => {
                reject("Communication Error...");
            })
        });
    },

    getAllPostsAsync: async function () {
        try {
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch(e) {
            throw new Error("Some Error during API Call...");
        }
    }
};

export default postApiClient;