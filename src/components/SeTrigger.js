import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Label } from "./ui/label";
export const SeTrigger = () => {
    return (
        <div className="">
              <Label htmlFor="framework">Category</Label>
              <Select className="w-full">
                <SelectTrigger id="framework" >
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
    )
}