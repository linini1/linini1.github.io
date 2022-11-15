<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>const ap = new APlayer({
    container: document.getElementById('player'),	
    mini: false,		
    autoplay: false,	
    theme: '#FADFA3',	
    loop: 'all',		
    order: 'random',	
    preload: 'auto',	
    volume: 0.7,		
    mutex: true,		
    listFolded: false,	
    listMaxHeight: 90,	
    lrcType: 3,			
    audio: [			
        {
            name: '阳光宅男',			
            artist: '周杰伦',		
            url: '阳光宅男-周杰伦.mp3',		
            cover: '_posts/blog-music/3.jpg',	
            lrc: '_posts/blog-music/阳光宅男.jpg',		
            theme: '#ebd0c2'		
        },
        {
            name: '阳光宅男',			
            artist: '周杰伦',		
            url: '阳光宅男-周杰伦.mp3',		
            cover: '_posts/blog-music/3.jpg',	
            lrc: '_posts/blog-music/阳光宅男.jpg',		
            theme: '#ebd0c2'		
        },
    ]
});