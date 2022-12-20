/* *
 *
 *  (c) 2010-2022
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

'use strict';

/* *
 *  Imports
 *
 * */

import TiledWebMapSeriesOptions from './TiledWebMapSeriesOptions.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';

const {
    seriesTypes: {
        map: MapSeries
    }
} = SeriesRegistry;

import U from '../../Core/Utilities.js';

const {
    extend,
    merge,
    pick
} = U;

/* *
 *
 *  Declarations
 *
 * */

declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {

    }
}

/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tiledwebmap
 *
 * @augments Highcharts.Series
 */
class TiledWebMapSeries extends MapSeries {

    /* *
     *
     * Static properties
     *
     * */

    // public static compose = MapBubbleSeries.compose;

    public static defaultOptions: TiledWebMapSeriesOptions = merge(MapSeries.defaultOptions, {
        states: {
            inactive: {
                enabled: true
            }
        },
        provider: {
            type: 'OpenStreetMap'
        }
    });

    /* *
     *
     * Properties
     *
     * */

    public options: TiledWebMapSeriesOptions = void 0 as any;
    tiles: any;


    /**
     *
     *  Functions
     *
     */

    public drawPoints(): any {
        if (!this.tiles) {
            this.tiles = {};
        }
        if (!this.transformGroups) {
            this.transformGroups = [];
        }

        const {
                chart,
                tiles,
                transformGroups
            } = this,
            options = this.options,
            provider = options.provider,
            mapView: any = chart.mapView,
            { zoom } = mapView,
            zoomCeil = Math.ceil(zoom);

        if (!transformGroups[zoomCeil]) {
            transformGroups[zoomCeil] = chart.renderer.g().add(this.group);
        }
        const origin = mapView.lonLatToPixels({
            lon: -180,
            lat: 85.0511287798
        });
        transformGroups[zoomCeil].attr({
            translateX: origin.x,
            translateY: origin.y
        });

        const lon2tile = (lon: any, zoom: any): any => Math.floor(
            (lon + 180) / 360 * Math.pow(2, zoom)
        );

        const lat2tile = (lat: any, zoom: any): any => Math.floor(
            (
                1 - Math.log(
                    Math.tan(lat * Math.PI / 180) +
                    1 / Math.cos(lat * Math.PI / 180)
                ) / Math.PI
            ) /
            2 * Math.pow(2, zoom)
        );

        const tile2lon = (x: number, z: number): number =>
            x / Math.pow(2, z) * 360 - 180;
        const tile2lat = (y: number, z: number): number => {
            const n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
            return (
                180 /
                Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
            );
        };

        const addTile = (x: number, y: number, zoom: any): void => {
            if (!tiles[`${zoom},${x},${y}`]) {
                let url: string;

                const s: string = provider.subdomain || '';

                if (provider.url) {
                    url = provider.url
                        .replace("{x}", x.toString())
                        .replace("{y}", y.toString())
                        .replace("{zoom}", zoom.toString())
                        .replace("{s}", s);
                } else if (provider.type === 'OpenStreetMap') {
                    const s = pick(provider.subdomain, 'a');

                    if (provider.theme === 'bicycle') {
                        url = `http://${s}.tile.thunderforest.com/cycle/${zoom}/${x}/${y}.png`;
                    } else {
                        url = `https://${s}.tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
                    }

                } else if (provider.type === 'Google') {

                    url = `https://www.google.com/maps/vt?pb=!1m5!1m4!1i${zoom}!2i${x}!3i${y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965`;

                } else if (provider.type === 'Carto') {
                    const s = pick(provider.subdomain, 'a');

                    if (provider.theme === 'dark') {
                        url = `http://${s}.basemaps.cartocdn.com/dark_all/${zoom}/${x}/${y}.png`;
                    } else {
                        url = `http://${s}.basemaps.cartocdn.com/light_all/${zoom}/${x}/${y}.png`;
                    }

                } else if (provider.type === 'Gaode') {
                    const s = pick(provider.subdomain, '01');

                    if (provider.theme === 'Satelite') {
                        url = `http://webst${s}.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${zoom}`;
                    } else {
                        url = `http://webrd${s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${zoom}`;
                    }

                } else {
                    url = 'empty';
                }

                tiles[`${zoom},${x},${y}`] = chart.renderer.image(
                    url,
                    x * 256,
                    y * 256
                )
                    .attr({
                        zIndex: 2
                    })
                    .add(transformGroups[zoomCeil]);
            }
            tiles[`${zoom},${x},${y}`].isActive = true;
        };

        const topLeft = mapView.pixelsToLonLat({
                x: 0,
                y: 0
            }),
            bottomRight = mapView.pixelsToLonLat({
                x: chart.plotWidth,
                y: chart.plotHeight
            });

        let xStart = lon2tile(topLeft.lon, zoom),
            xEnd = lon2tile(bottomRight.lon, zoom),
            yStart = lat2tile(topLeft.lat, zoom),
            yEnd = lat2tile(bottomRight.lat, zoom),
            pos;

        for (let x = xStart; x <= xEnd; x++) {
            for (let y = yStart; y <= yEnd; y++) {
                addTile(x, y, zoom);
            }
        }

        // Destroy old and unused
        Object.keys(tiles).forEach((key): any => {
            if (tiles[key].isActive) {
                tiles[key].isActive = false;
            } else {
                tiles[key].destroy();
                delete tiles[key];
            }
        });
    }
}

/* *
 *
 *  Prototype properties
 *
 * */

interface TiledWebMapSeries {
    // type: string;
}

/* *
 *
 *  Registry
 *
 * */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        tiledwebmap: typeof TiledWebMapSeries;
    }
}

SeriesRegistry.registerSeriesType('tiledwebmap', TiledWebMapSeries);

/* *
 *
 *  Default export
 *
 * */

export default TiledWebMapSeries;

/* *
 *
 *  API options
 *
 * */

''; // adds doclets above to transpiled file
