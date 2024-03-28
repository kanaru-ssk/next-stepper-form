import { RadioCard } from "@/components/radio-card";
import { RadioGroup } from "@/components/radio-group";
import { Stepper } from "@/components/stepper";
import { FormControl } from "@mui/material";

export default function Home() {
  return (
    <main className="px-5 py-10 max-w-4xl mx-auto">
      <Stepper steps={[{ id: 0 }, { id: 1 }, { id: 2 }]} activeStep={1} />
      <div className="p-10">
        <FormControl>
          <RadioGroup defaultValue={"a"}>
            <RadioCard value="a">aaa</RadioCard>
            <RadioCard value="b">bbb</RadioCard>
            <RadioCard value="c">ccc</RadioCard>
          </RadioGroup>
        </FormControl>
      </div>
    </main>
  );
}

// TODO: ラベルが青くなる問題
// TODO: RadioCardがtabで選択できない問題
