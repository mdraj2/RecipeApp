const formatRecipeTitleInArrayOfObjects = recipes => {
  if (Array.isArray(recipes)) {
    const formattedRecipeArray = formatedRecipeTitleInArrayOfObjects(recipes);
    return formattedRecipeArray;
  }
  return recipes;
};

const formatedRecipeTitleInArrayOfObjects = recipes => {
  const newFormattedArray = recipes.map(singleRecipe => {
    singleRecipe.title = convertUnicodeDecimalInRecipeTitle(singleRecipe.title);
    return singleRecipe;
  });
  return newFormattedArray;
};

const convertUnicodeDecimalInRecipeTitle = title => {
  const apostropheInUnicodeDecimalCode = "&#8217;";
  return convertUnicodeDecimalCodeToCharacterString(
    title,
    apostropheInUnicodeDecimalCode
  );
};

const convertUnicodeDecimalCodeToCharacterString = (
  orignalString,
  UnicodeDecimal
) => {
  let replaceUnicodeDecimalWith;
  if (UnicodeDecimal === "&#8217;") replaceUnicodeDecimalWith = "'";
  return orignalString.replace(UnicodeDecimal, replaceUnicodeDecimalWith);
};

export default formatRecipeTitleInArrayOfObjects;
