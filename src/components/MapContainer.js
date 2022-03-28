import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

export default function MapContainer() {

    const MapComponent = () => {
        const ref = useRef()
        const [map, setMap] = useState(null)
        const [center] = useState({ lat: 43.601200, lng: -79.545330 })

        useEffect(() => {
            if (ref.current && !map) {
                setMap(new window.google.maps.Map(ref.current))
            }
        }, [ref, map])

        const createMarker = () => {
            return new window.google.maps.Marker({
                position: center,
                map,
                draggable: true,
                optimized: true
            })
        }


        useEffect(() => {
            if (map) {
                map.setOptions({ center, zoom: 15 })
                const marker = createMarker()
                marker.addListener('click', (e) => {
                    console.log('event', e)
                    alert()
                })
                marker.addListener('drag', (e) => {
                    console.log('event', e)
                })
                marker.addListener('dragend', (e) => {
                    console.log('event', e)
                })
            }
        })


        return (
            <div ref={ref} style={{ width: "100%", height: "100%" }}> </div>
        )
    }

    const render = (status) => {
        if (status === Status.LOADING) return <div>Yukleniyor</div>
        if (status === Status.FAILURE) return <div>Hata</div>
        return <div>{status}</div>
    }
    return (
        <div className="Map" style={{ height: '600px' }}>
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                render={render} language="en">
                <MapComponent />
            </Wrapper>
        </div>
    )
}
