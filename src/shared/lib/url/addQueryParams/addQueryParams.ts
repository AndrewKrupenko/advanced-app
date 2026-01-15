// OptionalRecord is a type where values can be string or undefined
// e.g. { a: '1', b: undefined }
export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value); // add or update param to current URLSearchParams
    }
  });

  return `?${searchParams.toString()}`;
}

/**
 * Add query params to the current URL without reloading the page
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params)); // add params to URL without reloading
}
