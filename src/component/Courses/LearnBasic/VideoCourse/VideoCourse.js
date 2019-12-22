import React from 'react'
import { Document, Page } from 'react-pdf'
import ContentLoader from 'react-content-loader'
import './VideoCourse.scss'
import pre from '../../../../assets/icon/chevron-right.svg'
import next from '../../../../assets/icon/chevron-left.svg'
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true
}

class VideoCourse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      visibleLeft: '',
      visibleRight: ''
    }
  }

  MyLoader = () => (
    <ContentLoader
      height={220}
      speed={1}
      primaryColor="rgba(0,0,0,0.06)"
      secondaryColor="#ecebeb"
      animate={true}
    >
      <rect x="0" y="2" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
  )
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
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }))
      this.setState({ visibleRight: '', visibleLeft: '' })
    }
    if (this.state.pageNumber === this.state.numPages) {
      this.setState({ visibleRight: 'hide', visibleLeft: '' })
    }
  }
  render() {
    const { pageNumber, numPages, visibleLeft, visibleRight } = this.state
    const { page } = this.props
    return (
      <div className="video-background">
        <div className="Example__container">
          <div className="Example__container__document">
            <div onClick={this.goToPrevPage} className={`${visibleLeft}`}>
              <img alt="img" src={next} />
            </div>
            <Document
              options={options}
              file={page.pdf}
              onLoadSuccess={this.onDocumentLoadSuccess}
              loading={this.MyLoader}
            >
              <Page pageNumber={pageNumber} top="0" left="0" />
            </Document>
            <div onClick={this.goToNextPage} className={`${visibleRight}`}>
              <img alt="img" src={pre} />
            </div>
          </div>
          <div className="Example__container__load">
            <nav>
              <div>
                <p style={{ marginTop: '5px', fontWeight: 'bold' }}>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoCourse
