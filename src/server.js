import app from "./config/app";

app.listen(process.env.PORT || 8080, () => {
  console.log("Running...");
});
