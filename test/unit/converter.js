var should = require('chai').should(),
    adbsconverter = require('../../src/converter.js'),
    bs2ad = adbsconverter.bs2ad,
    ad2bs = adbsconverter.ad2bs;

describe('#bs2ad', function() {
    it('Converts 2072/4/3 to 2015/7/19', function() {
        var expectedDate = {
            "year": 2015,
            "month": 7,
            "strMonth": "July",
            "strShortMonth": "Jul",
            "day": 19,
            "dayOfWeek": 0,
            "strDayOfWeek": "Sunday",
            "strShortDayOfWeek": "Sun"
        };
        bs2ad('2072/4/3').should.eql(expectedDate);
    });

    it('Converts 2072/4/16 to 2015/8/1', function() {
        var expectedDate = {
            "year": 2015,
            "month": 8,
            "strMonth": "August",
            "strShortMonth": "Aug",
            "day": 1,
            "dayOfWeek": 6,
            "strDayOfWeek": "Saturday",
            "strShortDayOfWeek": "Sat"
        };
        bs2ad('2072/4/16').should.eql(expectedDate);
    });

    it('Converts 2070/9/17 to 2014/1/1', function() {
        var expectedDate = {
            "year": 2014,
            "month": 1,
            "strMonth": "January",
            "strShortMonth": "Jan",
            "day": 1,
            "dayOfWeek": 3,
            "strDayOfWeek": "Wednesday",
            "strShortDayOfWeek": "Wed"
        };
        bs2ad('2070/9/17').should.eql(expectedDate);
    });

    it('Converts 2072/4/1 to 2015/7/17', function() {
        var expectedDate = {
            "year": 2015,
            "month": 7,
            "strMonth": "July",
            "strShortMonth": "Jul",
            "day": 17,
            "dayOfWeek": 5,
            "strDayOfWeek": "Friday",
            "strShortDayOfWeek": "Fri"
        };
        bs2ad('2072/4/1').should.eql(expectedDate);
    });

    it('Converts 1978/1/1 to 1921/4/13', function() {
        var expectedDate = {
            "year": 1921,
            "month": 4,
            "strMonth": "April",
            "strShortMonth": "Apr",
            "day": 13,
            "dayOfWeek": 3,
            "strDayOfWeek": "Wednesday",
            "strShortDayOfWeek": "Wed"
        };
        bs2ad('1978/1/1').should.eql(expectedDate);
    });

    it('Converts 2092/12/30 to 2036/4/14', function() {
        var expectedDate = {
            "year": 2036,
            "month": 4,
            "strMonth": "April",
            "strShortMonth": "Apr",
            "day": 14,
            "dayOfWeek": 1,
            "strDayOfWeek": "Monday",
            "strShortDayOfWeek": "Mon"
        };
        bs2ad('2092/12/30').should.eql(expectedDate);
    });

    //my birthday :D
    it('Converts 2047/4/26 to 1990/8/10', function() {
        var expectedDate = {
            "year": 1990,
            "month": 8,
            "strMonth": "August",
            "strShortMonth": "Aug",
            "day": 10,
            "dayOfWeek": 5,
            "strDayOfWeek": "Friday",
            "strShortDayOfWeek": "Fri"
        };
        bs2ad('2047/4/26').should.eql(expectedDate);
    });

    it('Converts 2076/09/16 to 2020/01/01', function() {
        var expectedDate = {
            "year": 2020,
            "month": 1,
            "strMonth": "January",
            "strShortMonth": "Jan",
            "day": 1,
            "dayOfWeek": 3,
            "strDayOfWeek": "Wednesday",
            "strShortDayOfWeek": "Wed"
        };
        bs2ad('2076/09/16').should.eql(expectedDate);
    });
});

describe('#ad2bs', function() {
    it('Converts 2015/8/1 to 2072/4/16', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७२",
                "month": "४",
                "day": "१६",
                "strMonth": "श्रावण",
                "strShortMonth": "श्रा",
                "dayOfWeek": "६",
                "strDayOfWeek": "शनिवार",
                "strShortDayOfWeek": "शनि",
                "strMinDayOfWeek": "श",
                "totalDaysInMonth": "३२"
            },
            "en": {
                "year": 2072,
                "month": 4,
                "day": 16,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 6,
                "strDayOfWeek": "Shanibaar",
                "strShortDayOfWeek": "Shani",
                "strMinDayOfWeek": "Sha",
                "totalDaysInMonth": 32
            }
        };
        ad2bs('2015/8/1').should.eql(expectedDate);
    });

    it('Converts 2014/1/1 to 2070/9/17', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७०",
                "month": "९",
                "day": "१७",
                "strMonth": "पौष",
                "strShortMonth": "पौ",
                "dayOfWeek": "३",
                "strDayOfWeek": "बुधवार",
                "strShortDayOfWeek": "बुध",
                "strMinDayOfWeek": "बु",
                "totalDaysInMonth": "३०"
            },
            "en": {
                "year": 2070,
                "month": 9,
                "day": 17,
                "strMonth": "Paush",
                "strShortMonth": "Pau",
                "dayOfWeek": 3,
                "strDayOfWeek": "Budhabaar",
                "strShortDayOfWeek": "Budha",
                "strMinDayOfWeek": "Bu",
                "totalDaysInMonth": 30
            }
        };
        ad2bs('2014/1/1').should.eql(expectedDate);
    });

    it('Converts 2015/7/19 to 2072/4/3', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७२",
                "month": "४",
                "day": "३",
                "strMonth": "श्रावण",
                "strShortMonth": "श्रा",
                "dayOfWeek": "०",
                "strDayOfWeek": "आइतवार",
                "strShortDayOfWeek": "आइत",
                "strMinDayOfWeek": "आ",
                "totalDaysInMonth": "३२"
            },
            "en": {
                "year": 2072,
                "month": 4,
                "day": 3,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 0,
                "strDayOfWeek": "Aaitabaar",
                "strShortDayOfWeek": "Aaita",
                "strMinDayOfWeek": "Aai",
                "totalDaysInMonth": 32
            }
        };
        ad2bs('2015/7/19').should.eql(expectedDate);
    });

    it('Converts 2015/7/17 to 2072/4/1', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७२",
                "month": "४",
                "day": "१",
                "strMonth": "श्रावण",
                "strShortMonth": "श्रा",
                "dayOfWeek": "५",
                "strDayOfWeek": "शुक्रवार",
                "strShortDayOfWeek": "शुक्र",
                "strMinDayOfWeek": "शु",
                "totalDaysInMonth": "३२"
            },
            "en": {
                "year": 2072,
                "month": 4,
                "day": 1,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 5,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "strMinDayOfWeek": "Shu",
                "totalDaysInMonth": 32
            }
        };
        ad2bs('2015/7/17').should.eql(expectedDate);
    });

    it('Converts 2017/4/13 to 2073/12/31', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७३",
                "month": "१२",
                "day": "३१",
                "strMonth": "चैत्र",
                "strShortMonth": "चै",
                "dayOfWeek": "४",
                "strDayOfWeek": "बिहिवार",
                "strShortDayOfWeek": "बिहि",
                "strMinDayOfWeek": "बि",
                "totalDaysInMonth": "३१"
            },
            "en": {
                "year": 2073,
                "month": 12,
                "day": 31,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 4,
                "strDayOfWeek": "Bihibaar",
                "strShortDayOfWeek": "Bihi",
                "strMinDayOfWeek": "Bi",
                "totalDaysInMonth": 31
            }
        };
        ad2bs('2017/4/13').should.eql(expectedDate);
    });

    it('Converts 2018/4/13 to 2074/12/30', function() {
        var expectedDate = {
            "ne": {
                "year": "२०७४",
                "month": "१२",
                "day": "३०",
                "strMonth": "चैत्र",
                "strShortMonth": "चै",
                "dayOfWeek": "५",
                "strDayOfWeek": "शुक्रवार",
                "strShortDayOfWeek": "शुक्र",
                "strMinDayOfWeek": "शु",
                "totalDaysInMonth": "३०"
            },
            "en": {
                "year": 2074,
                "month": 12,
                "day": 30,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 5,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "strMinDayOfWeek": "Shu",
                "totalDaysInMonth": 30
            }
        };
        ad2bs('2018/4/13').should.eql(expectedDate);
    });

    it('Converts 2036/4/14 to 2092/12/30', function() {
        var expectedDate = {
            "ne": {
                "year": "२०९२",
                "month": "१२",
                "day": "३०",
                "strMonth": "चैत्र",
                "strShortMonth": "चै",
                "dayOfWeek": "१",
                "strDayOfWeek": "सोमवार",
                "strShortDayOfWeek": "सोम",
                "strMinDayOfWeek": "सो",
                "totalDaysInMonth": "३०"
            },
            "en": {
                "year": 2092,
                "month": 12,
                "day": 30,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 1,
                "strDayOfWeek": "Sombaar",
                "strShortDayOfWeek": "Som",
                "strMinDayOfWeek": "So",
                "totalDaysInMonth": 30
            }
        };
        ad2bs('2036/4/14').should.eql(expectedDate);
    });

    //my birthday :D
    it('Converts 1990/8/10 to 2047/4/26', function() {
        var expectedDate = {
            "ne": {
                "year": "२०४७",
                "month": "४",
                "day": "२६",
                "strMonth": "श्रावण",
                "strShortMonth": "श्रा",
                "dayOfWeek": "५",
                "strDayOfWeek": "शुक्रवार",
                "strShortDayOfWeek": "शुक्र",
                "strMinDayOfWeek": "शु",
                "totalDaysInMonth": "३२"
            },
            "en": {
                "year": 2047,
                "month": 4,
                "day": 26,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 5,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "strMinDayOfWeek": "Shu",
                "totalDaysInMonth": 32
            }
        };
        ad2bs('1990/8/10').should.eql(expectedDate);
    });
});
