"use client";

/**
 * ReservationForm – Form fields: first/last name, date picker (Popover + react-day-picker), person count (Select).
 * No submit handler yet; form is presentational. date-fns format() displays selected date as "PPP" (e.g. "April 29th, 2025").
 */
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="firstname">first name</Label>
            <Input id="firstname" type="text" />
          </div>
          <div>
            <Label htmlFor="lastname">last name</Label>
            <Input id="lastname" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label>date</Label>
            {/* Radix Popover wraps trigger (button) and content (Calendar); asChild forwards props to Button */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="input"
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>person</Label>
            {/* Radix Select: trigger shows placeholder/value; SelectContent lists options (1–5 people) */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many people ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>People</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="uppercase w-full xl:w-auto xl:self-end">
          Book a table
        </Button>
      </div>
    </form>
  );
}
