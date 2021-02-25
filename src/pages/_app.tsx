import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

/**
 * Este arquivo serve para definir uma estrutura
 * comum para toda a aplicação
 */
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
