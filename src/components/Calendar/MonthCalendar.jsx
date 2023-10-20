import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function MonthCalendar({ setDate, date }) {
  // const [date, setDate] = useState();

  const onChangeSelectedDay = (value) => {
    const dayjsformat = dayjs(value).format("YYYY-MM-DD");
    setDate(dayjsformat);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={date || "날짜선택"}
        format="YYYY-MM-DD"
        onChange={(value) => onChangeSelectedDay(value)}
        // defaultValue={date}
      />
    </LocalizationProvider>
  );
}
