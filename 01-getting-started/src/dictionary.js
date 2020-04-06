const provinces = {
  lookUpProv: code => {
    const provinceTable = {
      AB: "Alberta",
      BC: "British Columbia",
      MB: "Manitoba",
      NB: "New Brunswick",
      NL: "Newfoundland and Labrador",
      NS: "Nova Scotia",
      NT: "Northwest Territories",
      NU: "Nunavut",
      ON: "Ontario",
      PE: "Prince Edward Island",
      QC: "Québec",
      SK: "Saskatchewan",
      YT: "Yukon"
    };

    const checkProv = code.toUpperCase();

    if (checkProv in provinceTable) return provinceTable[checkProv];
    else return "";
  }
};
