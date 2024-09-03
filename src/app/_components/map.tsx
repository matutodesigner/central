'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export function Map() {
  return (
    <div>
      <MapContainer
        className="h-[50vh]"
        center={[-21.7295808, -43.3563624]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-21.7295808, -43.3563624]}>
          <Popup className="text-center p-6">
            <h5 className="font-bold tsxt-xl">Onde Estamos</h5>
            <p className="text-muted-foreground">
              R. Paracatu, 626 - Bom Clima, Juiz de Fora - MG, 36046-040
            </p>
            <Link
              href="https://www.google.com/maps?ll=-21.729421,-43.356352&z=17&t=m&hl=pt-BR&gl=US&mapclient=embed&q=Condom%C3%ADnio+do+Edif%C3%ADcio+Bom+Clima+Center+R.+Paracatu,+626+-+Bom+Clima+Juiz+de+Fora+-+MG+36046-040"
              target="_black"
            >
              <Button variant={'outline'} size={'sm'}>
                Ver no mapa
              </Button>
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
