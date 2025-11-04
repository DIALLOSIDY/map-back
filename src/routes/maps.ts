import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

// GET /api/maps - Obtenir toutes les cartes
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Liste des cartes',
    data: [
      {
        id: 1,
        name: 'Carte exemple',
        latitude: 48.8566,
        longitude: 2.3522,
        description: 'Exemple de point sur la carte'
      }
    ]
  });
});


// POST /api/maps - Créer une nouvelle carte
router.post('/', (req: Request, res: Response) => {
  const { name, latitude, longitude, description } = req.body;
  
  // Validation basique
  if (!name || !latitude || !longitude) {
    return res.status(400).json({
      error: 'Les champs name, latitude et longitude sont requis'
    });
  }
  
  return res.status(201).json({
    message: 'Carte créée avec succès',
    data: {
      id: Date.now(), // ID temporaire
      name,
      latitude,
      longitude,
      description: description || ''
    }
  });
});

export default router;
