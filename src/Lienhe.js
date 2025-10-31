import "./css/Contact.css";
const Lienhe = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h3>Gửi thắc mắc cho chúng tôi</h3>
        <form>
          <input type="text" placeholder="Tên của bạn" />
          <input type="email" placeholder="Email của bạn" required />
          <input type="tel" placeholder="Số điện thoại của bạn" />
          <textarea placeholder="Nội dung" required></textarea>
          <button type="submit">Gửi cho chúng tôi</button>
        </form>
      </div>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5542.337700135368!2d106.61553559875978!3d10.809429850855444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752becf6777bdf%3A0xf126d51a74b57a86!2zQ8O0bmcgVHkgU-G6o24gWHXhuqV0IEJhbG8gVMO6aSBYw6FjaCBISURPTEE!5e0!3m2!1svi!2s!4v1731231000069!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Lienhe;
