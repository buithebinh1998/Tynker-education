import React from 'react'
import { Document, Page } from "react-pdf";
import './VideoCourse.scss'

import pdfFile from '../../../../assets/pdf/Bai1.pdf'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

class VideoCourse extends React.Component {
  state = { numPages: null, pageNumber: 1 };


  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));


  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="video-background">
        <div className="Example__container">
          <div className="Example__container__load">
            <nav>
              <button onClick={this.goToPrevPage}>Prev</button>
              <button onClick={this.goToNextPage}>Next</button>
            </nav>
          </div>
          <div className="Example__container__document">
            <Document
              options={options}
              file={pdfFile}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} top='0' left='0' />
            </Document>
          </div>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )
  }
}
export default VideoCourse
