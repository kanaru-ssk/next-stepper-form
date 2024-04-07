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
    <Box className="w-full">
      <Card variant="outlined">
        <CardActionArea tabIndex={-1}>
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
