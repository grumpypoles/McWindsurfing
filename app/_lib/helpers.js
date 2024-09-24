

export const calculateBMI = (weight, hight) => {
  if (hight <= 0) {
    throw new Error("Height must be greater than zero");
  }

  let bmi = weight / (hight * hight);
  return bmi.toFixed(2);
};
export const calculateW2hip = (waist, hip) => {
  if (hip <= 0) {
    throw new Error("Hip must be greater than zero");
  }

  let w2hip = waist / hip;
  return w2hip.toFixed(2);
};

export const calculateW2hight = (waist, hight) => {
  if (hight <= 0) {
    throw new Error("Hight must be greater than zero");
  }

  let w2hight = waist / hight;
  return w2hight.toFixed(2);
};


export const getYear = (date) => {

  const newDate = new Date(date);
    return newDate.getFullYear();

}


export const getMonthAbbreviation = (date) => {
  const month = new Date(date);
  return month.toLocaleString('default', { month: 'short' })
}


