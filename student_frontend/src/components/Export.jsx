import { useOutletContext } from "react-router-dom";
import { saveAs } from "file-saver";
import { objTOform } from "./scripts";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Document, Page } from "react-pdf";
import FileDownload from "react-file-download";
function Export() {
  const local = useOutletContext()[0];
  const [stData, setStData] = useState();
  const [pdf, setpdf] = useState();
  useEffect(() => {
    handleBankDetails();
  }, []);

  async function generatePdfApi(data) {
    const api = await fetch(`http://localhost:8000/students/generatePdf`, {
      method: "Post",
      body: objTOform(data ? data : stData),
    });
    const resp = await api.json();
    console.log(resp.suc);
    setpdf(resp.suc);
  }
  async function handleBankDetails() {
    console.log("handeling bank");
    const ifscApi = await fetch(`https://ifsc.razorpay.com/${local.ifsc}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });
    const resp = await ifscApi.json();
    let temp = "";
    if (resp) {
      temp = {
        ...local,
        bank_name: resp.BANK,
        bank_branch: resp.BRANCH,
        city: resp.CITY,
      };
      setStData({
        ...local,
        bank_name: resp.BANK,
        bank_branch: resp.BRANCH,
        city: resp.CITY,
      });
      generatePdfApi(temp);
      console.log(resp);
    } else {
      console.log(resp);
    }
  }
  function pdfDownload() {
    // const tempPdfFile = new File([pdf],"TECIS-GENERATED",{
    //   type:pdf.type
    // })
    // console.log(tempPdfFile)
    // FileDownload(tempPdfFile,"TECIS-GENERATED.pdf")
    // saveAs(pdf,"TECIS-GENERATED.pdf")
    // const pdfUrl = window.URL.createObjectURL(pdf)
    const tempLink = document.createElement("a");
    tempLink.href = `http://localhost:8000/students/static/st_pdfs/${pdf}`;
    // tempLink.target = "_blank"
    tempLink.download = "TECIS_GENERATED.pdf";
    document.body.appendChild(tempLink);
    tempLink.click();
    // window.URL.revokeObjectURL(tempLink.href)
  }

  return (
    <>
      {stData && pdf ? (
        <div className="export-container">
          <span className="preview-txt">PREVIEW</span>
          {/* <div className="pdf-container">
            <div className="pdf-header">
              <span className="tec-logo-outer">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  id="profile_img"
                />
              </span>
              <span className="tec-txt">TEC INFORMATION SYSTEM </span>
            </div>
            <div className="pdf-outline">
              <div className="pdf-general-info">
                {" "}
                <span className="pdf-info-header">GENERAL INFORMATIONS</span>
                <span className="pdf-st-profile">
                  <img
                    src={`http://localhost:8000/students${stData.profile}`}
                    alt=""
                  />
                </span>
                <div className="info-content">
                  <div className="info-container">
                    <span className="info-key">NAME : </span>
                    <span className="info-value">{stData.name}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">USER ID : </span>
                    <span className="info-value">{stData.userid}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">DATE OF BIRTH : </span>
                    <span className="info-value">{stData.dob}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">GENDER : </span>
                    <span className="info-value">{stData.gender}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">BLOOD GROUP : </span>
                    <span className="info-value">{stData.bloodgroup}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">RELIGION : </span>
                    <span className="info-value">{stData.religion}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">COMMUNITY : </span>
                    <span className="info-value">{stData.community}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">CASTE : </span>
                    <span className="info-value">{stData.caste}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">AADHAR : </span>
                    <span className="info-value">{stData.aadhar}</span>
                  </div>
                  <div className="info-container">
                    <input
                      type="checkbox"
                      readOnly
                      checked={stData.firstgraduate === "yes" ? true : false}
                    />
                    <span className="info-key">FIRSTGRADUATE</span>
                  </div>
                </div>
              </div>

              <div className="pdf-contact-info">
                {" "}
                <span className="pdf-info-header">CONTACT INFORMATIONS</span>
                <div className="info-content">
                  <div className="info-container">
                    <span className="info-key">MOBILE NUMBER : </span>
                    <span className="info-value">{stData.mobile}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">EMAIL ID : </span>
                    <span className="info-value">{stData.emailid}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">COUNTRY : </span>
                    <span className="info-value">{stData.country}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">STATE : </span>
                    <span className="info-value">{stData.district}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">LOCATION TYPE : </span>
                    <span className="info-value">{stData.location_type}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">TALUK : </span>
                    <span className="info-value">{stData.taluk}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">VILLAGE/TOWN : </span>
                    <span className="info-value">{stData.place}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">ADDRESS : </span>
                    <span className="info-value">{stData.address}</span>
                  </div>
                </div>
              </div>
              <div className="pdf-other-info">
                {" "}
                <span className="pdf-info-header">OTHER INFORMATIONS</span>
                <div className="info-content">
                  <div className="info-container">
                    <span className="info-key">FATHER NAME : </span>
                    <span className="info-value">{stData.fathersname}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">FATHER OCCUPATION : </span>
                    <span className="info-value">
                      {stData.fathersoccupation}
                    </span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">MOTHER NAME : </span>
                    <span className="info-value">{stData.mothersname}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">MOTHER OCCUPATION : </span>
                    <span className="info-value">
                      {stData.mothersoccupation}
                    </span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">ANNUAL INCOME : </span>
                    <span className="info-value">{stData.annual_income}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">PARENT MOBILE NUMBER : </span>
                    <span className="info-value">
                      {stData.parents_mobile_number}
                    </span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">IFSC CODE : </span>
                    <span className="info-value">{stData.ifsc}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">Bank Name : </span>
                    <span className="info-value">{stData.bank_name}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">Branch : </span>
                    <span className="info-value">{stData.bank_branch}</span>
                  </div>
                  <div className="info-container">
                    <span className="info-key">City : </span>
                    <span className="info-value">{stData.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <frame className="pdfIframe"
            data={`http://localhost:8000/students/st_pdfs/${pdf}`}

            type="application/pdf"
          ></frame> */}
          {/* <Document file={"http://localhost:8000/students/st_pdfs/a.pdf"}>
            <Page pageNumber={1} />
          </Document> */}
          {/* <object ></object> */}
          <span>Preview is not available </span>
          <button className="btn download-btn" onClick={pdfDownload}>
            {" "}
            <span class="material-symbols-outlined icon">download</span>
            <span>Download</span>
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Export;
