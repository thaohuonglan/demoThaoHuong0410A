import "./css/style.css";
import video from "./assets/video/gioithieu.mp4";
const Gioithieu = () => {
  return (
    <div className="About-Main">
      <section className="about-banner" data-aos="fade-up">
        <h1 className="animate__animated animate__fadeInDown">
          Về ThaoHuong Fashion
        </h1>
        <p className="animate__animated animate__fadeInUp">
          Thời trang là ngôn ngữ của sự tự tin, thanh lịch và phong cách.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text" data-aos="fade-right">
          <h2>Chúng tôi là ai?</h2>
          <p>
            ThaoHuong Fashion được thành lập với sứ mệnh mang đến những sản phẩm
            thời trang tinh tế, tôn vinh vẻ đẹp tự nhiên và sự tự tin của người
            phụ nữ hiện đại...
          </p>
        </div>

        <div className="about-video" data-aos="fade-left">
          <video className="video-frame" controls autoplay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="about-values" data-aos="zoom-in-up">
        <h2>Giá trị của chúng tôi</h2>
        <div className="value-grid">
          <div className="value-card" data-aos="flip-up">
            <i className="fa-solid fa-gem"></i>
            <h3>Chất lượng</h3>
            <p>
              {" "}
              Mỗi sản phẩm của ThaoHuong Fashion được chế tác với sự tỉ mỉ, lựa
              chọn chất liệu cao cấp và quy trình kiểm tra nghiêm ngặt nhằm mang
              lại trải nghiệm hoàn hảo nhất cho khách hàng.
            </p>
          </div>

          <div className="value-card" data-aos="flip-up">
            <i className="fa-solid fa-heart"></i>
            <h3>Phong cách</h3>
            <p>
              Chúng tôi luôn cập nhật xu hướng thời trang hiện đại, mang đến
              những thiết kế thanh lịch, tinh tế giúp bạn tự tin thể hiện cá
              tính và gu thẩm mỹ riêng.
            </p>
          </div>

          <div className="value-card" data-aos="flip-up">
            <i className="fa-solid fa-leaf"></i>
            <h3>Bền vững</h3>
            <p>
              ThaoHuong Fashion hướng đến phát triển bền vững thông qua việc sử
              dụng nguyên liệu thân thiện với môi trường và ủng hộ các giá trị
              nhân văn trong ngành thời trang.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gioithieu;
