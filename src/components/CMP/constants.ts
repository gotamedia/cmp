import type { IDidomiConfig } from '@didomi/react'

import { buildDefaultVendorStatus } from '@components/CMP/utils'

import type { ContextType } from '@contexts/Consent'

import defaultI18n from '../../utils/i18n.json'

export enum Vendors {
    AdformAS = 50,
    AdnamiAps = 612,
    AdvisibleAB = 900,
    AmazonAdvertising = 793,
    BannerflowAB = 273,
    BeeswaxIOCorporation = 12,
    Bildbyrån = 'c:bildbyran-Kn93jnMb',
    BidSwitch = 128,
    BidTheatreAB = 30,
    BonnierNews = 'c:bonnierne-rRkEgPtY',
    ChartBeat = 'c:chartbeat-JGRVrNEg',
    CrazyEgg = 'c:crazyegg-rfzp9dpw',
    CriteoSA = 91,
    Datadog = 'c:datadog-FJDrADKB',
    DeltaProjectsAB = 209,
    Demandbase = 397,
    Didomi = 'c:didomi-TrXhyTZN',
    EinRadAB = 1097,
    EmerseSverigeAB = 8,
    Essens = 'c:essens-MDVrFgFB',
    Facebook = 'facebook',
    GoogleAdvertisingProducts = 'google',
    ImproveDigital = 253,
    IndexExchangeInc = 10,
    Infogram = 'c:infogram-p9WibMfC',
    Instagram = 'c:instagram',
    IPONWEB = 129,
    KantarMediaSwedenAB = 'c:kantarsif-QJr886kb',
    Keesing = 'c:keesing-gKV646ez',
    Kilkaya = 'c:kilkaya-RQXk9LmE',
    LiveCenter = 'c:livecente-Yepbc4qU',
    LivewrappedAB = 919,
    MagniteInc = 52,
    MagniteIncCarbonAILimited = 493,
    MagniteIncOutstream = 102,
    Platform161 = 140,
    PubMaticInc = 76,
    Quantcast = 11,
    QuantCastMeasurement = 'c:quantcast-measurement',
    ReadpeakOy = 290,
    RTBHouse = 16,
    SeenthisAB = 415,
    ShootItLive = 'c:shootitl-xMprkipW',
    ShowheroesSE = 111,
    SmartAdserver = 45,
    Spotify = 'c:spotify-embed',
    StormGeo = 'c:stormgeo-RFNYgX2V',
    SVT = 'svt-zaZ3JpBy',
    StrossleInternationalAB = 851,
    TheUKTradeDeskLtd = 21,
    TravelAudience = 423,
    UserReport = 'c:userreport',
    UserReportAnalytics = 'c:userreport-analytics',
    XTwitter = 'twitter',
    XandrInc = 32,
    YahooEMEALimited = 25,
    Youtube = 'c:youtube',
    Flourish = 'c:flourish-2jNnChbH',
    KnightLab = 'c:knightlab-rmVaN6ra',
    Crowdsignal = 'c:crowdsigna-Pjx8yZMz',
    Datawrapper = 'c:datawrappe-BxyJ4RiZ',
    Flowplayer = 'c:flowplayer-cAdreRtP',
    Ifragasatt = 'c:ifragasaet-NmPg34FK',
    Podspace = 'c:podspace-4ExEPKcQ',
    Libsyn = 'c:libsyn-BrDWAy66',
    Wufoo = 'c:wufoo-cNQzxyNT',
    GoogleForms = 'c:googlefor-M4AiyDM2',
    GoogleMaps = 'c:googlemap-GNbjq6Rg',
    IMatricsAB = 'c:imatrics-Nx4FZNnQ',
}

export enum Purposes {
    NecessaryCookies = 'necessary-FDwiVZWQ',
    DevelopmentAndDebugging = 'developmen-2NYrYDqQ',
    StoreAndOrAccessInformation = 'cookies',
    CreatePersonalisedAdsProfile = 'create_ads_profile',
    CreatePersonalisedContentProfile = 'create_content_profile',
    DevelopAndImproveProducts = 'improve_products',
    ApplyMarketResearch = 'market_research',
    MeasureAdPerformance = 'measure_ad_performance',
    SelectBasicAds = 'select_basic_ads',
    SelectPersonalisedAds = 'select_personalized_ads',
    SelectPersonalisedContent = 'select_personalized_content',
    MeasureContentPerformance = 'measure_content_performance',
    UseLimitedDataToSelectContent = 'use_limited_data_to_select_content',
    UsePreciseGeolocationData = 'geolocation_data',
    ActivelyScanDeviceCharacteristicsForIdentification = 'device_characteristics',
    CookiesForExternalContentOrTechnology = 'cookiesfo-2mPCAWNr',
    CookiesForAnalysisAndDevelopment = 'cookiesfo-W6bcBzLL',
}

export const EmbedVendors = {
    Crowdsignal: {
        vendor: Vendors.Crowdsignal,
        regex: [
            /(<crowdsignal-embed|<\/crowdsignal-embed>)/i,
            /https:\/\/gotamedia\.crowdsignal\.net/i,
            /(https:\/\/app\.crowdsignal\.com\/embed\.js|https:\/\/app\.crowdsignal\.com\/survey\.js)/i,
            /https:\/\/poll\.fm/i,
        ],
    },
    Datawrapper: {
        vendor: Vendors.Datawrapper,
        regex: [
            /https:\/\/datawrapper\.dwcdn\.net/i,
        ],
    },
    Facebook: {
        vendor: Vendors.Facebook,
        regex: [
            /facebook\.com\/plugins\/(post|likebox)\.php\?/i,
            /\/\/connect\.facebook\.net/i,
        ],
    },
    Flourish: {
        vendor: Vendors.Flourish,
        regex: [
            /flourish-embed/i,
            /https:\/\/public\.flourish\.studio\/resources\/embed\.js/i,
        ],
    },
    Flowplayer: {
        vendor: Vendors.Flowplayer,
        regex: [
            /flowplayer-embed-container/i,
            /cdn\.flowplayer\.com\/players/i,
            /\/\/ljsp\.lwcdn\.com\/api\/video\/embed\.jsp/i,
        ],
    },
    GoogleForms: {
        vendor: Vendors.GoogleForms,
        regex: [
            /docs\.google\.com\/forms/i]
        ,
    },
    GoogleMaps: {
        vendor: Vendors.GoogleMaps,
        regex: [
            /www\.google\.com\/maps\/(?:d\/)?embed/i,
        ],
    },
    Ifragasatt: {
        vendor: Vendors.Ifragasatt,
        regex: [
            /https:\/\/direkt-klient\.ifragasatt\.se/i,
            /https:\/\/direkt\.ifragasatt\.se\/load/i,
        ],
    },
    Instagram: {
        vendor: Vendors.Instagram,
        regex: [
            /<blockquote class='instagram-media'/i,
            /(data-instgrm-captioned|data-instgrm-permalink|data-instgrm-version)/i,
            /https:\/\/www\.instagram\.com\/embed\.js/i,
            /https:\/\/www\.instagram\.com\/[^?]*\?utm_source=ig_embed/i,
        ],
    },
    Infogram: {
        vendor: Vendors.Infogram,
        regex: [
            /infogr\.am\/js\/dist\/embed\.js/i,
            /infogram-embed/i,
            /infogramembeds/i,
            /nfogr\.am\/js\/dist\/embed/i,
        ],
    },
    Livecenter: {
        vendor: Vendors.LiveCenter,
        regex: [
            /live-center-embed/i,
            /data-src='https:\/\/livecenter\.norkon\.net/i,
        ],
    },
    Libsyn: {
        vendor: Vendors.Libsyn,
        regex: [
            /title='Libsyn Player'/i,
            /(\/\/html5-player\.libsyn\.com\/embed|\/\/play\.libsyn\.com\/embed)/i,
        ],
    },
    Keesing: {
        vendor: Vendors.Keesing,
        regex: [],
    },
    KnightLab: {
        vendor: Vendors.KnightLab,
        regex: [
            /https:\/\/cdn\.knightlab\.com\/libs/i,
        ],
    },
    Podspace: {
        vendor: Vendors.Podspace,
        regex: [
            /embed\.pod\.space\/player\?/i,
        ],
    },
    ShootItLive: {
        vendor: Vendors.ShootItLive,
        regex: [
            /shootitlive-embed/i,
            /amazonaws\.com\/shootitlive\/shootitlive/i,
        ],
    },
    Wufoo: {
        vendor: Vendors.Wufoo,
        regex: [
            /wufoo\.com\/scripts\/embed\/form\.js/,
        ],
    },
    XTwitter: {
        vendor: Vendors.XTwitter,
        regex: [
            /https:\/\/platform\.twitter\.com\/widgets\.js/,
        ],
    },
    Youtube: {
        vendor: Vendors.Youtube,
        regex: [
            /https:\/\/www\.youtube\.com\/embed/i,
        ],
    },
    ShowheroesSE: {
        vendor: Vendors.ShowheroesSE,
        regex: [
            /https:\/\/delivery\.youplay\.se\/load\.js/i,
            /https:\/\/delivery\.youplay\.se\/load\.html/i,
        ],
    },
    Spotify: {
        vendor: Vendors.Spotify,
        regex: [
            /spotify\.com\/embed/i,
            /spotify\.com/i,
        ],
    },
    SVT: {
        vendor: Vendors.SVT,
        regex: [
            /svt\.se/i,
            /svtplay\.se/i,
        ],
    },
}

export const DEFAULT_CONSENT_CONFIG: IDidomiConfig = {
    app: {
        ignoreCountry: true,
        name: 'Barometern',
        logoUrl: 'https://cdn.gotamedia.se/applications/nxt/brands/ba/dark.svg',
        privacyPolicyURL: 'https://kundcenter.gotamedia.se/personuppgiftspolicy/',
    },
    theme: {
        linkColor: '#0182C9',
        font: 'Sanomat Sans Text',
    },
    notice: {
        position: 'popup',
        showDataProcessing: false,
        enableBulkActionOnPurposes: true,
    },
    languages: {
        enabled: ['sv'],
        default: 'sv',
    },
    preferences: {
        enableAllButtons: true,
        canCloseWhenConsentIsMissing: true,
    },
    tagManager: { provider: 'gtm' },
    integrations: {
        refreshOnConsent: true,
        vendors: {
            google: {
                enable: true,
                eprivacy: true,
            },
        },
    },
}

export const DEFAULT_USER_CONSENT: ContextType = {
    isReady: false,
    shouldRemoveCookies: false,
    didUserConsent: false,
    vendors: {
        [Vendors.AdformAS]: undefined,
        [Vendors.AdnamiAps]: undefined,
        [Vendors.AdvisibleAB]: undefined,
        [Vendors.AmazonAdvertising]: undefined,
        [Vendors.BannerflowAB]: undefined,
        [Vendors.BeeswaxIOCorporation]: undefined,
        [Vendors.Bildbyrån]: undefined,
        [Vendors.BidSwitch]: undefined,
        [Vendors.BidTheatreAB]: undefined,
        [Vendors.BonnierNews]: undefined,
        [Vendors.ChartBeat]: undefined,
        [Vendors.CrazyEgg]: undefined,
        [Vendors.CriteoSA]: undefined,
        [Vendors.Datadog]: undefined,
        [Vendors.DeltaProjectsAB]: undefined,
        [Vendors.Demandbase]: undefined,
        [Vendors.Didomi]: undefined,
        [Vendors.EinRadAB]: undefined,
        [Vendors.EmerseSverigeAB]: undefined,
        [Vendors.Essens]: undefined,
        [Vendors.Facebook]: undefined,
        [Vendors.GoogleAdvertisingProducts]: undefined,
        [Vendors.ImproveDigital]: undefined,
        [Vendors.IndexExchangeInc]: undefined,
        [Vendors.Infogram]: undefined,
        [Vendors.Instagram]: undefined,
        [Vendors.IPONWEB]: undefined,
        [Vendors.KantarMediaSwedenAB]: undefined,
        [Vendors.Keesing]: undefined,
        [Vendors.Kilkaya]: undefined,
        [Vendors.LiveCenter]: undefined,
        [Vendors.LivewrappedAB]: undefined,
        [Vendors.MagniteInc]: undefined,
        [Vendors.MagniteIncCarbonAILimited]: undefined,
        [Vendors.MagniteIncOutstream]: undefined,
        [Vendors.Platform161]: undefined,
        [Vendors.PubMaticInc]: undefined,
        [Vendors.Quantcast]: undefined,
        [Vendors.QuantCastMeasurement]: undefined,
        [Vendors.ReadpeakOy]: undefined,
        [Vendors.RTBHouse]: undefined,
        [Vendors.SeenthisAB]: undefined,
        [Vendors.ShootItLive]: undefined,
        [Vendors.ShowheroesSE]: undefined,
        [Vendors.SmartAdserver]: undefined,
        [Vendors.Spotify]: undefined,
        [Vendors.StormGeo]: undefined,
        [Vendors.StrossleInternationalAB]: undefined,
        [Vendors.TheUKTradeDeskLtd]: undefined,
        [Vendors.TravelAudience]: undefined,
        [Vendors.UserReport]: undefined,
        [Vendors.UserReportAnalytics]: undefined,
        [Vendors.XTwitter]: undefined,
        [Vendors.XandrInc]: undefined,
        [Vendors.YahooEMEALimited]: undefined,
        [Vendors.Youtube]: undefined,
        [Vendors.Flourish]: undefined,
        [Vendors.KnightLab]: undefined,
        [Vendors.Crowdsignal]: undefined,
        [Vendors.Datawrapper]: undefined,
        [Vendors.Flowplayer]: undefined,
        [Vendors.Ifragasatt]: undefined,
        [Vendors.Podspace]: undefined,
        [Vendors.Libsyn]: undefined,
        [Vendors.Wufoo]: undefined,
        [Vendors.GoogleForms]: undefined,
        [Vendors.GoogleMaps]: undefined,
        [Vendors.IMatricsAB]: undefined,
        [Vendors.SVT]: undefined,
    },
    purposes: {
        [Purposes.NecessaryCookies]: undefined,
        [Purposes.DevelopmentAndDebugging]: undefined,
        [Purposes.StoreAndOrAccessInformation]: undefined,
        [Purposes.CreatePersonalisedAdsProfile]: undefined,
        [Purposes.CreatePersonalisedContentProfile]: undefined,
        [Purposes.DevelopAndImproveProducts]: undefined,
        [Purposes.ApplyMarketResearch]: undefined,
        [Purposes.MeasureAdPerformance]: undefined,
        [Purposes.SelectBasicAds]: undefined,
        [Purposes.SelectPersonalisedAds]: undefined,
        [Purposes.SelectPersonalisedContent]: undefined,
        [Purposes.MeasureContentPerformance]: undefined,
        [Purposes.UseLimitedDataToSelectContent]: undefined,
        [Purposes.UsePreciseGeolocationData]: undefined,
        [Purposes.ActivelyScanDeviceCharacteristicsForIdentification]: undefined,
        [Purposes.CookiesForExternalContentOrTechnology]: undefined,
        [Purposes.CookiesForAnalysisAndDevelopment]: undefined,
    },
    status: buildDefaultVendorStatus(Vendors),
    approveVendorConsent(params) {
        const transaction = window.Didomi.openTransaction()
        const vendors = Array.isArray(params.vendor) ? params.vendor : [params.vendor]

        for (const vendorId of vendors) {
            transaction.enableVendor(vendorId)
        }

        transaction.enablePurposes(...params.purposes)
        transaction.commit()
    },
    config: DEFAULT_CONSENT_CONFIG,
    i18n: defaultI18n,
}
