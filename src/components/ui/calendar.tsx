"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
}

const Day = ({ date, displayMonth, events, setCurrent }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();

  return (
    <div
      className={`${currentMonth ? "text-black" : "text-gray-400"} h-24 overflow-y-scroll border`}
    >
      <p className="sticky px-2 text-right">{date.getDate()}</p>

      {events?.map(({ title, start, end, location, description }, index) => {
        const startDate = new Date(start as string);

        if (
          startDate.getDate() === date.getDate() &&
          startDate.getMonth() === date.getMonth() &&
          startDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              className="my-1 text-ellipsis p-1 text-left text-white"
              key={index}
              onClick={() =>
                setCurrent({ title, start, end, location, description })
              }
            >
              {title} -{" "}
              {startDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-center p-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        nav_button_previous: "absolute left-1/3",
        nav_button_next: "absolute right-1/3",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-full font-normal text-[0.8rem]",
        row: "flex w-full",
        cell: "w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full p-0 font-normal aria-selected:opacity-100 rounded-none border",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground border-none",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
        Day: ({ displayMonth, date }) => (
          <Day
            date={date}
            displayMonth={displayMonth}
            events={events}
            setCurrent={setCurrent}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
