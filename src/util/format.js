export const formatKinds = (kindsStr) => {
  const kinds = kindsStr.split(",").map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const kind0 = kinds[0]?.split("_").join(' ');
  const kind1 = kinds[1]?.split("_").join(' ');
  return kind0 + (kind1? ", " + kind1 : "");
}

export const extractUrl = (urlStr) => {
  const urls = urlStr.split(";");
  return urls[urls.length - 1];
}