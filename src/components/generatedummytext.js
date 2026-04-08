import { loremIpsum } from "lorem-ipsum";

const dummyTextGen = (words, paragraphs) => {
  const sentences=Math.floor(Math.random()*(15-5+1))+5
  const generateWord = () => {
    return loremIpsum({
      count: 1,
      units: "words",
    });
  };

  const generateSentence = () => {
    // const words=[]
    // for (let index = 0; index < 5; index++) {
    //   words.push(generateWord())

    // }
    // return words.join(" ")+"."
    return (
      Array.from(
        {
          length: words<5?5:words,
        },
        generateWord,
      ).join(" ") + "."
    );
  };
  console.log(generateSentence());

  const generatePar = () => {
    return Array.from({ length: sentences }, generateSentence).join(" ");
  };
  return Array.from({
    length:paragraphs
  },generatePar)
};

export {dummyTextGen}
