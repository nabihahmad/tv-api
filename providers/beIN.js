module.exports = {
    channels: {
        "bbcEarth": /src='mena_entertaintment\/BBCEarth.png'>(.*?)<\/ul>/g,
        "beINMoviesHD1": /src='mena_entertaintment\/MoviesHD1(.*?)<\/ul>/g,
        "beINMoviesHD2": /src='mena_entertaintment\/MoviesHD2(.*?)<\/ul>/g,
        "beINMoviesHD3": /src='mena_entertaintment\/MoviesHD3(.*?)<\/ul>/g,
        "beINMoviesHD4": /src='mena_entertaintment\/MoviesHD4(.*?)<\/ul>/g,
        //"foxActionMovies": /src='mena_entertaintment\/FOXActionMovies(.*?)<\/ul>/g,
        //"tcm": /src='mena_entertaintment\/TCM(.*?)<\/ul>/g,
        //"amc": /src='mena_entertaintment\/amc(.*?)<\/ul>/g,
        "starMovies": /src='mena_entertaintment\/Star_Movies_HD(.*?)<\/ul>/g,
        //"natGeoWild":  /src='mena_entertaintment\/NatGeoWild_HD(.*?)<\/ul>/g,
        //"natGeo":  /src='mena_entertaintment\/NatGeo_HD(.*?)<\/ul>/g,
        //"dmax": /src='mena_entertaintment\/DMAX(.*?)<\/ul>/g,
        "cnn": /src='mena_entertaintment\/CNNHD(.*?)<\/ul>/g
    },

    sports_channels: {
        "beinSports1": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS1_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports2": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS2_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports3": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS3_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports4": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS4_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports5": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS5_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports6": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS6_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports7": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS7_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "beinSports1Premium": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS1_PREMIUM_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports2Premium": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS2_PREMIUM_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports3Premium": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS3_PREMIUM_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports1Xtra": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS_XTRA1_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports2Xtra": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS_XTRA2_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports1En": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS1_ENGLISH_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports2En": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS2_ENGLISH_Digital_Mono.png(.*?)<\/ul>/g,
        "beinSports3En": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/beIN_SPORTS3_ENGLISH_Digital_Mono.png(.*?)<\/ul>/g,
        //"beinSportsNews": /src='https:\/\/www.bein.com\/en\/wp-content\/uploads\/sites\/3\/2020\/06\/News-1.png(.*?)<\/ul>/g,
        //"beinSports": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/bein_SPORTS_FTA_DIGITAL_Mono.png(.*?)<\/ul>/g,
        "NBA": /src='https:\/\/assets.bein.com\/mena\/sites\/3\/2015\/06\/NBA_DIGITAL_Mono.png(.*?)<\/ul>/g
    },

    getSchedule: function() {
        return {"test": 1};
    }
}