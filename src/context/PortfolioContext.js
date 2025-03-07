import React, { createContext, useState, useEffect } from "react";
import * as XLSX from "xlsx";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    // Loading data from the Excel file
    const loadData = async () => {
      try {
        const response = await fetch("/data.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        console.log("Parsed Data:", jsonData);
        
        setPortfolioData(jsonData);
      } catch (error) {
        console.log("Error loading or parsing the excel file:", error);
      }
    };

    loadData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;