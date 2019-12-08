import React from 'react'
import { Document, Page } from 'react-pdf/dist/entry.parcel';
import './VideoCourse.scss'

import pdfFile from '../../../../assets/pdf/Bai1.pdf'

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
// }

class VideoCourse extends React.Component {
  // state = {
  //   file: pdfFile,
  //   numPages: null,
  // }

  // onFileChange = (event) => {
  //   this.setState({
  //     file: event.target.files[0],
  //   })
  // }

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages })
  // }
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    // const { file, numPages } = this.state
    const { pageNumber, numPages } = this.state;

    return (
      <div className="video-background">
        {/* <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            {' '}
            <input
              onChange={this.onFileChange}
              type="file"
            />
          </div>
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document>
          </div>
        </div> */}
        <Document
          file={pdfFile}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
  }
}
export default VideoCourse
