---
sidebar_position: 1
---

# Giới thiệu về Websockets

## WebSocket là gì?

- WebSocket là một giao thức mạng cho phép giao tiếp hai chiều (full-duplex) giữa client và server thông qua một kết nối TCP duy nhất. Trong NestJS, WebSocket thường được dùng để xây dựng các ứng dụng realtime như chat, thông báo, game,…

- NestJS hỗ trợ WebSocket thông qua `@nestjs/websockets` package, tích hợp sẵn adapter như `socket.io` hoặc `ws`.

## Cài đặt

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
```

## Namespace là gì?

- Trong WebSocket của NestJS, **namespace** là một cách để tổ chức và phân tách các kết nối WebSocket thành các nhóm riêng biệt, cho phép bạn xử lý các kênh giao tiếp độc lập trong cùng một ứng dụng. Mỗi namespace hoạt động như một "kênh" riêng, giúp các client kết nối đến các endpoint WebSocket khác nhau và xử lý các sự kiện cụ thể.
- Nếu không chỉ định namespace, gateway sẽ sử dụng namespace mặc định (tương ứng với đường dẫn /).
- Chức năng:
  - **Tách biệt logic**: Mỗi namespace có thể xử lý các sự kiện WebSocket riêng, giúp tổ chức mã nguồn tốt hơn. Ví dụ, bạn có thể có một namespace cho chat (`/chat`) và một namespace cho thông báo (`/notifications`).
  - **Kết nối độc lập**: Client kết nối đến namespace cụ thể thông qua URL (ví dụ: `ws://example.com/chat`). Các client trong các namespace khác nhau không giao tiếp trực tiếp với nhau.
  - **Tái sử dụng server**: Một server WebSocket có thể hỗ trợ nhiều namespace, giảm chi phí tài nguyên so với việc chạy nhiều server riêng lẻ.

:::note

- Trong mục sau, ta sẽ tìm hiểu cách tạo 1 WebSocket Gateway, mỗi Gateway **TƯƠNG ỨNG** với một namespace riêng

:::
