import React, { useMemo } from "react";

import axios from "axios";

import useQuery from "../hooks/useQuery";

export default function ProfilePage() {
  const { data, isLoading, isError } = useQuery(
    () => axios.get("https://swapi.dev/api/people/1").then((res) => res.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
  return useMemo(() => {
    if (isLoading) {
      return "Loading....";
    }

    if (isError) {
      return "Error...";
    }

    if (data) {
      return <code>{JSON.stringify(data, null, 2)}</code>;
    }

    return null;
  }, [data, isLoading, isError]);
}
