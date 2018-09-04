const PROXY_CONFIG = [
    {
        context: [
            "/user",
            "/rest",
          
        ],
        target: "http://208.97.141.141:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;