<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>import utils from './utils';

class Storage {
    constructor(player) {
        this.storageName = player.options.storageName;

        this.data = JSON.parse(utils.storage.get(this.storageName));
        if (!this.data) {
            this.data = {};
        }
        this.data.volume = this.data.volume || player.options.volume;
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
        utils.storage.set(this.storageName, JSON.stringify(this.data));
    }
}

export default Storage;
