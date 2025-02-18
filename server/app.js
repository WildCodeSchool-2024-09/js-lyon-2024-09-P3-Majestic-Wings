const userRoutes = require("./routes/user.routes");

// S'assurer que la route est bien montée sur /api/user
app.use("/api/user", userRoutes);
