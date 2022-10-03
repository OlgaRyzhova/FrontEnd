const URL = 'http://www.omdbapi.com/apikey.aspx?VERIFYKEY=8b8a998f-9afa-4b43-a2c8-37b02d8751ca';

axios(URL)
    .then(res => {
        console.log(res.status);
        createProductList(res.data);
    })
    .catch(err => {
        console.log(ree.response.status);
    });
    