export const removeSpecialChars = (string) => {
    if (!string) return string;
    return string.replace(/[^a-zA-Z0-9 ]/gi, '');
};

const concatInitials = (firstWord, secondWord) => {
    const firstLetter = firstWord.charAt(0);
    const secondLetter = secondWord.charAt(0);
    return (firstLetter + secondLetter).toUpperCase();
};
  
export const checkImageURL = async (image, setValidImage) => {
    try {
      const res = await fetch(image);
      if (res.status === 404) setValidImage('N/A');
      else setValidImage(image)
    } catch(err) {
      return setValidImage('N/A')
    }
}

export const getNameInitial = (text) => {
    if (!text) {
      return '';
    }
  
    const words = removeSpecialChars(text)
                    .split(' ')
                    .filter(string => string.length > 0);
    const lastIndex = words.length - 1;
    if (words.length === 0) return '';
    if (words.length === 1) return words[0].charAt(0);
  
    return concatInitials(words[0], words[lastIndex]);
};