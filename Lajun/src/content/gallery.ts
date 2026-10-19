/**
 * Gallery configuration.
 * Photos 03 and 04 are PNG, photos 06–10 are JPG, and photos 01, 02, and 05
 * are extensionless JPEGs.
 * If a photo is missing, the matching local placeholder illustration is shown.
 */
export const gallery = Array.from({ length: 10 }, (_, index) => {
  const fileName = `photo-${String(index + 1).padStart(2, '0')}`;
  const extension = index === 2 || index === 3 ? '.png' : index >= 5 ? '.jpg' : '';

  return {
    id: index + 1,
    src: `/images/${fileName}${extension}`,
    fallback: `/images/${fileName}-placeholder.svg`,
    fileName: `${fileName}${extension}`,
  };
});
