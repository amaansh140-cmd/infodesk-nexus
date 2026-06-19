/**
 * Calculates the great-circle distance between two points on the Earth's surface
 * using the Haversine formula.
 *
 * @param lat1 Latitude of point 1 in decimal degrees
 * @param lon1 Longitude of point 1 in decimal degrees
 * @param lat2 Latitude of point 2 in decimal degrees
 * @param lon2 Longitude of point 2 in decimal degrees
 * @returns The distance between the two points in meters
 */
export function getDistanceInMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth's radius in meters
  const toRadians = (deg: number) => deg * (Math.PI / 180);

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Default geofence radius in meters
export const GEOFENCE_RADIUS_METERS = 150;

export const BRANCHES = {
  'Jogeshwari West': {
    lat: 19.135569624786484,
    lon: 72.84702300437982,
  },
  'Goregaon West': {
    lat: 19.168518845120833,
    lon: 72.83392284423743,
  },
  'Jawahar Nagar': {
    lat: 19.161729145840933,
    lon: 72.84877775768057,
  },
  'Behram Baug': {
    lat: 19.143660342939324,
    lon: 72.83709587309606,
  }
};
