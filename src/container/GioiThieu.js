import React from 'react'
import Introduce from '../component/Introduce/Introduce';
import Survey from '../component/Survey/Survey';
import Leading from '../component/Leading/Leading';
import StudentSay from '../component/StudentSay/StudentSay';
const GioiThieu = (props) => {
  const renderInformation = () => (
    <section className="ftco-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 d-flex ftco-animate">
          <div className="img img-about align-self-stretch" style={{backgroundImage: 'url(images/bg_3.jpg)', width: '100%'}} />
        </div>
        <div className="col-md-6 pl-md-5 ftco-animate">
          <h2 className="mb-4">Giới thiệu về Tynker</h2>
          <p>
          Tynker là một nền tảng lập trình giáo dục nhằm dạy trẻ em cách tạo ra các trò chơi và chương trình. 
          Thay vì nhập mã nguồn, trẻ em có thể kéo các khối mã và gắn chúng lại với nhau tạo thành các đoạn chương trình hoàn chỉnh. 
          Tynker được thiết kế có nhiều nét tương đồng với Scratch. 
          Tynker dựa trên HTML5 và JavaScript và có thể được sử dụng trong trình duyệt mà không cần plugin, cũng như trên máy tính bảng và điện thoại thông minh. </p>
          <p>Tynker được sử dụng đào tạo phổ biến tại các trường học trên toàn thế giới, học sinh có thể sáng tạo ra các sản phẩm phần mềm, các ứng dụng, câu chuyện, trò chơi của chính mình. 
          Khi trẻ em sáng tạo cùng Tynker, các em sẽ học được cách suy nghĩ sáng tạo, làm việc cộng tác, và tư duy thiết kế sản phẩm game, tư duy mô phỏng thế giới thực tế.</p>
          
        </div>
        <div className="col-md-6 pl-md-5 ftco-animate">
          <h2 className="mb-4">Giới thiệu về STEAM</h2>
          <p>STEAM là phương pháp học tập chủ yếu dựa trên thực hành và các hoạt động trải nghiệm sáng tạo, do đó, trẻ được tiếp cận phương pháp giáo dục này có những ưu thế nổi bật như: kiến thức khoa học, kỹ thuật, công nghệ, nghệ thuật và toán học chắc chắn, khả năng sáng tạo, tư duy logic, hiệu suất học tập và làm việc vượt trội và có cơ hội phát triển các kỹ năng mềm toàn diện hơn.
          STEAM có xuất phát điểm là STEM nhưng về sau để bổ trợ cũng như hoàn thiện cách thức giáo dục này người ta đã bổ sung vào A tức Art (Nghệ thuật) để hoàn thiện hơn.</p>
          <p>Chữ “A” trong STEAM là thuật ngữ đại diện cho nghệ thuật tự do, nghệ thuật ngôn ngữ, nghiên cứu xã hội, nghệ thuật thể chất, mỹ thuật và âm nhạc. 
          Giáo dục STEAM là áp dụng tư duy sáng tạo cho các dự án STEM, kích thích trí tưởng tượng và sáng tạo của trẻ thông qua nghệ thuật.  
          Học các môn nghệ thuật góp phần vào việc phát triển các kỹ năng cần thiết như cỘng tác, giao tiếp, giải quyết vấn đề và đánh giá. 
          Gíao dục STEAM cũng tăng cường tính linh hoạt của học sinh, khả năng thích ứng, năng suất, trách nhiệm. 
          Thay vì như giáo dục STEM truyền thống thì STEAM là một bước cải cách, một bước chuyển mình mới đưa giáo dục tiến bộ và phát triển hơn.
          </p>
        </div>
        <div className="col-md-6 d-flex ftco-animate">
          <div className="img img-about align-self-stretch" style={{backgroundImage: 'url(images/bg_3.jpg)', width: '100%'}} />
        </div>
        <div className="col-md-6 d-flex ftco-animate">
          <div className="img img-about align-self-stretch" style={{backgroundImage: 'url(images/bg_3.jpg)', width: '100%'}} />
        </div>
        <div className="col-md-6 pl-md-5 ftco-animate">
          <h2 className="mb-4">Dạy học Tynker theo định hướng STEAM</h2>
          <p>Để phát huy tối đa tiềm năng mà các ngôn ngữ lập trình trực quan đem lại, chúng ta cần có một phương thức giáo dụng đúng đắn và phù hợp. 
            Và xét trên nhiều phương diện, góc độ thì mô hình giáo dục STEAM là phù hợp nhất. </p>
          <p>Việc áp dụng mô hình giáo dục định hướng STEAM là cần thiết trong giai đoạn hiện nay, nó góp phần xây dựng một lực lượng lao động năng động, sáng tạo, có đầy đủ năng lực, thích nghi được với bối cảnh mới của thị trường lao động. 
            Ngoài ra, do giáo dục STEAM có một đặc trưng quan trọng là phải tạo ra sản phẩm nên cần thiết phải đi kèm những phần mềm hoặc công nghệ hỗ trợ người học hình thành các sản phẩm STEAM.</p>
          <p>Nhờ vậy, chúng ta có thể một lần nữa khẳng định lại rằng ngôn ngữ lập trình trực quan chính là một trong những phương thức khả dĩ, phù hợp nhất với mô hình dạy học định hướng STEAM với khả năng đưa ra được sản phẩm cụ thể mà vẫn đáp ứng được các yêu cầu mà mô hình giáo dục này đưa ra. 
            Trong đó tiêu biểu nhất đó chính là Tynker mang những ưu điểm nổi bật của ngôn ngữ lập trình trực quan, dễ tiếp cận sử dụng cũng như phát triển tiềm năng phát triển cho trẻ nhỏ về sau.</p>
        </div>
      </div>
    </div>
  </section>
  )
    return (
        <>
        <Introduce name = "Giới Thiệu"/>
        {renderInformation()}
        <Leading/>
        <Survey/>
        <StudentSay/>
        </>
      );
}
export default GioiThieu 