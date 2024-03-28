import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormLabel,
  Radio,
} from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  value: string;
  children: ReactNode;
};

export function RadioCard({ value, children }: Props) {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <FormLabel>
            <CardContent>{children}</CardContent>
            <CardActions>
              <Radio value={value} />
            </CardActions>
          </FormLabel>
        </CardActionArea>
      </Card>
    </Box>
  );
}
