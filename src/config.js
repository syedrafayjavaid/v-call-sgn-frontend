let env = 'local'
let config = {
    prod: {
        base_url: 'http://210.56.27.69:4000',
    },
    local: {
        base_url: 'http://localhost:4000',
    },
    office: {
        base_url: 'http://192.168.18.146:4000',
    },
}

if (env === 'prod') {
    config = config.prod
} else if (env === 'office') {
    config = config.office
} else if (env === 'local') {
    config = config.local
}

export default config