import React, { useEffect, useState } from "react";
import "./search-form.scss";
import ResortsSelect from "./resorts-select/resorts-select";
import GuestsSelect from "./guests-select/guests-select";
import SearchButton from "./search-button/search-button";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { Hotel, IHotelSearchDTO } from "../../types/hotel.interface";
import socket from "../../socket";

const SearchForm: React.FC = () => {
  const [skiSiteId, setSkiSiteId] = useState<number>(1);
  const [groupSize, setGroupSize] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(dayjs().toDate());
  const [endDate, setEndDate] = useState<Date | null>(
    dayjs().add(7, "days").toDate(),
  );

  const [results, setResults] = useState<Hotel[]>([]);

  useEffect(() => {
    socket.on("hotel-result", (hotels: Hotel[]) => {
      setResults((prev) => [...prev, ...hotels]);
    });

    return () => {
      socket.off("hotel-result");
    };
  }, []);

  const handleSearch = () => {
    setResults([]);
    socket.emit("hotel-search", {
      from_date: startDate,
      to_date: endDate,
      group_size: groupSize,
      ski_site: skiSiteId,
    } as IHotelSearchDTO);
  };

  return (
    <div className="search-form">
      <ResortsSelect
        value={skiSiteId}
        onChange={(skiSiteId) => setSkiSiteId(skiSiteId)}
      />
      <GuestsSelect
        value={groupSize}
        onChange={(groupSize) => setGroupSize(groupSize)}
      />

      <DatePicker
        className="search-form-date-picker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        enableTabLoop={false}
      />
      <DatePicker
        className="search-form-date-picker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        enableTabLoop={false}
      />

      <SearchButton onClick={handleSearch} />
    </div>
  );
};

export default SearchForm;
