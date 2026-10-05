export type Amenity = string
export interface Guesthouse { id: string; name: string; logo: string; gallery: string[]; description: string; amenities: Amenity[]; city: string; country: string
  lat: string; lng: string; price: string; currency: string; contact: string; email: string; phone: string; address: string
  rooms: string; checkIn: string; checkOut: string; rules: string; rating: number; created: string }
export type GuesthouseFormValues = Omit<Guesthouse, 'id' | 'rating' | 'created'>
export interface FormSectionProps { v: GuesthouseFormValues; err: Record<string, string>
  set: <K extends keyof GuesthouseFormValues>(k: K, val: GuesthouseFormValues[K]) => void }