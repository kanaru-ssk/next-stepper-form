import { RadioCard } from "@/components/radio-card";
import { RadioGroup } from "@/components/radio-group";
import { Box, FormControl, Grid } from "@mui/material";
import { jobs } from "@/constants/jobs";

export function RadioCardForm() {
  return (
    <Box className="flex justify-center">
      <FormControl className="w-full">
        <RadioGroup className="grid grid-cols-2 gap-3">
          {jobs.map(({ id, name }) => (
            <RadioCard key={id} value={name}>
              {name}
            </RadioCard>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

// TODO: ラベルが青くなる問題
