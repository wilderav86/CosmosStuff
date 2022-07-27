import { useMemo } from "react";

//searchParams must be passed as objects
const createUrl = (href, searchParams) => {
  const url = new URL(href);

  //iterate through searchParams and set url up with key value pairs
  for (const [name, value] of Object.entries(searchParams)) {
    url.searchParams.set(name, value);
  }

  return url;
};

export const useUrl = (href, searchParams, dependencyArray = []) => {
  if (!dependencyArray.length) return createUrl(href, searchParams); //if no dependencies are required only use href and parameters

  return useMemo(() => createUrl((href, searchParams), dependencyArray)); //otherwise add a dependency list.
};
