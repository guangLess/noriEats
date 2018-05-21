
/*
        fetch('/api/apple')
        .then(res => res.json())
        .then(resJson => {
            console.log("----->", resJson)
            this.setState({
                content: JSON.stringify(resJson)
            })
        })
*/

function getFoodResult (name, callback) {
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
                    console.log('----->', resJson)
                })
        })
        .catch(err => console.error('Request failed, something maybe thre is no such serached name : ', err))
}
