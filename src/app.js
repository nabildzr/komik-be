import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", (req, res) => {
  if (res.statusCode === 404 || res.statusCode >= 500) {
    res.send("Gagal menyambung ke server. Coba lagi nanti.");
  }
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
