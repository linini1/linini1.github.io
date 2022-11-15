<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>export default (options) => {
    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('aplayer')[0],
        mini: options.narrow || options.fixed || false,
        fixed: false,
        autoplay: false,
        mutex: true,
        lrcType: options.showlrc || options.lrc || 0,
        preload: 'metadata',
        theme: '#b7daff',
        loop: 'all',
        order: 'list',
        volume: 0.7,
        listFolded: options.fixed,
        listMaxHeight: options.listmaxheight || 250,
        audio: options.music || [],
        storageName: 'aplayer-setting',
    };
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }

    options.listMaxHeight = parseFloat(options.listMaxHeight);

    if (Object.prototype.toString.call(options.audio) !== '[object Array]') {
        options.audio = [options.audio];
    }

    options.audio.map((item) => {
        item.name = item.name || item.title || 'Audio name';
        item.artist = item.artist || item.author || 'Audio artist';
        item.cover = item.cover || item.pic;
        item.type = item.type || 'normal';
        return item;
    });

    if (options.audio.length 