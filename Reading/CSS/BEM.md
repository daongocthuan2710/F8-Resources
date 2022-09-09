# BEM ( Block Element Modifier)
- Là tiêu chuẩn đặt tên class

## Ý nghĩa
- Block: khối
- Element: Thành phần trong khối
- Modifier: Bổ sung ý nghĩa cho "Block" hoặc "Element"

## Tại sao mọi người phải dùng BEM?
- Mỗi người đặt một kiểu
- Members đặt class trùng nhau, CSS đè lên nhau

## Cú pháp
- .block <!-- card -->
- .block__element <!-- card__btn, card__heading, card__desc  -->

- .block--modifier <!-- card--success, card--error  -->
- .block__element--modifier <!-- card__btn--error -->

## Tính ứng dụng
- Xây dựng layout website
- Xây dựng thành phần trên website

## Ưu điểm 
- Tính rõ ràng
- Tính tái sử dụng
- Giúp cả team làm việc với nhau dễ dàng
- Tính module, không lo CSS của class ảnh hưởng lên CSS của class khác

## Nhược điểm
- Tên class dài
- Một số người cho là xấu

## Khi nào dùng BEM là PHÙ HỢP?
- Dự án nhiều members
- Dự án lớn, số lượng pages nhiều hoặc số lượng các thành phần trên giao diện nhiều