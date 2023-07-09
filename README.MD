# Math solver vn business api

Là một api chuyên về mãng bán hàng trực thuộc công ty mathsolver vn

## Biểu đồ hoặc Hình ảnh

## Cài đặt

## Các Tác nhân (dùng cho phần quyền)

- Guest: Khách vãn lai(không yêu cầu đăng nhập)
- User: khách hàng (người mua hàng)
- Admin: chủ web side (chịu trách nhiệm quản lý việc bán hàng, viết bài viết,...)
- system: có tất cả các quyền của các tác nhân còn lại đồng thời gọi được cả cái controller chỉnh sửa chi tiết tới database (có chức năng quản lý hệ thống dành cho những người am hiểu về databae sử lý)

## Sử dụng

- Xác thực:
  - Đăng nhập
    - Yêu cầu:
      - chưa đăng nhập vào web
      - các giá trị bao gồm: email, password
    - trả về:
      {
      status: http-code (biểu thị cho trạng thái thái của hệ thống )
      message: (thông báo lỗi khi cần)
      data: null/ {
      token: (là một chuỗi token để xác thục sau này có hiệu lực 30 ngày).
      }
      }
    - phân quyền: guest (không được đăng nhập với bất kỳ tài khoản nào)
    - link: host/api/sig/
    - phương thức: POST
  - Đăng ký
    - Yêu cầu:
      - chưa đăng nhập vào web
      - các giá trị bao gồm: email, password, first name, last name
    - trả về:
      {
      status: http-code (biểu thị cho trạng thái thái của hệ thống )
      message: (thông báo lỗi khi cần)
      data: null/ {
      token: (là một chuỗi token để xác thục sau này).
      }
      }
    - phân quyền: guest (không được đăng nhập với bất kỳ tài khoản nào)
    - link: host/api/sig/
    - phương thức: POST
  - Xác thực email
  - đăng xuất
- Product:
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
  * Tạo sản phẩm:
  * chỉnh sửa sảm phẩm:
  * xóa sản phẩm
- Người dùng
  - chỉnh sửa thông tin cá nhân
  * lấy danh sách người dùng
  * chỉnh sửa thông tin người dùng người dùng
  * xóa người dùng
  * thêm tài khoản admin
- Tài khoản
  - đăng nhập bằng email password
- Địa chỉ
  - Lấy địa chỉ chính
  - lấy danh danh địa chỉ
  - thêm
  - xóa
  - sửa
- Hóa đơn
  - xuất hóa đơn
  * lấy tất cả hóa đơn
  * xuất hóa đơn
- Blog
  - xem bài viết
  - xem danh sách bài viết
  * tạo bài viết
  * sửa bài viết
  * xóa bài viết
- Loại Blog
  - xem danh sách loại bài viết
  * thêm
  * xóa
  * sửa
- Thương hiệu
  - lấy danh sách
  * thêm
  * xóa
  * sửa
- loại sản phẩm
  - lấy danh sách
  * thêm
  * xóa
  * sửa
- Thêm sản phẩm vào giỏ hàng.
  - lấy danh sách sản phẩm trong giỏ hàng
  - thêm sản phẩn vào giỏ hàng
  - xóa sản phẩm trong giỏ giỏ hàng
  - sửa số lượng sản phẩn trong giỏ hàng
- Đặt hàng
  - đặt hàng
  * xóa đơn hàng
  * sửa đơn hàng
  * xem đơn hàng
  * xem danh sách đơn hàng
    ...
- thông báo
  - gửi 1 thông báo trong lúc thông báo có hiệu lực
  * lấy danh sách thông báo
  * thiêm thông báo
  * sửa thông báo
  * xóa thông báo
- thêm sản phẩm vào kho: giá trị số lượng trong kho là không được phép chỉnh sửa và chỉ chỉnh sữa được bằng cách chỉnh sửa ở chức năng lưu kho. Mục đích tạo dữ liệu cho thống kê sau này
  - hiển thị lịch sử lưu kho
  - thêm nhập hàng
  - xóa nhập hàng
  - sửa nhập hàng
- nguồn hàng
  - lấy danh sách nguồn hàng
  - thêm nguồn hàng
  - sửa nguồn hàng
  - xóa nguồn hàng

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
