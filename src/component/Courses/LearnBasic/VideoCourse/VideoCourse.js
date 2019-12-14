import React from 'react'
import { Document, Page } from "react-pdf";
import './VideoCourse.scss'
import pre from '../../../../assets/icon/chevron-right.svg'

import next from '../../../../assets/icon/chevron-left.svg'
import pdfFile from '../../../../assets/pdf/Bai1.pdf'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

class VideoCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      visibleLeft: '',
      visibleRight: '',
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () => {
    if (this.state.pageNumber !== 1) {
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }))
      this.setState({ visibleLeft: '', visibleRight: '' })
    }
    if (this.state.pageNumber === 1) {
      this.setState({ visibleLeft: 'hide', visibleRight: '' })
    }

  }

  goToNextPage = () => {
    if (this.state.pageNumber !== this.state.numPages) {
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
      this.setState({ visibleRight: '', visibleLeft: '' })
    }
    if (this.state.pageNumber === this.state.numPages) {
      this.setState({ visibleRight: 'hide', visibleLeft: '' })
    }
  }
  render() {
    const { pageNumber, numPages, visibleLeft, visibleRight } = this.state;

    return (
      <div className="video-background">
        <div className="Example__container">

          <div className="Example__container__document">
            <Document
              options={options}
              file={pdfFile}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} top='0' left='0' />
            </Document>
          </div>
          <div className="Example__container__load">
            <nav>
              <div onClick={this.goToPrevPage} className={`${visibleLeft}`}>
                <img alt='img' src={next} style={{ width: '40px' }} />
              </div>

              <div>
                <p style={{ marginTop: '5px', fontWeight: 'bold' }}>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
              <div onClick={this.goToNextPage} className={`${visibleRight}`}>
                <img alt='img' src={pre} style={{ width: '40px' }} />
              </div>
            </nav>
          </div>
        </div>

      </div>
    )
  }
}
export default VideoCourse
