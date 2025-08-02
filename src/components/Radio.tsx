import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

const Radio: FC = () => {
  const query = async () =>
    await fetch(
      "https://de1.api.radio-browser.info/json/stations/topvote/1",
    ).then((response) => response.json());

  const topRadioQuery = useQuery({
    queryKey: ["topRadio"],
    queryFn: query,
  });

  console.log(topRadioQuery.data);

  if (!topRadioQuery.isFetched) return null;
  return (
    <>
      <img
        src={topRadioQuery.data[0].favicon}
        alt=""
        role="presentation"
        width={64}
      />
      {topRadioQuery.data[0].name}

      <audio src={topRadioQuery.data[0].url_resolved} controls></audio>
    </>
  );
};

export default Radio;
