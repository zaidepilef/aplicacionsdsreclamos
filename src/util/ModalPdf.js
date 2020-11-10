import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { pdfjs, Document, Page } from "react-pdf";
import { viewDocumentApi } from "api/Instancias/instancia";
import { notificationsApi } from "util/Notifications";


export const ModalPdf = props => {
  const { token, link } = props;
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    const openWindows = async link => {
      const response = await viewDocumentApi(token, link);

      if (response.error) {
        return notificationsApi("error", "Error al visualizar el pdf");
      }
      setPdf(response.data.file);
    };

    openWindows(link);
  }, [link, token]);

  const nextPage = () => {
    if (pageNumber !== numPages) {
      setPageNumber(page => page + 1);
    }
  };

  const backPage = () => {
    if (pageNumber !== 1) {
      setPageNumber(page => page - 1);
    }
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      {!pdf && "Cargando Vista Previa"}
      {pdf && (
        <div className="center">
          <Document
            file={`data:application/pdf;base64,${pdf}`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Cargando Vista Previa"
          >
            <Page
              pageNumber={pageNumber}
              width={window.innerWidth * 0.635}
              loading="Cargando Vista Previa"
            />
          </Document>
          <div className="d-flex justify-content-between">
            <Button variant="contained" onClick={backPage}>
              <ArrowBackIosIcon />
            </Button>
            <p className="align-self-center">
              Page {pageNumber} of {numPages}
            </p>
            <Button variant="contained" onClick={nextPage}>
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
