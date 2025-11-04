import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import des routes
import mapsRoutes from "./src/routes/maps";

// Configuration dotenv
dotenv.config();

export const createApp = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes de base
  app.get("/", (req, res) => {
    res.json({
      message: "Bienvenue sur l'API Map Backend",
      version: "1.0.0",
      status: "active",
    });
  });

  app.get("/api/health", (req, res) => {
    res.json({
      status: "OK",
      timestamp: new Date().toISOString(),
    });
  });

  // Routes API
  app.use("/api/maps", mapsRoutes);

  // Gestion des erreurs 404
  app.use((req, res) => {
    res.status(404).json({
      error: "Route non trouvée",
      path: req.originalUrl,
    });
  });

  // Démarrage du serveur
  app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
  });

  return app;
};
