import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Box, Heading, Text } from '@chakra-ui/react';

const Map = () => {
    const mapContainerRef = useRef<any>(null);

    const [lat, setLat] = useState(45.4394);
    const [lng, setLng] = useState(8.6241);
    const [zoom, setZoom] = useState(11);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${
                process.env.NEXT_PUBLIC_MAPTILER_API_KEY || ''
            }`,
            // style,
            center: [lng, lat],
            zoom,
        });

        // Add marker to map
        new maplibregl.Marker().setLngLat([8.6241, 45.4394]).addTo(map);
        new maplibregl.Marker().setLngLat([-122.48369693756104, 37.83381888486939]).addTo(map);
        new maplibregl.Marker().setLngLat([-122.49378204345702, 37.83368330777276]).addTo(map);

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new maplibregl.NavigationControl({}), 'top-right');

        map.on('move', () => {
            setLng(Number(map.getCenter().lng.toFixed(4)));
            setLat(Number(map.getCenter().lat.toFixed(4)));
            setZoom(Number(map.getZoom().toFixed(2)));
        });

        map.on('load', () => {
            map.addSource('route', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [
                            [-122.48369693756104, 37.83381888486939],
                            [-122.48348236083984, 37.83317489144141],
                            [-122.48339653015138, 37.83270036637107],
                            [-122.48356819152832, 37.832056363179625],
                            [-122.48404026031496, 37.83114119107971],
                            [-122.48404026031496, 37.83049717427869],
                            [-122.48348236083984, 37.829920943955045],
                            [-122.48356819152832, 37.82954808664175],
                            [-122.48507022857666, 37.82944639795659],
                            [-122.48610019683838, 37.82880236636284],
                            [-122.48695850372314, 37.82931081282506],
                            [-122.48700141906738, 37.83080223556934],
                            [-122.48751640319824, 37.83168351665737],
                            [-122.48803138732912, 37.832158048267786],
                            [-122.48888969421387, 37.83297152392784],
                            [-122.48987674713133, 37.83263257682617],
                            [-122.49043464660643, 37.832937629287755],
                            [-122.49125003814696, 37.832429207817725],
                            [-122.49163627624512, 37.832564787218985],
                            [-122.49223709106445, 37.83337825839438],
                            [-122.49378204345702, 37.83368330777276],
                        ],
                    },
                },
            });

            map.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#080582',
                    'line-width': 8,
                },
            });
        });

        return () => map.remove();
    }, []);

    return (
        <Box>
            <Heading
                as='h2'
                textTransform='uppercase'
                fontSize='1.3rem'
                fontWeight='400'
                p='20px'
                pl='10px'
                textAlign='center'
            >
                Come visit us at our Campus
            </Heading>

            <Box /*position='relative' top='-30px'*/>
                {/* <Box
                    display='inline-block'
                    position='relative'
                    top='48px'
                    // position='absolute'
                    // top={0}
                    // left={0}
                    marginLeft='12px'
                    bgColor='#404040'
                    color='white'
                    px='6px'
                    pb='6px'
                    fontWeight='bold'
                    zIndex='banner'
                >
                    <Box>
                        <Text>
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </Text>
                    </Box>
                </Box> */}
                <Box ref={mapContainerRef} h='60vh' w='100%' />
            </Box>
        </Box>
    );
};

export default Map;
