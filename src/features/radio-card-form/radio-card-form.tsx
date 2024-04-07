import { RadioCard } from "@/components/radio-card";
import { RadioGroup } from "@/components/radio-group";
import { jobs } from "@/features/step/jobs";
import { Box, FormControl } from "@mui/material";

export function RadioCardForm() {
  return (
    <Box>
      <FormControl sx={{ display: "block" }}>
        <RadioGroup>
          <div className="grid grid-cols-2 place-content-center gap-3 md:grid-cols-3">
            {jobs.map(({ id, name }) => (
              <RadioCard key={id} value={name}>
                {name}
              </RadioCard>
            ))}
          </div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

// TODO: ラベルが青くなる問題
