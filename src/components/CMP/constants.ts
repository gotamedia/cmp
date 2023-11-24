import i18n from '../../utils/i18n.json'

export const DEFAULT_CONSENT_CONFIG = {
    app: {
        ignoreCountry: true,
        name: 'Barometern',
        logoUrl: 'https://cdn.gotamedia.se/applications/nxt/brands/ba/dark.svg',
        privacyPolicyURL: 'https://kundcenter.gotamedia.se/personuppgiftspolicy/'
    },
    theme: {
        linkColor: '#0182C9',
        font: 'Sanomat Sans Text'
    },
    notice: {
        position: 'popup',
        showDataProcessing: false,
        enableBulkActionOnPurposes: true,
        content: {
            popup: {
                sv: i18n.content.popup
            }
        }
    },
    languages: {
        enabled: ['sv'],
        default: 'sv'
    },
    preferences: {
        enableAllButtons: true,
        canCloseWhenConsentIsMissing: true
    },
    tagManager: { provider: 'gtm' },
    integrations: {
        refreshOnConsent: true,
        vendors: {
            google: {
                enable: true,
                eprivacy: true
            }
        }
    }
}

export enum Vendors {
    AdformAS = 50,
    AdnamiAps = 612,
    AdvisibleAB = 900,
    AmazonAdvertising = 793,
    BannerflowAB = 273,
    BeeswaxIOCorporation = 12,
    BidSwitch = 128,
    BidTheatreAB = 30,
    ChartBeat = 'c:chartbeat',
    CrazyEgg = 'c:crazy-egg',
    CriteoSA = 91,
    DeltaProjectsAB = 209,
    Demandbase = 397,
    Didomi = 'c:didomi',
    EinRadAB = 1097,
    EmerseSverigeAB = 8,
    Essens = 'c:essens-MDVrFgFB',
    Facebook = 'facebook',
    GoogleAdvertisingProducts = 'google',
    GoogleAnalyticsProducts = 'c:googleana-4TXnJigR',
    GotaMediaAB = 'c:gotamedia-WdyDtXh2',
    ImproveDigital = 253,
    IndexExchangeInc = 10,
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
    ShowheroesSE = 111,
    SmartAdserver = 45,
    StormGeo = 'c:stormgeo-RFNYgX2V',
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
    Tele2Vaxel = 'c:tele2vaxe-m3hkT6kT'
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
    ActivelyScanDeviceCharacteristicsForIdentification = 'device_characteristics'
}