import defaultI18n from '../../utils/i18n.json'

import type { ContextType } from '../../contexts/Consent'

import { buildDefaultVendorStatus } from '../../components/CMP/utils'
import { IDidomiConfig } from '@didomi/react'

export enum Vendors {
    AdformAS = 50,
    AdnamiAps = 612,
    AdvisibleAB = 900,
    AmazonAdvertising = 793,
    BannerflowAB = 273,
    BeeswaxIOCorporation = 12,
    BidSwitch = 128,
    BidTheatreAB = 30,
    BonnierNews = 'c:bonnierne-rRkEgPtY',
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

export const EmbedVendors = {
    Crowdsignal: {
        vendor: Vendors.Crowdsignal,
        regex: {
            html: /(<crowdsignal-embed|<\/crowdsignal-embed>)/i,
            src: /https:\/\/gotamedia\.crowdsignal\.net/i,
            script: /(https:\/\/app\.crowdsignal\.com\/embed\.js|https:\/\/app\.crowdsignal\.com\/survey\.js)/i
        }
    },
    Datawrapper: {
        vendor: Vendors.Datawrapper,
        regex: { iframeSrc: /https:\/\/datawrapper\.dwcdn\.net/i }
    },
    Facebook: {
        vendor: Vendors.Facebook,
        regex: { iframeSrc: /facebook\.com\/plugins\/(post|likebox)\.php\?/i }
    },
    Flourish: {
        vendor: Vendors.Flourish,
        regex: {
            html: /flourish-embed/i,
            script: /https:\/\/public\.flourish\.studio\/resources\/embed\.js/i
        }
    },
    Flowplayer: {
        vendor: Vendors.Flowplayer,
        regex: {
            html: /flowplayer-embed-container/i,
            script: /cdn\.flowplayer\.com\/players/i,
            cdn: /\/\/ljsp\.lwcdn\.com\/api\/video\/embed\.jsp/i
        }
    },
    GoogleForms: {
        vendor: Vendors.GoogleForms,
        regex: { iframeSrc: /docs\.google\.com\/forms/i }
    },
    GoogleMaps: {
        vendor: Vendors.GoogleMaps,
        regex: { iframeSrc: /www\.google\.com\/maps\/(?:d\/)?embed/i }
    },
    Ifragasatt: {
        vendor: Vendors.Ifragasatt,
        regex: {
            iframeSrc: /https:\/\/direkt-klient\.ifragasatt\.se/i,
            fetchSrc: /https:\/\/direkt\.ifragasatt\.se\/load/i
        }
    },
    Instagram: {
        vendor: Vendors.Instagram,
        regex: {
            blockquotes: /<blockquote class='instagram-media'/i,
            htmlAttributes: /(data-instgrm-captioned|data-instgrm-permalink|data-instgrm-version)/i,
            script: /https:\/\/www\.instagram\.com\/embed\.js/i,
            tracker: /https:\/\/www\.instagram\.com\/[^?]*\?utm_source=ig_embed/i
        }
    },
    Livecenter: {
        vendor: Vendors.LiveCenter,
        regex: {
            html: /live-center-embed/i,
            script: /data-src='https:\/\/livecenter\.norkon\.net/i
        }
    },
    Libsyn: {
        vendor: Vendors.Libsyn,
        regex: {
            html: /title='Libsyn Player'/i,
            iframeSrc: /(\/\/html5-player\.libsyn\.com\/embed|'\/\/play\.libsyn\.com\/embed)/i
        }
    },
    Keesing: {
        vendor: Vendors.Keesing,
        regex: {}
    },
    KnightLab: {
        vendor: Vendors.KnightLab,
        regex: { iframeSrc: /https:\/\/cdn\.knightlab\.com\/libs/i }
    },
    Podspace: {
        vendor: Vendors.Podspace,
        regex: { iframeSrc: /embed\.pod\.space\/player\?/i }
    },
    Wufoo: {
        vendor: Vendors.Wufoo,
        regex: { scripts: /wufoo\.com\/scripts\/embed\/form\.js/ }
    },
    XTwitter: {
        vendor: Vendors.XTwitter,
        regex: { script: /https:\/\/platform\.twitter\.com\/widgets\.js/ }
    },
    Youtube: {
        vendor: Vendors.Youtube,
        regex: { iframeSrc: /https:\/\/www\.youtube\.com\/embed/i }
    },
    ShowheroesSE: {
        vendor: Vendors.ShowheroesSE,
        regex: { script: /https:\/\/delivery\.youplay\.se\/load\.js/i }
    }
}

export const DEFAULT_CONSENT_CONFIG: IDidomiConfig = {
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
        enableBulkActionOnPurposes: true
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

export const DEFAULT_USER_CONSENT: ContextType = {
    isReady: false,
    shouldRemoveCookies: false,
    vendors: {
        [Vendors.AdformAS]: undefined,
        [Vendors.AdnamiAps]: undefined,
        [Vendors.AdvisibleAB]: undefined,
        [Vendors.AmazonAdvertising]: undefined,
        [Vendors.BannerflowAB]: undefined,
        [Vendors.BeeswaxIOCorporation]: undefined,
        [Vendors.BidSwitch]: undefined,
        [Vendors.BidTheatreAB]: undefined,
        [Vendors.BonnierNews]: undefined,
        [Vendors.ChartBeat]: undefined,
        [Vendors.CrazyEgg]: undefined,
        [Vendors.CriteoSA]: undefined,
        [Vendors.DeltaProjectsAB]: undefined,
        [Vendors.Demandbase]: undefined,
        [Vendors.Didomi]: undefined,
        [Vendors.EinRadAB]: undefined,
        [Vendors.EmerseSverigeAB]: undefined,
        [Vendors.Essens]: undefined,
        [Vendors.Facebook]: undefined,
        [Vendors.GoogleAdvertisingProducts]: undefined,
        [Vendors.GoogleAnalyticsProducts]: undefined,
        [Vendors.GotaMediaAB]: undefined,
        [Vendors.ImproveDigital]: undefined,
        [Vendors.IndexExchangeInc]: undefined,
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
        [Vendors.ShowheroesSE]: undefined,
        [Vendors.SmartAdserver]: undefined,
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
        [Vendors.Tele2Vaxel]: undefined
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
        [Purposes.ActivelyScanDeviceCharacteristicsForIdentification]: undefined
    },
    status: buildDefaultVendorStatus(Vendors),
    approveVendorConsent(params) {
        const transaction = window.Didomi.openTransaction()
        transaction.enableVendor(params.vendor)
        transaction.enablePurposes(...params.purposes)
        transaction.commit()
    },
    config: DEFAULT_CONSENT_CONFIG,
    i18n: defaultI18n
}