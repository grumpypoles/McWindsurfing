

export const getYear = (date) => {

  const newDate = new Date(date);
    return newDate.getFullYear();

}


export const getMonthAbbreviation = (date) => {
  const month = new Date(date);
  return month.toLocaleString('default', { month: 'short' })
}


function buildFinancialData(formData, invoiceUrls) {
  return {
    selcode: formData.get("selcode"),
    purchase_date: formData.get("purchase_date"),
    merchant: formData.get("merchant"),
    retail_price: formData.get("retail_price"),
    paid_price: formData.get("paid_price"),
    comments: formData.get("comments"),
    invoice: invoiceUrls,
    disposal_date: formData.get("disposal_date"),
    disposal: formData.get("disposal"),
    disposal_price: formData.get("disposal_price"),
  };
}