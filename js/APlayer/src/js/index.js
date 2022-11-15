<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>import '../css/index.scss';
import APlayer from './player';

/* global APLAYER_VERSION GIT_HASH */
console.log(`${'\n'} %c APlayer v${APLAYER_VERSION} ${GIT_HASH} %c http://aplayer.js.org ${'\n'}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');

export default APlayer;
