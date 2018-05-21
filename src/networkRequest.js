
export function getFoodResult (name, callback) {
    const path = '/api/' + name
    fetch(path)
        .then(res => {
            if (res.status !== 200) {
                console.warn('Looks like Status Code: ' +
                res.status)
                return
                }
            res.json()
                .then(resJson => {
                    callback(resJson)
                    console.log('--helper--->')
                })
        })
        .catch(err => console.error('Request failed, something maybe thre is no such serached name : ', err))
}

// TODO: cash data if already searched with this user?