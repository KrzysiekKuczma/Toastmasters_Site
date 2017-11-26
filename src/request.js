//Basic data to send authorized request to API

class Request {
    consumerKey() { return 'WYYcNr73O5rC' }

    consumerSecret() { return 'Yt9wLRfoFO3GW1E45Bo22dpcz8klGl2BRdMwIuuLqsqv72yu' }

    token() { return 'wtr6O9l0DqMzIoTmbCz4OTLI' }

    tokenSecret() { return '2mH8CjGTX4pkqcCcoNHvxYYqtznqeiOw9yrm70rQ55FkaXpE' }

    timestamp() { return new Date().getTime().toString().slice(0, 10) }

    generateNonce() {
        let text = ''
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 11; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text;
    }
}

export default Request;