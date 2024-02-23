const data = [
    [1451520000000, 0.9363],
    [1451520000000, 0.99],
    [1419984000000, 0.8998],
    [1419984000000, 0.87],
    [1388448000000, 0.7408],
    [1388448000000, 0.74],
    [1356912000000, 0.6679],
    [1356912000000, 0.65],
    [1325289600000, 0.624],
    [1325289600000, 0.63],
    [1293753600000, 0.5788],
    [1293753600000, 0.6],
    [1262217600000, 0.7014],
    [1262217600000, 0.71],
    [1230681600000, 0.6367],
    [1230681600000, 0.64],
    [1199059200000, 0.5419],
    [1199059200000, 0.54],
    [1167523200000, 0.61],
    [1167523200000, 0.66],
    [1135987200000, 0.6125],
    [1135987200000, 0.63],
    [1104451200000, 0.6585],
    [1104451200000, 0.69],
    [1072828800000, 0.5783],
    [1072828800000, 0.55],
    [1041292800000, 0.6134],
    [1041292800000, 0.62],
    [1009756800000, 0.6023],
    [1009756800000, 0.63],
    [978220800000, 0.5473],
    [978220800000, 0.55],
    [946598400000, 0.4262],
    [946598400000, 0.42],
    [915062400000, 0.4438],
    [915062400000, 0.42],
    [883526400000, 0.6344],
    [883526400000, 0.64],
    [851990400000, 0.5187],
    [851990400000, 0.48],
    [820368000000, 0.3228],
    [820368000000, 0.35],
    [788832000000, 0.4577],
    [788832000000, 0.46],
    [757296000000, 0.3409],
    [757296000000, 0.32],
    [725760000000, 0.2853],
    [725760000000, 0.24],
    [694137600000, 0.2571],
    [694137600000, 0.23],
    [662601600000, 0.4055],
    [662601600000, 0.43],
    [631065600000, 0.4328],
    [631065600000, 0.44],
    [599529600000, 0.297],
    [599529600000, 0.29],
    [567907200000, 0.3757],
    [567907200000, 0.41],
    [536371200000, 0.3696],
    [536371200000, 0.33],
    [504835200000, 0.2296],
    [504835200000, 0.19],
    [473299200000, 0.1342],
    [473299200000, 0.12],
    [441676800000, 0.149],
    [441676800000, 0.15],
    [410140800000, 0.3411],
    [410140800000, 0.3],
    [378604800000, 0.1815],
    [378604800000, 0.13],
    [347068800000, 0.2999],
    [347068800000, 0.33],
    [315446400000, 0.2637],
    [315446400000, 0.27],
    [283910400000, 0.2273],
    [283910400000, 0.17],
    [252374400000, 0.1123],
    [252374400000, 0.07],
    [220838400000, 0.1978],
    [220838400000, 0.18],
    [189216000000, -0.0792],
    [189216000000, -0.11],
    [157680000000, 0.0034],
    [157680000000, -0.02],
    [126144000000, -0.0719],
    [126144000000, -0.07],
    [94608000000, 0.1641],
    [94608000000, 0.15],
    [62985600000, 0.0264],
    [62985600000, 0.01],
    [31449600000, -0.0783],
    [31449600000, -0.09],
    [-86400000, 0.0372],
    [-86400000, 0.02],
    [-31622400000, 0.0929],
    [-31622400000, 0.07],
    [-63244800000, -0.0296],
    [-63244800000, -0.07],
    [-94780800000, -0.0131],
    [-94780800000, -0.02],
    [-126316800000, -0.0227],
    [-126316800000, -0.05],
    [-157852800000, -0.078],
    [-157852800000, -0.1],
    [-189475200000, -0.1495],
    [-189475200000, -0.2],
    [-221011200000, 0.1068],
    [-221011200000, 0.06],
    [-252547200000, 0.0888],
    [-252547200000, 0.03],
    [-284083200000, 0.0775],
    [-284083200000, 0.05],
    [-315705600000, 0.0204],
    [-315705600000, -0.02],
    [-347241600000, 0.0596],
    [-347241600000, 0.03],
    [-378777600000, 0.1095],
    [-378777600000, 0.07],
    [-410313600000, 0.0488],
    [-410313600000, 0.04],
    [-441936000000, -0.199],
    [-441936000000, -0.2],
    [-473472000000, -0.1354],
    [-473472000000, -0.15],
    [-505008000000, -0.1165],
    [-505008000000, -0.13],
    [-536544000000, 0.0952],
    [-536544000000, 0.08],
    [-568166400000, 0.0248],
    [-568166400000, 0.01],
    [-599702400000, -0.0132],
    [-599702400000, -0.07],
    [-631238400000, -0.1616],
    [-631238400000, -0.18],
    [-662774400000, -0.0568],
    [-662774400000, -0.09],
    [-694396800000, -0.0487],
    [-694396800000, -0.09],
    [-725932800000, -0.0477],
    [-725932800000, -0.05],
    [-757468800000, -0.004],
    [-757468800000, -0.04],
    [-789004800000, 0.171],
    [-789004800000, 0.12],
    [-820627200000, 0.2928],
    [-820627200000, 0.25],
    [-852163200000, 0.157],
    [-852163200000, 0.13],
    [-883699200000, 0.1538],
    [-883699200000, 0.09],
    [-915235200000, 0.196],
    [-915235200000, 0.12],
    [-946857600000, 0.0947],
    [-946857600000, 0.08],
    [-978393600000, -0.0139],
    [-978393600000, -0.03],
    [-1009929600000, -0.0288],
    [-1009929600000, -0.03],
    [-1041465600000, -0.0157],
    [-1041465600000, -0.03],
    [-1073088000000, -0.1134],
    [-1073088000000, -0.15],
    [-1104624000000, -0.1392],
    [-1104624000000, -0.2],
    [-1136160000000, -0.1015],
    [-1136160000000, -0.14],
    [-1167696000000, -0.2439],
    [-1167696000000, -0.29],
    [-1199318400000, -0.1168],
    [-1199318400000, -0.17],
    [-1230854400000, -0.0686],
    [-1230854400000, -0.09],
    [-1262390400000, -0.1003],
    [-1262390400000, -0.15],
    [-1293926400000, -0.2985],
    [-1293926400000, -0.36],
    [-1325548800000, -0.1774],
    [-1325548800000, -0.21],
    [-1357084800000, -0.1546],
    [-1357084800000, -0.21],
    [-1388620800000, -0.0667],
    [-1388620800000, -0.1],
    [-1420156800000, -0.1481],
    [-1420156800000, -0.21],
    [-1451779200000, -0.2486],
    [-1451779200000, -0.28],
    [-1483315200000, -0.2156],
    [-1483315200000, -0.24],
    [-1514851200000, -0.2304],
    [-1514851200000, -0.28],
    [-1546387200000, -0.1485],
    [-1546387200000, -0.21],
    [-1578009600000, -0.2105],
    [-1578009600000, -0.27],
    [-1609545600000, -0.2055],
    [-1609545600000, -0.22],
    [-1641081600000, -0.2084],
    [-1641081600000, -0.26],
    [-1672617600000, -0.3146],
    [-1672617600000, -0.4],
    [-1704240000000, -0.293],
    [-1704240000000, -0.34],
    [-1735776000000, -0.0693],
    [-1735776000000, -0.11],
    [-1767312000000, -0.1395],
    [-1767312000000, -0.16],
    [-1798848000000, -0.3162],
    [-1798848000000, -0.34],
    [-1830470400000, -0.3288],
    [-1830470400000, -0.35],
    [-1862006400000, -0.4332],
    [-1862006400000, -0.44],
    [-1893542400000, -0.3789],
    [-1893542400000, -0.42],
    [-1925078400000, -0.4261],
    [-1925078400000, -0.47],
    [-1956700800000, -0.4396],
    [-1956700800000, -0.43],
    [-1988236800000, -0.3706],
    [-1988236800000, -0.4],
    [-2019772800000, -0.2174],
    [-2019772800000, -0.23],
    [-2051308800000, -0.2931],
    [-2051308800000, -0.28],
    [-2082931200000, -0.4194],
    [-2082931200000, -0.44],
    [-2114467200000, -0.3369],
    [-2114467200000, -0.35],
    [-2146003200000, -0.2463],
    [-2146003200000, -0.27],
    [-2177539200000, -0.1417],
    [-2177539200000, -0.15],
    [-2209075200000, -0.0679],
    [-2209075200000, -0.09],
    [-2240611200000, -0.1173],
    [-2240611200000, -0.16],
    [-2272147200000, -0.2546],
    [-2272147200000, -0.28],
    [-2303683200000, -0.1224],
    [-2303683200000, -0.11],
    [-2335305600000, -0.0974],
    [-2335305600000, -0.15],
    [-2366841600000, -0.229],
    [-2366841600000, -0.21],
    [-2398377600000, -0.2808],
    [-2398377600000, -0.31],
    [-2429913600000, -0.3212],
    [-2429913600000, -0.3],
    [-2461536000000, -0.3062],
    [-2461536000000, -0.27],
    [-2493072000000, -0.2532],
    [-2493072000000, -0.24],
    [-2524608000000, -0.322],
    [-2524608000000, -0.37],
    [-2556144000000, -0.0982],
    [-2556144000000, -0.12],
    [-2587766400000, -0.1471],
    [-2587766400000, -0.2],
    [-2619302400000, -0.2489],
    [-2619302400000, -0.33],
    [-2650838400000, -0.2003],
    [-2650838400000, -0.31],
    [-2682374400000, -0.2125],
    [-2682374400000, -0.32],
    [-2713996800000, -0.2009],
    [-2713996800000, -0.28],
    [-2745532800000, -0.1424],
    [-2745532800000, -0.21],
    [-2777068800000, -0.0648],
    [-2777068800000, -0.1],
    [-2808604800000, -0.0628],
    [-2808604800000, -0.12],
    [-2840227200000, -0.1148],
    [-2840227200000, -0.2]
];

Highcharts.chart('container', {
    title: {
        text: 'Annual global temperature mean from 1880 to 2016'
    },
    accessibility: {
        description: `
            A chart displaying annual global temperature mean from 1880 to 2016.
            It employs two series, one column and one line,
            to convey the same data at different resolutions.
            There is only one column per thirty years,
            but the line series have a datapoint per year.
        `
    },
    series: [{
        type: 'column',
        data: data.map((d, i) => (i % 30 === 0) && d),
        pointWidth: 30
    }, {
        data: data,
        pointInterval: 36e5
    }],
    yAxis: {
        tickInterval: 0.5,
        endOnTick: true,
        max: 1
    },
    xAxis: {
        type: 'datetime'
    }
});