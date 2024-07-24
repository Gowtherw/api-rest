const axios = require('axios');
const Transaction = require('../models/Transaction');

// Obtener restaurantes cercanos
const getNearbyRestaurants = async (req, res) => {
    const { city, lat, lng } = req.query;
    const userId = req.user._id;

    try {
        let location = '';
        if (city) {
            // Obtener coordenadas de la ciudad usando la API de Google Geocoding
            const geocodeResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                params: {
                    address: city,
                    key: process.env.GOOGLE_API_KEY
                }
            });
            const geocodeData = geocodeResponse.data;

            if (geocodeData.results.length > 0) {
                location = geocodeData.results[0].geometry.location;
            } else {
                return res.status(404).json({ message: 'City not found', details: geocodeData });
            }
        } else if (lat && lng) {
            location = { lat, lng };
        } else {
            return res.status(400).json({ message: 'City or coordinates are required' });
        }

        // Obtener restaurantes cercanos usando la API de Google Places
        const placesResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                location: `${location.lat},${location.lng}`,
                radius: 5000, // Radio en metros
                type: 'restaurant',
                key: process.env.GOOGLE_API_KEY
            }
        });
        const placesData = placesResponse.data;

        // Registrar la transacción
        const transaction = new Transaction({
            userId,
            action: 'search_restaurants',
            details: { city, lat, lng }
        });
        await transaction.save();

        // Filtrar y estructurar la información relevante de los restaurantes
        const restaurants = placesData.results.map(place => ({
            name: place.name,
            address: place.vicinity,
            rating: place.rating,
            userRatingsTotal: place.user_ratings_total,
            location: place.geometry.location,
            placeId: place.place_id,
            types: place.types,
            businessStatus: place.business_status,
            openingHours: place.opening_hours,
            icon: place.icon,
            photos: place.photos ? place.photos.map(photo => ({
                height: photo.height,
                width: photo.width,
                photoReference: photo.photo_reference,
                htmlAttributions: photo.html_attributions
            })) : []
        }));

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getNearbyRestaurants
};
