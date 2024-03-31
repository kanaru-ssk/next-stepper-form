import { Typography } from "@mui/material";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-black p-10 text-center">
      <Typography variant="body1" component="p" sx={{ color: "white" }}>
        footer
      </Typography>
    </footer>
  );
}
