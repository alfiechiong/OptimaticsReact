import {useHistory} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({children})=>{
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = 'whaOwxVbefazVo82zP1XGzhCIqP9BmnZ' //process.env.REACT_APP_AUTH0_CLIENID

    const onRedirectCallback = (appState)=>{
        console.log(appState)
        history.push(appState?.returnTo || window.location.pathname)
    }

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory
