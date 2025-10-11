const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Nguyễn Văn An",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-58-copy-min.jpg.webp",
    },
    {
      id: 2,
      hoten: "Trần Văn Bình",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/08/Anh-cong-so-1-min.jpg.webp",
    },
    {
      id: 3,
      hoten: "Hà Thị Hiền",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-chan-dung.jpg",
    },
    {
      id: 4,
      hoten: "Nguyễn Kiều Hải My",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://studiochupanhdep.com//Upload/Images/Album/anh-beauty-01.jpg",
    },
    {
      id: 5,
      hoten: "Nguyễn Tuyết Linh",
      lop: "K20",
      email: "abc@linh.edu.vn",
      anh: "https://i.pinimg.com/736x/ff/26/11/ff26117a4e97fce79353e7a18b86e4e8.jpg",
    },
    {
      id: 6,
      hoten: "Trần Hạo Nam",
      lop: "K20",
      email: "abc@nam.edu.vn",
      anh: "https://image.kpopmap.com/2022/03/THE-ORIGIN-Jeong-SeungHwan.jpg",
    },
    {
      id: 7,
      hoten: "Đặng Hoàng Khôi",
      lop: "K20",
      email: "abc@khôi.edu.vn",
      anh: "https://entertain.teenee.com/kpop/img9/890671.jpg",
    },
    {
      id: 8,
      hoten: "Tô Kiều Hân",
      lop: "K20",
      email: "abc@han.edu.vn",
      anh: "https://i.pinimg.com/736x/5e/f5/8b/5ef58bc2d85eedea0f2308a2c04ccfb0.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang

        backgroundColor: "#f9f9f9", // Tuỳ chọn
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giới hạn chiều rộng
          width: "100%",
        }}
      >
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={motsinhvien.anh}
              alt={motsinhvien.hoten}
              style={{
                height: "140px",

                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
