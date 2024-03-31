import { RadioCard } from "@/components/radio-card";
import { RadioGroup } from "@/components/radio-group";
import { FormControl } from "@mui/material";

export function RadioCardForm() {
  return (
    <FormControl>
      <RadioGroup defaultValue={"a"}>
        <RadioCard value="a">aaa</RadioCard>
        <RadioCard value="b">bbb</RadioCard>
        <RadioCard value="c">ccc</RadioCard>
      </RadioGroup>
    </FormControl>
  );
}

// TODO: ラベルが青くなる問題
// TODO: radio-cardにfocus当たる問題の解消
