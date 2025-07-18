import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { notFound } from "next/navigation";
import EventRegistrationForm from "@/components/event-registration-form"
import { format } from "date-fns"
import { es } from "date-fns/locale"

function extractGoogleDriveFileId(url: string): string | null {
  // Extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/uc\?.*id=([a-zA-Z0-9_-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
}

function getImageUrl(imageUrl: string | undefined, baseUrl: string): string {
  // Return placeholder if no image URL
  if (!imageUrl || imageUrl.trim() === '') {
    return "/placeholder.svg";
  }
  
  // Check if it's a Google Drive URL and use proxy
  if (imageUrl.includes('drive.google.com')) {
    const fileId = extractGoogleDriveFileId(imageUrl);
    if (fileId) {
      return `${baseUrl}/api/image/${fileId}`;
    }
  }
  
  // If it's already a full URL (starts with http:// or https://), return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // If it starts with /, it's a relative path, combine with baseUrl
  if (imageUrl.startsWith('/')) {
    return `${baseUrl}${imageUrl}`;
  }
  
  // Otherwise, add / and combine with baseUrl
  return `${baseUrl}/${imageUrl}`;
}

// Event type
type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: "workshop" | "performance" | "meeting" | "exhibition"
  capacity: number
  longDescription?: string
  presenter?: string
  price?: string
}


export default async function EventDetailPage({ params }: { params: { id: string } }) {
  // Fetch the main event
  const resolvedParams = await params;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const res = await fetch(`${baseUrl}/api/events/${resolvedParams.id}`, { cache: "no-store" });
  if (!res.ok) {
    notFound();
  }
  const event: Event = await res.json();

  // Fetch all events for related events
  const allRes = await fetch(`${baseUrl}/api/events`, { cache: "no-store" });
  const events: Event[] = await allRes.json();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl(event.image, baseUrl)}
            alt={event.title}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary-ruby rounded-full text-sm font-medium mb-4">
              {event.category ? (
                event.category.charAt(0).toUpperCase() + event.category.slice(1)
              ) : (
                "Sin categoría"
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {format(new Date(event.date), "d 'de' MMMM 'de' yyyy", { locale: es })}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Capacidad: {event.capacity} personas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-secondary-navy mb-6">Sobre este evento</h2>

              {event.presenter && <p className="text-primary-ruby font-medium mb-4">Presentado por: {event.presenter}</p>}

              <div className="prose max-w-none text-muted-teal mb-8">
                {event.longDescription?.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-alabaster p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-secondary-navy mb-4">Detalles del evento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-secondary-navy">Fecha y hora</h4>
                    <p className="text-muted-teal">
                      {format(new Date(event.date), "d 'de' MMMM 'de' yyyy", { locale: es })}, {event.time}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-navy">Lugar</h4>
                    <p className="text-muted-teal">El Parlamento - {event.location}</p>
                    <p className="text-muted-teal">123 Calle Principal, La Paz, Bolivia</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-navy">Precio</h4>
                    <p className="text-muted-teal">{event.price || "Gratis"}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-navy">Capacidad</h4>
                    <p className="text-muted-teal">{event.capacity} personas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-secondary-navy mb-6">Regístrate para este evento</h3>
                <EventRegistrationForm eventId={event.id} eventTitle={event.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-alabaster">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary-navy mb-8 text-center">También te puede interesar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events
              .filter((e) => e.id !== event.id && e.category === event.category)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div key={relatedEvent.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={getImageUrl(relatedEvent.image, baseUrl)}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-secondary-navy mb-2">{relatedEvent.title}</h3>
                    <p className="text-sm text-muted-teal mb-4">
                      {format(new Date(relatedEvent.date), "d 'de' MMMM 'de' yyyy", { locale: es })} • {relatedEvent.time}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/events/${relatedEvent.id}`}>Ver detalles</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
