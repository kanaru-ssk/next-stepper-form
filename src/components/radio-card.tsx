import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  FormLabel,
  Radio,
} from "@mui/material";

export function RadioCard() {
  return (
    <Box sx={{ width: 275 }}>
      <FormLabel>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent>aa</CardContent>
            <Radio />
          </CardActionArea>
        </Card>
      </FormLabel>
    </Box>
  );
}
