"use client";
import { useState } from "react";
import DataInput from "./DataInput/DataInput";
import Matrix from "./Matrix/Matrix";
import { OutputData } from "../../helper/calcData";
import MatrixTable from "./MatrixTable/MatrixTable";

const MatrixCalc = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrixData, setMatrixData] = useState<OutputData>({
    day: 28,
    month: 2,
    year: 1993,
  });
  return (
    <section className="section">
      <div className="container">
        <DataInput
          setShowMatrix={setShowMatrix}
          setMatrixData={setMatrixData}
        />
        {showMatrix && (
          <>
            <Matrix matrixData={matrixData} />
            <MatrixTable matrixData={matrixData} />
          </>
        )}
      </div>
    </section>
  );
};

export default MatrixCalc;
