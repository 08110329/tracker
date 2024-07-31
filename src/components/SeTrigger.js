import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
export const SeTrigger = ({ text }) => {
  return (
    <div>
      <Label htmlFor="framework">Category</Label>
      <Select className="w-full">
        <SelectTrigger id="framework" className="bg-[#F9FAFB]">
          <SelectValue placeholder={text} />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
