# Math solver vn business api

Là một api chuyên về mãng bán hàng trực thuộc công ty mathsolver vn

## Biểu đồ hoặc Hình ảnh

## Cài đặt

## Tác nhân

- Guest: Khách vãn lai(không yêu cầu đăng nhập)
- User: khách hàng
- Admin: chủ web side

## Sử dụng

- Xác thực:
  - Đăng nhập
  - Đăng ký
  - Xác thực email
- Product:
  - lấy dánh sách product: Guest, user, admin
    - Lấy tất cả sản phẩm
    - Lấy tất cả sản phẩm theo tên
    - Lấy tất cả sản phẩm theo giá
    - Lấy tất cả sản phẩm theo còn hàng
    - Lấy tất cả sản phẩm theo thương hiệu
    - Lấy tất cả sản phẩm theo lạo sản phẩm
    - Lấy giới hạn sản phẩm theo tên
    - Lấy giới hạn sản phẩm theo giá
    - Lấy giới hạn sản phẩm theo còn hàng
    - Lấy giới hạn sản phẩm theo thương hiệu
    - Lấy giới hạn sản phẩm theo loại sản phẩm
  - Lấy 1 sản phẩm (chi tiết sản phẩm)
  - Tạo sản phẩm:
  - chỉnh sửa sảm phẩm:
- Người dùng
- Tài khoản
- Địa chỉ
- Hóa đơn
- Blog
- Loại Blog
- Thương hiệu
-
- Thêm sản phẩm vào giỏ hàng.
- Đặt hàng
- Quản lý đơn đặt hàng
- Quản lý acc
  ...

## Cấu trúc thư mục

    - api
        - config: nơi chứa các config liên quan đến kế nối database
        - v1: Thư mục đại đại diện cho phiên bản
            - heleper: chứa các hàm cho việc tiện sử dụng: gồm có các file: generateKey, jwt, passwordCrypt
            - middlerwares: Chứa các middler trung gian sử lý các lỗi, xác thực,...
            - model: Chứa các lớp đại điện cho các bản trong database tương ứng với entity
            - repository: Chứa các thao tác truy vấn cơ sở dữ liệu để tương tác với các model với phương thức ORM
            - service: Chức các hàm chức năng để cung cấp các tính năng cho controller sử dụng đồng thời tách biệt với các phương pháp truy vấn cơ sử dữ liệu ORM
            - validatetions: chứa các định nghĩa và kiểm tra các tham số từ slient gưởi đến server đồng thười một phần gánh vác công việc cho DTO
            - controller: chứa các sử lý logic chính cho server
            - router: chứa các định hướng đến controler hợp lý động thời sử lý thiêm bớt tính năng trong middlerware
            - server.js file thực thi server

## Đóng góp

## Tác giả

- Lê Trung Hậu

## Giấy phép

## Liên hệ

- Email tác giả: Leetrunghaau@gamil.com

## Tài liệu bổ sung
