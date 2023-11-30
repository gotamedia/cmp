/* eslint-disable @typescript-eslint/no-explicit-any */

const invalidEmbedVendors = {
    Apple: {
        scope: 'kb,nsk',
        uuid: 'd6a0d896-1963-4c85-b3b0-d41433f9c990',
        html: [
            ' src="https://embed.podcasts.apple.com/us/podcast/avsnitt-210-lasse-p%C3%A5-heden/id1158834782?i=1000597445676"></iframe>html'
        ]
    },
    PollDaddy: {
        scope: 'bt',
        uuid: 'c793b7be-81e3-42de-aec4-a3738f3df09b',
        html: [`
            UIZ: Tio frågor du bara kan svara på om du har koll på Borås
            Det ultimata lokalkännedomsquizet – med svar du knappt kan googla fram.Borås<div class="pd-embed" id="pd_1671714563279"></div>
            <script type="text/javascript"> var _polldaddy = [] || _polldaddy; _polldaddy.push( { type: 'iframe', auto: '1', domain: 'gotamedia.survey.fm',
            id: 'borasquiz', single_mode: 'undefined', placeholder: 'pd_1671714563279' } ); (function(d,c,j){if(!document.getElementById(j)){var pd=d.createElement(c),s;pd.id=j;
            pd.src='https://app.crowdsignal.com/survey.js';s=document.getElementsByTagName(c)[0];s.parentNode.insertBefore(pd,s);}}(document,'script','pd-embed')); </script>html
            Byline: Sebastian Strand
        `]
    },
    Spotify: { html: ['<iframe src="https://open.spotify.com/embed/show/18LvyU60BlyjKiaWIg9EQq?utm_source=generator&t=1695"loading="lazy"></iframe>html'] },
    Tiktok: {
        // vendor: Vendors.Tiktok,
        regex: {
            blockquotes: /<blockquote class="tiktok-embed"/i,
            script: /https:\/\/www\.tiktok\.com\/embed\.js/i,
            tracker: /https:\/\/www\.tiktok\.com\/[^?]*\?refer=embed/i
        },
        html: []
    }
}

enum Vendors {
    AdformAS = 50,
    AdnamiAps = 612,
    AdvisibleAB = 900,
    AmazonAdvertising = 793,
    BannerflowAB = 273,
    BeeswaxIOCorporation = 12,
    BidSwitch = 128,
    BidTheatreAB = 30,
    BonnierNews = 'c:bonnierne-rRkEgPtY',
    ChartBeat = "c:chartbeat",
    CrazyEgg = "c:crazy-egg",
    CriteoSA = 91,
    DeltaProjectsAB = 209,
    Demandbase = 397,
    Didomi = "c:didomi",
    EinRadAB = 1097,
    EmerseSverigeAB = 8,
    Essens = "c:essens-MDVrFgFB",
    GoogleAdvertisingProducts = "google",
    GoogleAnalyticsProducts = "c:googleana-4TXnJigR",
    GotaMediaAB = "c:gotamedia-WdyDtXh2",
    ImproveDigital = 253,
    IndexExchangeInc = 10,
    IPONWEB = 129,
    KantarMediaSwedenAB = "c:kantarsif-QJr886kb",
    Keesing = "c:keesing-gKV646ez",
    Kilkaya = "c:kilkaya-RQXk9LmE",
    LiveCenter = "c:livecente-Yepbc4qU",
    LivewrappedAB = 919,
    MagniteInc = 52,
    MagniteIncCarbonAILimited = 493,
    MagniteIncOutstream = 102,
    Platform161 = 140,
    PubMaticInc = 76,
    Quantcast = 11,
    QuantCastMeasurement = "c:quantcast-measurement",
    ReadpeakOy = 290,
    RTBHouse = 16,
    SeenthisAB = 415,
    ShowheroesSE = 111,
    SmartAdserver = 45,
    StormGeo = "c:stormgeo-RFNYgX2V",
    StrossleInternationalAB = 851,
    TheUKTradeDeskLtd = 21,
    TravelAudience = 423,
    UserReport = "c:userreport",
    UserReportAnalytics = "c:userreport-analytics",
    XandrInc = 32,
    YahooEMEALimited = 25,
    Youtube = "c:youtube",
    Instagram = "c:instagram",
    Facebook = "c:facebook",
    Twitter = "c:twitter",
    Crowdsignal = "c:crowdsignal",
    Datawrapper = "c:datawrapper",
    Flourish = "c:flourish-2jNnChbH",
    Flowplayer = "c:flowplayer",
    GoogleForms = "c:googleForms",
    GoogleMaps = "c:googleMaps",
    Ifragasatt = "c:ifrågasätt",
    KnightLab = "c:knightlab-rmVaN6ra",
    ShootItLive = "c:shootItLive",
    Podspace = "c:podspace",
    Libsyn = "c:libsyn",
    Wufoo = "c:wufoo",
    Tiktok = "c:tiktok"
}

const EmbedVendors = {
    Crowdsignal: {
        vendor: Vendors.Crowdsignal,
        regex: {
            html: /(<crowdsignal-embed|<\/crowdsignal-embed>)/i,
            src: /https:\/\/gotamedia\.crowdsignal\.net/i,
            script: /(https:\/\/app\.crowdsignal\.com\/embed\.js|https:\/\/app\.crowdsignal\.com\/survey\.js)/i
        },
        html: [
            '<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async>',
            '</script> <crowdsignal-embed src="https://gotamedia.crowdsignal.net/tippa-ettan"></crowdsignal-embed>',
            "{var pd=d.createElement(c),s;pd.id=j;pd.src='https://app.crowdsignal.com/survey.js';s=document.getElementsByTagName(c)[0"
        ],
        links: [
            'https://www.bt.se/5051841a-ae2c-4fff-bb89-270a12af1f4c',
            'https://www.bt.se/c793b7be-81e3-42de-aec4-a3738f3df09b',
            'https://www.bt.se/a9341d11-1be6-48ba-b6bb-22a58b8c7e8d'
        ]
    },
    Datawrapper: {
        vendor: Vendors.Datawrapper,
        regex: { iframeLink: /https:\/\/datawrapper\.dwcdn\.net/i },
        html: [
            '<iframe id="datawrapper-chart-5dOOr" src="https://datawrapper.dwcdn.net/5dOOr/1/" scrolling="no"'
        ],
        links: [
            'https://www.barometern.se/24f73451-a9ac-435b-9390-ded1ff0edc16',
            'https://www.barometern.se/29164a37-2cd4-4400-9d98-7900a8087469',
            'https://www.barometern.se/e1bbf9a2-ca6e-44b9-b1cd-825f98604af8',
            'https://www.barometern.se/35fa025d-aa72-44e9-8498-5769fbdc7a17',
            'https://www.barometern.se/f70fff97-51ae-4f6a-a35b-9e640b92cb3c',
            'https://www.barometern.se/2f2c1d1f-fc4e-4a68-ae8b-0b2dd93cddbf',
            'https://www.barometern.se/f8450c2f-c3fa-4f2a-bcb4-eab43571f286',
            'https://www.barometern.se/c5f1f97b-c533-463d-b346-931fd068eb73',
            'http://barometern.local.gotamedia.se/24f73451-a9ac-435b-9390-ded1ff0edc16',
            'http://barometern.local.gotamedia.se/29164a37-2cd4-4400-9d98-7900a8087469',
            'http://barometern.local.gotamedia.se/e1bbf9a2-ca6e-44b9-b1cd-825f98604af8',
            'http://barometern.local.gotamedia.se/35fa025d-aa72-44e9-8498-5769fbdc7a17',
            'http://barometern.local.gotamedia.se/f70fff97-51ae-4f6a-a35b-9e640b92cb3c',
            'http://barometern.local.gotamedia.se/2f2c1d1f-fc4e-4a68-ae8b-0b2dd93cddbf',
            'http://barometern.local.gotamedia.se/f8450c2f-c3fa-4f2a-bcb4-eab43571f286',
            'http://barometern.local.gotamedia.se/c5f1f97b-c533-463d-b346-931fd068eb73'
        ]
    },
    Facebook: {
        vendor: Vendors.Facebook,
        regex: { iframeSrc: /facebook\.com\/plugins\/(post|likebox)\.php\?/i },
        html: [
            '<iframe src="//www.facebook.com/plugins/likebox.php?href= https://www.facebook.com/Birgitta-och-Evalds-Ekologiska-Naturbetesdjur-730414083755507/?ref=page_internal /%3Ffref%3Dts&amp;width=400&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:590px;" allowTransparency="true"></iframe>'
        ]
    },
    Flourish: {
        vendor: Vendors.Flourish,
        regex: {
            html: /flourish-embed/i,
            script: /https:\/\/public\.flourish\.studio\/resources\/embed\.js/i
        },
        html: [
            'g<div class="flourish-embed flourish-sports" data-src="visualisation/13579099"><script src="https://public.flourish.studio/resources/embed.js"></script></div>'
        ],
        links: [
            'https://www.barometern.se/03008260-8b00-4c6d-a046-9a51dbea9284',
            'https://www.barometern.se/0410531e-d223-435a-8e2c-c898363e7c02',
            'https://www.barometern.se/4f3d2432-faa5-49fe-8ef2-bbe832af9e07',
            'https://www.barometern.se/7bf0a99b-1889-4eaf-ae21-2c8aa3d29f0e',
            'https://www.barometern.se/830b354b-97a3-432b-8af6-1d222f92703c',
            'https://www.barometern.se/a9ba9ad7-ed8e-4cdd-b075-b61747d924b3',
            'https://www.barometern.se/ea67a2de-ca89-4939-9fa1-cf6f473ef6f8',
            'https://www.bt.se/0e41f3aa-0df1-443f-8285-e19c11a07e6f',
            'https://www.bt.se/0f529308-d632-429c-9512-0239fa99dbec',
            'https://www.bt.se/157a31af-fc4b-4c85-afb1-ea35ab18e57b',
            'https://www.bt.se/2b48f5be-93fd-4a38-bbf4-41c0b5b17be5',
            'https://www.bt.se/31ba4b91-a119-42e3-94b7-ab4fe60a44d1',
            'https://www.bt.se/37d0f6e1-0b2b-4e3f-bc7c-448ac5df187e',
            'https://www.bt.se/449d9cbb-bfd7-444b-8537-fd5012df9ead',
            'https://www.bt.se/4aa65be8-e62a-4092-b0a0-9cf082c10e18',
            'https://www.bt.se/562d73ce-9bd1-4aba-8db4-9e9e416324e9',
            'https://www.bt.se/6a1fafa5-98d4-425a-aff3-e5ff017b12e3',
            'https://www.bt.se/76532573-d6dd-46fd-baf1-7e34cecc36c2',
            'https://www.bt.se/79fa7b0b-3ea9-4b11-9382-f23ad09a04a6',
            'https://www.bt.se/af9272c7-b076-49b1-b2ad-fb09b7674051',
            'https://www.bt.se/b057bc1b-9de4-4213-8ef1-5b8a9b9d420c',
            'https://www.bt.se/c27cc175-c250-4e1c-ac73-c4a17c1d9217',
            'https://www.bt.se/c89bfd83-bddd-4727-871c-3fef9dd4bfa7',
            'https://www.bt.se/ce812ad7-58b1-419e-8e68-858b5c6349ad',
            'https://www.ystadsallehanda.se/82ffd405-77d5-4994-9d1e-914ce77541c4'
        ]
    },
    Flowplayer: {
        vendor: Vendors.Flowplayer,
        regex: {
            html: /flowplayer-embed-container/i,
            script: /\/\/ljsp\.lwcdn\.com\/api\/video\/embed\.jsp/i // Double check where to put this (see You Player)
        },
        html: [
            '<div class="flowplayer-embed-container"',
            'src="//ljsp.lwcdn.com/api/video/embed.jsp?id=1e281caf-aaf9-447f-9a6e-cf86117f955f&pi=b9d47d5a-a1c4-4754-8703-fb865fa9ad9e"'
        ],
        links: [
            'https://www.barometern.se/7fa8238d-4fb4-4fbe-b8bc-581ea161bba2',
            'https://www.barometern.se/e7b2613f-7eed-4bd9-80c0-d0817746d81d',
            'https://www.barometern.se/ef27ea76-6ed2-4489-a2ad-eeed1eb9aec7',
            'https://www.bt.se/265282c8-0aa3-4f1a-b05d-d4648bbd2695',
            'https://www.bt.se/2cf67262-50ad-49d9-b1e3-f18b573c9ed7',
            'https://www.bt.se/452a54e3-efa5-473c-9ddf-62a63c8d1c7d',
            'https://www.bt.se/6e4ca327-72fa-4b02-ac24-a65fc65d97b7',
            'https://www.bt.se/a601e794-3693-4724-859c-6dbe6bb4dbef',
            'https://www.bt.se/df8fa725-c3d2-41c0-96de-438c67e8485f',
            'https://www.kristianstadsbladet.se/47c9c3f2-a84b-4aa2-80e0-5367aa0c92cc',
            'https://www.kristianstadsbladet.se/6234e350-9c4e-4900-9bed-63a36999715a',
            'https://www.kristianstadsbladet.se/a690a181-9aef-41ee-962a-4149bc687b28',
            'https://www.kristianstadsbladet.se/df7befbc-6d91-459c-bff5-176e1662cea5',
            'https://www.kristianstadsbladet.se/dfa467db-b486-43f7-b1aa-d4c9af179b26',
            'https://www.kristianstadsbladet.se/fa9362f1-47a8-4b4b-a74d-d5bafebd6ddf',
            'https://www.smp.se/f4ebb262-3d08-4207-a19b-b97d4221be9e',
            'https://www.sydostran.se/3eb9c20b-d289-4be8-a6e7-a72a9ca8dab4',
            'https://www.sydostran.se/9a873a3a-7adb-44e3-94e9-09da6acc9b28',
            'https://www.sydostran.se/eacfd740-11c3-45e9-a069-d82ba3e25575',
            'https://www.trelleborgsallehanda.se/16c73696-be27-4a85-a66b-e29df2b356b0',
            'https://www.trelleborgsallehanda.se/17e2a5a7-c506-4e5b-904e-f5448075d107',
            'https://www.ystadsallehanda.se/63e0df93-713f-494e-8418-17a464aefb5a'
        ]
    },
    GoogleForms: {
        vendor: Vendors.GoogleForms,
        regex: { },
        html: []
    },
    GoogleMaps: {
        vendor: Vendors.GoogleMaps,
        regex: { iframeLink: /www\.google\.com\/maps\/(?:d\/)?embed/i },
        html: [
            '="https://www.google.com/maps/embed?',
            '<iframe src="https://www.google.com/maps/d/embed?mid=1Vj0V4utMaH4BXNs7wy-6r7tspUxM8is&ehbc=2E312F" width="640" height="480">',
            '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2183.58991037833'
        ]
    },
    Ifragasatt: {
        vendor: Vendors.Ifragasatt,
        regex: {
            iframeLink: /https:\/\/direkt-klient\.ifragasatt\.se/i,
            fetchSrc: /https:\/\/direkt\.ifragasatt\.se\/load/i
        },
        html: [
            'fetch("https://direkt.ifragasatt.se/load/?aId=49ed004f-7ee0-45ee-bc82-cf94ac5156b1&customCss=https://cdn.gotamedia.se/gotamedia/css/green.css")',
            '<iframe src="https://direkt-klient.ifragasatt.se/?aId=554319c2-d9fc-4c61-ba9d-ff629f542266&customCss=https://cdn.gotamedia.se/gotamedia/css/green.css"></iframe>'
        ],
        links: [
            'https://www.barometern.se/cd489f8a-135b-47d7-b31d-de63131ccbb3',
            'https://www.barometern.se/6255f244-d190-4a4f-9443-59224316dc5f',
            'https://www.barometern.se/8173aae6-efed-4f1c-a792-616bf0e8366c',
            'https://www.barometern.se/86826e55-29d6-4c49-b9dd-9f154b44d1bf',
            'https://www.barometern.se/faf2a537-e8a1-47c8-bbae-dfc72f130edf',
            'https://www.barometern.se/660781ea-1d12-4c6b-a3d6-fda8ed461677',
            'https://www.kristianstadsbladet.se/bae7a2fe-a89e-4ed8-bd76-f995dd5062df',
            'https://www.kristianstadsbladet.se/15bf86d3-da3b-4d9e-9a9e-442311c02082',
            'https://www.barometern.se/0f39e330-f6f7-4196-80b3-579a35d97231',
            'https://www.barometern.se/cfc0d32a-1abe-4b5a-ab8c-176970094efb',
            'https://www.barometern.se/8bef9e0a-6e3f-43f9-b6db-6088136cc641',
            'https://www.barometern.se/f7a2d158-9914-425d-9b94-5bc7b2b838fd',
            'https://www.bt.se/4dfcfbcd-d684-4230-b9ca-3477d2e240bb',
            'https://www.bt.se/98270549-816f-41a8-9fbb-20938eafe019',
            'https://www.barometern.se/3ce1667c-0489-45db-8f33-c5ec826f98c0',
            'https://www.bt.se/6c3ae8cf-6c2f-4164-8f9c-f90cbb0096b0',
            'https://www.sydostran.se/199b74c9-5b28-48a2-9257-3d2787f007c3',
            'https://www.barometern.se/bb3fef33-c955-4632-8a00-86f9e781201f',
            'https://www.sydostran.se/c8c4f033-32fb-4774-8a65-94ba1f3b5d16',
            'https://www.sydostran.se/1b81855f-34bd-4a19-9221-e748addcac83',
            'https://www.sydostran.se/4bc2995d-c63a-4415-9556-e62920bc2db2',
            'https://www.kristianstadsbladet.se/df646790-7409-4df7-8b9a-98ed19708e5b',
            'https://www.barometern.se/5455732d-a71c-4409-9eb6-b22f3bb0b55e'
        ]
    },
    Instagram: {
        vendor: Vendors.Instagram,
        regex: {
            blockquotes: /<blockquote class="instagram-media"/i,
            htmlAttributes: /(data-instgrm-captioned|data-instgrm-permalink|data-instgrm-version)/i,
            script: /https:\/\/www\.instagram\.com\/embed\.js/i,
            tracker: /https:\/\/www\.instagram\.com\/[^?]*\?utm_source=ig_embed/i
        },
        html: [
            '<script async src="//www.instagram.com/embed.js"></script>',
            '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CyVTkfXMV4l/?utm_source=ig_embed&'
        ],
        links: [
            'http://barometern.local.gotamedia.se/32868280-af6c-4100-a411-4b69dbd9c76b',
            'http://barometern.local.gotamedia.se/6246da0c-482e-4fc3-838c-390b9b510b79',
            'https://www.barometern.se/32868280-af6c-4100-a411-4b69dbd9c76b',
            'https://www.barometern.se/6246da0c-482e-4fc3-838c-390b9b510b79',
            'https://www.bt.se/19195c94-5838-4fa5-8a31-38811ef5e33f',
            'https://www.bt.se/3548a248-10d5-4190-93bb-51534636be25',
            'https://www.bt.se/3e790717-b5ce-4175-a70a-19149cf0b1b3',
            'https://www.bt.se/493a60ef-d29a-4184-91ab-fc27a74b894a',
            'https://www.bt.se/9f3a3d28-d9e3-4a9e-a129-0b79facbaaa8',
            'https://www.bt.se/bf403883-1cd6-4ef5-80b8-508a3e169325',
            'https://www.kristianstadsbladet.se/2cb03637-d55a-442a-ac70-a086473530c2',
            'https://www.kristianstadsbladet.se/6191e025-bb9a-43ad-9950-3abc385064a7',
            'https://www.kristianstadsbladet.se/a251d505-c76f-4a56-9ef6-e1849ef8d745',
            'https://www.kristianstadsbladet.se/cf3f0dea-1d4c-42eb-b339-beae5cff7deb',
            'https://www.nsk.se/ea44b2f1-3743-42c3-bd46-7704da02de84',
            'https://www.olandsbladet.se/49afe719-c215-46c5-b658-6d3f7f08cf10',
            'https://www.smp.se/4adf8b0a-801e-441c-a63f-9ac36fb1fa47',
            'https://www.smp.se/52b0c290-3e76-4049-aff2-314892ebebb5',
            'https://www.smp.se/6a49c543-a402-4345-acf7-17db17666178',
            'https://www.smp.se/e809698e-e98f-4de4-a4b0-5774d82a5ec9',
            'https://www.sydostran.se/4873f4b9-2483-41c0-a75b-21af17eb2e69',
            'https://www.ystadsallehanda.se/7773373d-141b-412e-ad1d-228132a8e420',
            'https://www.ystadsallehanda.se/bd2710e5-2736-496e-8d6e-fb2e93df0859'
        ]
    },
    Livecenter: {
        vendor: Vendors.LiveCenter,
        regex: {
            html: /live-center-embed/i,
            script: /data-src="https:\/\/livecenter\.norkon\.net/i
        },
        html: [
            'div class="live-center-embed" data-src="https://livecenter.norkon.net/frame/borastidning/23200/default"><script type="text/javascript">('
        ],
        links: [
            'https://www.barometern.se/0e7906ee-4a74-4927-a16c-82eeb36e0e8f',
            'https://www.barometern.se/27bb46a7-26d7-44d2-b608-a986eb9676b8',
            'https://www.barometern.se/2a6e3000-6e95-4367-80c0-4ef76c04b3af',
            'https://www.barometern.se/356eaf55-bd8b-444a-ac44-dff8480684e3',
            'https://www.barometern.se/4486a18d-f66f-45fe-a474-7b8f94eca9b6',
            'https://www.barometern.se/4f3f93ac-a6c1-4706-929f-6df8ae131442',
            'https://www.barometern.se/61cf22fb-320a-49b8-949f-418e8d5101f9',
            'https://www.barometern.se/6ec5ccea-3a68-4138-b335-e481bd056290',
            'https://www.barometern.se/70906159-d875-4466-9a18-73060eb498a2',
            'https://www.barometern.se/83d15a8c-79f8-4ec5-a0f9-c27a2826797e',
            'https://www.barometern.se/89aef0f8-0496-46ce-b6a7-496edca98597',
            'https://www.barometern.se/8bfd76a6-5b23-4cf9-833f-40464df1a140',
            'https://www.barometern.se/918f9f41-d7e1-4a82-9354-1eaad16a8ef6',
            'https://www.barometern.se/9a756125-3f31-4c55-a185-c8f67432b8c6',
            'https://www.barometern.se/a622e4da-3158-4fd0-aa3d-d1cc5777da0e',
            'https://www.barometern.se/a82bfaea-611a-4364-bdd4-6ebf77aad4f4',
            'https://www.barometern.se/a9aed943-d138-47ec-80b0-13b029c0af7d',
            'https://www.barometern.se/bb2da9f3-ece3-4412-bc2d-ba8b43cf1977',
            'https://www.barometern.se/cf3546b8-3790-484c-a7e1-9c6aab00e368',
            'https://www.barometern.se/cf70e54e-e6e2-4c5a-9084-d5f0d5a7ae6b',
            'https://www.barometern.se/e5d7a2fd-5448-4039-8b65-ae9aa4af55f9',
            'https://www.barometern.se/f23e4906-f481-4d85-94cc-6c0576cdb452',
            'https://www.barometern.se/f9c55bfe-24aa-4a3d-bfbe-aee7b8a10bf1',
            'https://www.smp.se/bdee1650-8b20-469d-8da0-f09b5c4532d4',
            'https://www.ystadsallehanda.se/a936325b-739a-450e-838e-f6f234240d5c'
        ]
    },
    Libsyn: {
        vendor: Vendors.Libsyn,
        regex: {
            html: /title="Libsyn Player"/i,
            iframeSrc: /(\/\/html5-player\.libsyn\.com\/embed|"\/\/play\.libsyn\.com\/embed)/i
        },
        html: [
            '<iframe title="Embed Player" src="//play.libsyn.com/embed/ep',
            '<iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/23149367/height/90/theme/custom'
        ],
        links: [
            'https://www.barometern.se/665f3e45-110f-4386-97cf-a20bf329eb9e',
            'https://www.barometern.se/56ba8e8b-ad5f-4666-8cf4-b5d66906b63e',
            'https://www.barometern.se/13b5e36c-0be3-480d-9c42-1d64d022489b',
            'https://www.barometern.se/866e2828-d9e9-45b1-9ade-53f75b97a7af',
            'https://www.barometern.se/c3906746-368b-469e-81b5-764242d42a17',
            'https://www.barometern.se/c59eec74-dee1-43ff-85cf-a2a389fae609',
            'https://www.barometern.se/1442c49d-0f2b-4b51-a7cc-077fa010268e',
            'https://www.barometern.se/b07f279a-36a1-4155-8d26-bbc16c4aefde',
            'https://www.barometern.se/7072398f-0123-40b2-81ba-2bac4b1274cc',
            'https://www.barometern.se/704366bf-8d00-4dc9-ab4c-0ba7e2cdbda1',
            'https://www.barometern.se/1e4c506f-88b3-4cc2-bbd9-c0d387d6cafc',
            'https://www.barometern.se/7a95f6fd-dd91-4b90-82d3-a0d4a1b4284f',
            'https://www.barometern.se/9810a1e4-7a44-48a8-97d0-18073a43a0de',
            'https://www.barometern.se/810db78e-f98a-4fcf-a426-c6ac4608de85',
            'https://www.barometern.se/dc4299cd-6802-4be2-aee5-6539628da274',
            'https://www.barometern.se/563f6909-2448-41de-bc9c-52205e6e3ca9',
            'https://www.barometern.se/300e1342-8e85-422c-8cd8-758651272078',
            'https://www.barometern.se/54b7088a-4aec-441f-859d-6db72882226a',
            'https://www.barometern.se/e70ef59e-84a5-4bca-b76f-a8851364752e',
            'https://www.barometern.se/f797364f-5608-4292-a058-c064550933bd',
            'https://www.barometern.se/f85ea687-b4c2-4bcb-8799-249964bba28f',
            'https://www.barometern.se/1664edde-ba4c-42c0-8623-4efed71cfa52',
            'https://www.barometern.se/c74d43ff-c1e7-4fc4-a8c3-f4630c68e128',
            'https://www.barometern.se/66b6c87c-472c-44ee-b73e-a93caa776ca7',
            'https://www.barometern.se/9dd64539-0111-4bdf-a96f-c243d2d70312'
        ]
    },
    Keesing: {
        vendor: Vendors.Keesing,
        description: "Keesing for Crosswords",
        regex: {},
        html: []
    },
    KnightLab: {
        vendor: Vendors.KnightLab,
        regex: { iframeSrc: /https:\/\/cdn\.knightlab\.com\/libs/i },
        html: [
            "<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=19kTzP61bPOR82OoUhiJWqfyBvL3xli0VZ6jZRBPZiUM&"
        ],
        links: [
            'https://www.barometern.se/cc80dede-e21c-4d52-95ac-e3eafff447d2',
            'https://www.barometern.se/f8450c2f-c3fa-4f2a-bcb4-eab43571f286',
            'https://www.barometern.se/b789f3ed-b88a-49c4-93c4-d308135b6926',
            'https://www.barometern.se/904d9f19-e34f-41ca-9dfe-a7a78c7964d0',
            'https://www.barometern.se/7c47feab-1aea-4d05-bf08-55e1ef056aa6',
            'https://www.barometern.se/14d111b9-1384-4d8e-b24c-f5bfd900e06b',
            'https://www.barometern.se/f3635596-10e4-407e-84b8-c466cd276290',
            'https://www.barometern.se/0a191d77-76fd-45e7-bcd0-218700ca0d0d',
            'https://www.barometern.se/3d557419-b0a1-42ab-a178-fcb23dc4349b',
            'https://www.barometern.se/2f5a77bc-689a-4f4d-a6fd-7640b49f9aec',
            'https://www.barometern.se/47f05360-e0f7-4872-9cea-2bdf059869d5',
            'https://www.barometern.se/c5f1f97b-c533-463d-b346-931fd068eb73'
        ]
    },
    Podspace: {
        vendor: Vendors.Podspace,
        regex: {},
        html: []
    },
    ShootItLive: {
        vendor: Vendors.ShootItLive,
        regex: {
            htmlClass: /shootitlive-embed/i,
            script: /amazonaws\.com\/shootitlive\/shootitlive/i
        },
        html: [
            '<div class="shootitlive-embed"',
            '<a href="http://shootitlive.com/">Shootitlive</a></p></div>',
            "('script');s.src='//s3-eu-west-1.amazonaws.com/shootitlive/shootitlive.load.v1.1.borastidning.js';b.insertBefore"
        ],
        links: [
            'https://www.barometern.se/d2cb13dc-368e-4dca-93ac-587a3038eec4',
            'https://www.kristianstadsbladet.se/577dcfd9-3d62-46f1-b60a-66c3be27e7ea',
            'https://www.barometern.se/81c71bf9-2127-4320-90f7-5225580399a8',
            'https://www.sydostran.se/affc6d2d-f8de-44e3-94e3-abaa9de12330',
            'https://www.sydostran.se/03c5814c-f68b-4972-8ffd-a7606aaaacc1',
            'https://www.sydostran.se/be8eb326-0984-4431-b970-d60cabd78882',
            'https://www.sydostran.se/1728c065-0406-41ac-9635-92b94cdb0ab0',
            'https://www.sydostran.se/b2a7e1b6-c665-4f9a-aafb-cb08c788f881',
            'https://www.sydostran.se/c8b676e0-fd2f-4109-948f-f97bb7ab834f',
            'https://www.sydostran.se/a13f938a-296b-47d4-b519-17d5181aba39'
        ]
    },
    StormGeo: {
        vendor: Vendors.StormGeo,
        regex: { domain: /\b(?:[\w-]+\.)?stormgeo\.com\b/ },
        html: []
    },
    Wufoo: {
        vendor: Vendors.Wufoo,
        regex: { scripts: /wufoo\.com\/scripts\/embed\/form\.js/ },
        html: [
            `<a href="https://gotamedia.wufoo.com/forms/p10079051wh9ego">online form</a>.  'host':'wufoo.com`,
            `('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js`
        ],
        links: [
            'https://www.bt.se/6d291e76-58d0-4af7-bed2-c3a56b1c4305',
            'https://www.bt.se/67a92583-972e-49b7-87b8-5a34f0c498dc',
            'https://www.bt.se/32e6f8f1-6005-46a4-bb67-7d680dad2a64',
            'https://www.bt.se/b2cbc9bb-daa9-44eb-9482-a6256a4daf65',
            'https://www.bt.se/7b5d8e23-fd9a-4f22-8629-2941569b4c2b',
            'https://www.bt.se/d99c72b8-2885-4938-b190-0a19ba1a7807',
            'https://www.bt.se/188df02e-4d2b-46b0-aa18-2e97a24f7c5f',
            'https://www.bt.se/adc53647-469a-404b-b167-3767aaf2d89d',
            'https://www.bt.se/8f3eb64f-bd07-42d2-b549-79d08a8aede3',
            'https://www.bt.se/f5917346-3982-42ac-96c7-6073cd43c034',
            'https://www.bt.se/7da76f22-cfe9-4985-852d-be24622de6fa',
            'https://www.bt.se/246d0c76-e6aa-4b0d-a5f0-7aa145874b6c',
            'https://www.bt.se/347ed733-0fc3-4810-a3b1-a496a58ae26d',
            'https://www.bt.se/282edc0b-aea2-4ff2-85f4-1886c06dd763',
            'https://www.bt.se/4f06988d-4ca9-446f-bf03-a6296ea8440c',
            'https://www.bt.se/59d5d9f1-9194-4423-b355-bba90316fa7f',
            'https://www.bt.se/e7d10bc0-6f82-41fe-87ae-5b1ab4a456f8',
            'https://www.bt.se/dbad4ea2-13d9-4d70-8699-1955513d5a27',
            'https://www.bt.se/6e0f70ec-cbef-4cd5-954a-a4e585035afd',
            'https://www.bt.se/c2b2f6d0-5a3d-43d6-8bc4-9ebc074cdf2d'
        ]
    },
    X: {
        vendor: Vendors.Twitter,
        regex: { script: /https:\/\/platform\.twitter\.com\/widgets\.js/ },
        html: [
            '<script async src="https://platform.twitter.com/widgets.js"'
        ],
        links: [
            'https://www.barometern.se/b17647f6-43ed-4e33-a933-b9f990db6872',
            'https://www.barometern.se/436b6ba8-ad0c-4cc4-8a64-8127e1e5130e',
            'https://www.barometern.se/47f05360-e0f7-4872-9cea-2bdf059869d5',
            'https://www.barometern.se/279472ea-a9d9-4bb9-b663-29e1297d1d47'
        ]
    },
    Youtube: {
        vendor: Vendors.Youtube,
        regex: { iframeSrc: /https:\/\/www\.youtube\.com\/embed/i },
        html: [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/DdSxGfOKYFM" title="YouTube video player"'
        ],
        links: [
            'https://www.barometern.se/eb03d162-86be-4ff0-a43a-ccd1ac715552',
            'https://www.barometern.se/f321b677-668b-4a4e-9744-cf9c021339ce',
            'https://www.barometern.se/27c53c82-41b2-495f-bd16-2585fed3499e',
            'https://www.barometern.se/6ffb8411-6791-41e1-ab75-d4f723ea6a2c',
            'https://www.barometern.se/e1bbf9a2-ca6e-44b9-b1cd-825f98604af8',
            'https://www.barometern.se/3e0fccbb-f82d-46ca-a96b-33a54ab208e4',
            'https://www.barometern.se/3ccfbd9a-a43f-420e-a5bd-ce2ed4acc9da',
            'https://www.barometern.se/8d766a2e-8d78-4d7f-99b7-5b86b272acc6',
            'https://www.barometern.se/018d3465-461e-4618-8552-fb8308ba9b92',
            'https://www.barometern.se/c7e70276-92fd-4867-8da7-604b27cdf1c5',
            'https://www.barometern.se/4c62c921-ebd9-434d-85e8-50603a2e0035',
            'https://www.barometern.se/4d871531-50e3-4036-a43b-faee757b38bb',
            'https://www.barometern.se/e9b8defc-9612-4a24-8635-e209a78951f9',
            'https://www.barometern.se/6a9f86c9-d05f-4e4f-bdd7-dd83f3e8dfda',
            'https://www.barometern.se/40b5e7eb-e9e0-45e7-ae73-39c521ff5ba1',
            'https://www.barometern.se/c1c88be2-d416-45a2-a98a-191708830894',
            'https://www.barometern.se/653a170b-0936-40d8-86ea-38c7461dafbc',
            'https://www.barometern.se/771fb2a8-b734-4b0b-a8b3-1b6076775233',
            'https://www.barometern.se/3cab76a5-e9d7-48ca-a825-0c7fe897bfd7',
            'https://www.barometern.se/b20632f1-a762-4526-98cd-dcc7ef66f7f8',
            'https://www.barometern.se/2e95ceed-4d3d-4a9d-bccb-49167dadc008',
            'https://www.barometern.se/1aaafcea-c653-4f53-9b87-63662d86b438',
            'https://www.barometern.se/335d29f7-e9d3-4410-9274-65c2adbddf6c',
            'https://www.barometern.se/c591ae02-c5b5-4ed6-9527-eb81d9520b35',
            'https://www.barometern.se/5455732d-a71c-4409-9eb6-b22f3bb0b55e'
        ]
    },
    ShowheroesSE: {
        vendor: Vendors.ShowheroesSE,
        regex: {
            html: /flowplayer-embed-container/i,
            lwCDNScript: /\/\/ljsp\.lwcdn\.com\/api\/video\/embed\.jsp/i, // Double check where to put this (see flow player)
            youplayScript: /https:\/\/delivery\.youplay\.se\/load\.js/i
        },
        html: [
            'src="https://delivery.youplay.se/load.js'
        ],
        links: [
            'https://www.barometern.se/fd838bff-6501-436b-a960-d6f614ad23c1',
            'https://www.barometern.se/fc0fc5fe-5df6-43db-a811-aabe62a49053',
            'https://www.barometern.se/61f66d17-74d7-4cfa-807e-ae793958e016',
            'https://www.barometern.se/9fa82322-ecb0-4849-ab68-ab45fefcdb27',
            'https://www.barometern.se/d39e0bcd-309f-4854-b0c3-ca86fc46493e',
            'https://www.barometern.se/10ff54ac-f62a-47ff-987d-064d19fa24ca',
            'https://www.barometern.se/fe782ee4-7e9e-4b70-ba8c-b3bffb24f83b',
            'https://www.barometern.se/40e57a67-0f5f-4d58-88e3-ce66784d9c85',
            'https://www.barometern.se/78f6d499-d192-4c4a-add7-a8c81dbe4938',
            'https://www.barometern.se/e35b8604-7e22-445d-8b2c-eb15be8d6123',
            'https://www.barometern.se/f7dcad30-386c-4acd-9c38-80e75a5f6890',
            'https://www.barometern.se/b65457e5-f32b-4e06-adbb-838cf0550055',
            'https://www.barometern.se/745956f5-ce92-46d1-a2ea-bb0cad20c5cd',
            'https://www.barometern.se/8c9f7b43-62fe-42a7-ad20-1163a4dd95c4',
            'https://www.barometern.se/597b919b-b103-4bb5-a140-96bd143588db',
            'https://www.barometern.se/e9ba3a4e-81ab-4224-8e2b-37d50757168d',
            'https://www.barometern.se/39fca3aa-c3c0-4c96-af04-ad66da6c5d70',
            'https://www.barometern.se/8663d818-6bfc-42e0-9d84-e6ccb9a51d2f',
            'https://www.barometern.se/d934fd21-f964-49c0-830a-df21ddfb2fb3',
            'https://www.barometern.se/aad1be02-24b2-469f-8b28-55e65da321c9',
            'https://www.barometern.se/5ffe2a44-ccf7-47f5-bad0-b54e85a8e469',
            'https://www.barometern.se/cfde4f5f-03d5-4ff8-9031-d30f7de39e35',
            'https://www.barometern.se/1d1ad446-8cb7-4a91-ac7f-c5b41e9bd7df',
            'https://www.barometern.se/1e942f94-8c7c-4d8b-85f6-fe778c33dec7',
            'https://www.barometern.se/b2ba765b-2bec-4c78-8d30-d30ea283f3ab'
        ]
    }
}

const html = Object.values(EmbedVendors).map((item) => item.html.join("")).join("")

const results = {}

for (const [vendor, { regex }] of Object.entries(EmbedVendors)) {
    for (const [key, pattern] of Object.entries(regex)) {
        const content = html.match(pattern)
        if (!content) continue

        // @ts-ignore
        results[vendor] = {
            // @ts-ignore
            ...(results[vendor] || {}),
            [key]: { content: content[0] }
        }
    }
}

console.debug("\n⣯⣯⣯⣯\n  results:", results)
