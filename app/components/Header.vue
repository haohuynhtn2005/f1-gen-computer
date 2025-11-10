<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-left">
          <p>F1GENZ Computer xin kính chào quý khách. Chúc quý khách có một
            ngày
            thật là vui vẻ.!</p>
        </div>
        <div class="header-top-right">

          <a class="header-top-item" href="/collections/all">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-1.png?v=2835"
              alt="header-top-item-1" />
            <span>Trang chủ</span>
          </a>

          <a class="header-top-item" href="tel:1900636099">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-2.png?v=2835"
              alt="header-top-item-2" />
            <span>Hotline</span>
          </a>

          <a class="header-top-item" href="tel:1900636099">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-3.png?v=2835"
              alt="header-top-item-3" />
            <span>Hotline 2</span>
          </a>

          <a class="header-top-item" href="/pages/ho-tro-ky-thuat">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-4.png?v=2835"
              alt="header-top-item-4" />
            <span>Hổ trợ kỹ thuật</span>
          </a>

          <a class="header-top-item" href="/blogs/all">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-5.png?v=2835"
              alt="header-top-item-5" />
            <span>Khuyến mãi</span>
          </a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-left">
          <a href="/">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/logo.png?v=2835" alt="F1GEN Computer" />
          </a>
        </div>
        <div class="header-bottom-center">
          <div class="header-bottom-center-search">
            <form action="/search">
              <input type="hidden" name="type" value="product" />
              <input required name="q" autocomplete="off" type="text" placeholder="Tìm kiếm sản phẩm...">
              <button type="submit"><i class="lni lni-search-alt"></i></button>
            </form>
            <ul class="header-bottom-center-search-suggest">
              <li><a href="">Android</a></li>
              <li><a href="">Airpod</a></li>
              <li><a href="">Ios</a></li>
              <li><a href="">Gear</a></li>
              <li><a href="">MSI</a></li>
              <li><a href="">Lenovo</a></li>
              <li><a href="">Dell</a></li>
              <li><a href="">Asus</a></li>
              <li><a href="">Hp</a></li>
              <li><a href="">Macbook</a></li>
            </ul>
            <div class="header-bottom-center-search-smart">
              <div></div>
            </div>
          </div>
        </div>
        <div class="header-bottom-right">
          <div class="header-bottom-right-item" data-action="compare" data-url="/pages/so-sanh">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/compare.png?v=2835"
              alt="header-bottom-right-compare" />
            <span>So sánh</span>
            <span class="header-bottom-right-item-count">0</span>
          </div>
          <div class="header-bottom-right-item" data-action="wishlist">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/wishlist.png?v=2835"
              alt="header-bottom-right-wishlist" />
            <span>Yêu thích</span>
            <span class="header-bottom-right-item-count">0</span>
          </div>
          <NuxtLink to="/dashboard/account" class="header-bottom-right-item" data-action="/dashboard/account">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/account.png?v=2835"
              alt="header-bottom-right-account" />
            <span>Tài khoản</span>
          </NuxtLink>
          <div class="header-bottom-right-item" data-action="cart">
            <img src="//theme.hstatic.net/200000306751/1000695789/14/cart-new.png?v=2835"
              alt="header-bottom-right-cart" />
            <span>Giỏ hàng</span>
            <span class="header-bottom-right-item-count">0</span>
          </div>
          <div class="header-bottom-right-item" data-action="bars">
            <img src="https://file.hstatic.net/200000306751/file/menu__3__34e577491ad847ed8619de950ed771c2.png"
              alt="header-bottom-right-menu" />
          </div>
        </div>
        <div class="header-bottom-menu">
          <div class="header-bottom-menu-left">
            <div class="scroll-mega">
              <button class="f-button" data-type="sidebar">
                <i class="lni lni-menu-alt"></i>
                Danh mục sản phẩm
              </button>
              <div class="slider-sidebar-left">
                <ul>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_1.png?v=2835"
                        alt="" />
                      Điện máy - Điện gia dụng
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/man-hinh">Nồi các loại</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Nồi cơm điện</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Nồi áp suất</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Nồi lẩu điện</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Nồi chiên không
                                dầu</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/loa-bose">Bếp - Lò</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Bếp ga</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Bếp từ</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Bếp hồng
                                ngoại</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Bếp nướng
                                điện</a>
                            </li>
                            <li>
                              <a href="/collections/may-tinh">Lò vi sóng</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Lò
                                nướng</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/logitech">Điện gia dụng</a>
                          <ul>
                            <li>
                              <a href="/collections/man-hinh">Bàn ủi</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Quạt</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Quạt điều
                                hòa</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Quạt sưởi, Đèn
                                sưởi</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Máy lọc không
                                khí</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Máy hút bụi,
                                robot
                                hút bụi</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Đèn bàn, đèn
                                pin,
                                đèn sạc</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Vợt muỗi</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Ổ cắm điện</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Máy xay - Ép -
                            Vắt</a>
                          <ul>
                            <li>
                              <a href="/collections/may-anh">Máy xay thịt</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Máy xay sinh
                                tố</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Máy ép trái
                                cây</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Máy đánh
                                trứng</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Máy vắt cam</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Thiết bị nhà bếp</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Bình đun, bình
                                thủy điện</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Máy pha cafe</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Máy hút mùi</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Máy rửa
                                chén</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_2.png?v=2835"
                        alt="" />
                      Laptop & Macbook
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/microsoft">Laptop theo thương
                            hiệu</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Apple</a>
                            </li>
                            <li>
                              <a href="/collections/may-tinh">Asus</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Acer</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Dell</a>
                            </li>
                            <li>
                              <a href="/collections/loa-bose">HP</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">LG</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">MSI</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Lenovo</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Laptop theo yêu
                            cầu</a>
                          <ul>
                            <li>
                              <a href="/collections/man-hinh">Laptop
                                Gaming</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Laptop đồ họa</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Laptop 2 trong
                                1</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Laptop
                                mỏng
                                nhẹ</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Laptop theo kích
                            thước</a>
                          <ul>
                            <li>
                              <a href="/collections/man-hinh">Dưới 13 inch</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">13 - 15
                                inch</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Trên 13 inch</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Laptop theo giá</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Dưới 10 triệu</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">10 - 15
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">15 - 20
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">20 - 25
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">25 - 30 triệu</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Trên 30
                                triệu</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Laptop theo cấu hình
                            chip</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Intel Core
                                i3</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Intel Core
                                i5</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Intel Core
                                i7</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Intel Core
                                i9</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">AMD Ryzen 3</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">AMD Ryzen 5</a>
                            </li>
                            <li>
                              <a href="/collections/loa-bose">AMD Ryzen 7</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Phụ kiện laptop</a>
                          <ul>
                            <li>
                              <a href="/collections/phu-kien">Balo laptop</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Túi, dán</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Đế tản
                                nhiệt</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Linh kiện laptop</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Bàn phím
                                laptop</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Ram laptop</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Sạc laptop</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Pin
                                laptop</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_3.png?v=2835"
                        alt="" />
                      Tivi - Màn hình TV
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/gaming-gear-x">Tivi theo
                            thương
                            hiệu</a>
                          <ul>
                            <li>
                              <a href="/collections/may-tinh">LG</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Samsung</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Panasonic</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Sony</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">TCL</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Sharp</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Toshiba</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Tivi theo tính
                            năng</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Smart Tivi</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Internet
                                Tivi</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Box Tivi</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Tivi LED</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Tivi OLED</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Tivi
                                QLED</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Tivi theo độ phân
                            giải</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Tivi HD</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Tivi Full
                                HD</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Tivi 4k</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Tivi 8k</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Tivi theo kích
                            thước</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Dưới 44 inch</a>
                            </li>
                            <li>
                              <a href="/collections/apple">44 - 49 inch</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">50 - 59
                                inch</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">60 - 69
                                inch</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Trên 70
                                inch</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Tivi theo giá</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Dưới 10
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">10 - 20
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/may-tinh">21 - 30
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">31 - 40
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">40 - 49
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Trên 50
                                triệu</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_4.png?v=2835"
                        alt="" />
                      Thiết bị thông minh
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/microsoft">Điện thoại</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Iphone</a>
                            </li>
                            <li>
                              <a href="/collections/may-tinh">Samsung</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">OPPO</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Realme</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Xiaomi</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Nokia</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Vivo</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/gaming-gear-x">Máy tính
                            bảng</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Apple</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Samsung</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Lenovo</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Masstel</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Phụ kiện</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Bao da - ốp
                                lưng</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Pin dự phòng</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Sạc không
                                dây</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Cáp sạc</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Củ sạc</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/may-tinh">Đồng hồ thông
                            minh</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Apple</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Samsung</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Garmin</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Xiaomi</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Fitbit</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Khác</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/may-tinh">Thiết bị smart
                            home</a>
                          <ul>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_5.png?v=2835"
                        alt="" />
                      PC - Máy tính đồng bộ
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/may-tinh">PC theo thương
                            hiệu</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Asus</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Samsung</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Dell</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">HP</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">MSI</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Lenovo</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Intel</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">PC theo yêu cầu</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">PC văn phòng</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">PC gaming</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">PC đồ họa</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">PC mini</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">PC all in one</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">PC theo giá tiền</a>
                          <ul>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/logitech">PC theo chip</a>
                          <ul>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_6.png?v=2835"
                        alt="" />
                      Màn hình máy tính
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/apple">Theo thương hiệu</a>
                          <ul>
                            <li>
                              <a href="/collections/man-hinh">Dell</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">BenQ</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">LG</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Asus</a>
                            </li>
                            <li>
                              <a href="/collections/loa-bose">MSI</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Viewsonic</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Philips</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">AOS</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Theo nhu cầu</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Màn hình thiết
                                kế</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Màn hình
                                gaming</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Màn hình cong</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Màn hình văn
                                phòng</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/may-anh">Theo giá tiền</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Dưới 3
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">3 - 5
                                triệu</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">5 - 7 triệu</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">7 - 10 triệu</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Trên 10 triệu</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Theo độ phân
                            giải</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">HD 720p</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Full HD
                                1080p</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">1440p</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">UHD 4k</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/loa-bose">Tần số quét</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">60 Hz</a>
                            </li>
                            <li>
                              <a href="/collections/apple">75 Hz</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">144 Hz</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">165 Hz</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">240
                                Hz</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Theo kích thước</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Dưới 19
                                inch</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">19.5" đến
                                21.5"</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">22" đến 25"</a>
                            </li>
                            <li>
                              <a href="/collections/apple">22.5" đến 27"</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Trên 27 inch</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_7.png?v=2835"
                        alt="" />
                      Linh kiện máy tính
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/microsoft">CPU - Bộ vi xử
                            lý</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Pentium</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Core i3</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Core i5</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">Core i5</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Core
                                i7</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Core i9</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">Xeon</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Athlon</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Ryzen 3</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Ryzen 5</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Threadripper</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/may-tinh">VGA - Card màn
                            hình</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Asus</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Colorful</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">GALAX</a>
                            </li>
                            <li>
                              <a href="/collections/apple">MSI</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Mainboard - Bo mạch
                            chủ</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">ASUS</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">ASRock</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Gigabyte</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">MSI</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">AMD</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/gaming-gear-x">RAM - Bộ
                            nhớ</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">ADATA</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Crucial</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">G.SKILL</a>
                            </li>
                            <li>
                              <a href="/collections/loa-bose">Kington</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Ổ cứng</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">SSD</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Di động</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Seagate</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">PSU - Nguồn máy
                            tính</a>
                          <ul>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/may-tinh">Tản nhiệt</a>
                          <ul>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/gaming-gear-x">Case - Thùng
                            máy
                            tính</a>
                          <ul>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_8.png?v=2835"
                        alt="" />
                      <span>Hi-End Gaming</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_9.png?v=2835"
                        alt="" />
                      <span>Phụ kiện & Thiết bị ngoại vi</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_10.png?v=2835"
                        alt="" />
                      <span>Thiết bị âm thanh</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_11.png?v=2835"
                        alt="" />
                      <span>Máy ảnh - Máy quay phim</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_12.png?v=2835"
                        alt="" />
                      Thiết bị văn phòng
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/gaming-gear-x">Máy in văn
                            phòng</a>
                          <ul>
                            <li>
                              <a href="/collections/phu-kien">Borther</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Canon</a>
                            </li>
                            <li>
                              <a href="/collections/may-tinh">Máy in phun</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Máy in kim</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">HP</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Máy scan</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Borther</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Canon</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">HP</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Epson</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/phu-kien">Máy fax</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">Borther</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Panasonic</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Mực in - giấy in</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Mực in
                                laser</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Mực in phun</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Giấy in</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">Ruby
                                băng</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Thiết bị trình
                            chiếu</a>
                          <ul>
                            <li>
                              <a href="/collections/man-hinh">Máy chiếu</a>
                            </li>
                            <li>
                              <a href="/collections/apple">Màn chiếu</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Bút trình
                                chiếu</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Giá treo</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/man-hinh">Máy chủ server</a>
                          <ul>
                            <li>
                              <a href="/collections/microsoft">Dell</a>
                            </li>
                            <li>
                              <a href="/collections/apple">HP</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Thiết bị điện
                            thoại</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Điện thoại
                                bàn</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/apple">Phần mềm</a>
                          <ul>
                            <li>
                              <a href="/collections/gaming-gear-x">Windows</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Diệt Virus</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/">
                      <img class="lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-src="//theme.hstatic.net/200000306751/1000695789/14/iconMenuVertical_13.png?v=2835"
                        alt="" />
                      Thiết bị mạng - An ninh
                    </a>
                    <div>
                      <ul>
                        <li>
                          <a href="/collections/gaming-gear-x">Thiết bị
                            mạng</a>
                          <ul>
                            <li>
                              <a href="/collections/may-anh">Asus</a>
                            </li>
                            <li>
                              <a href="/collections/gaming-gear-x">TP-Link</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">TENDA</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Card mạng</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Cáp mạng</a>
                            </li>
                            <li>
                              <a href="/collections/but-trinh-chieu">USB
                                3G/4G</a>
                            </li>
                            <li>
                              <a href="/collections/may-anh">USB Wifi</a>
                            </li>
                            <li>
                              <a href="/collections/phu-kien">Cisco</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/collections/microsoft">Thiết bị an
                            ninh</a>
                          <ul>
                            <li>
                              <a href="/collections/apple">KBVISON</a>
                            </li>
                            <li>
                              <a href="/collections/man-hinh">Xiaomi</a>
                            </li>
                            <li>
                              <a href="/collections/logitech">Camera an
                                ninh</a>
                            </li>
                            <li>
                              <a href="/collections/microsoft">Camera wifi</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-bottom-menu-right">
            <ul class="fHeader-menu0">
              <li class="active">
                <a href="/">Trang chủ</a>
              </li>
              <li class="">
                <NuxtLink to="/contact" class="header-bottom-right-item" data-action="/contact">Giới Thiệu</NuxtLink>
              </li>

              <li class="hasChild">
                <a href="/collections/all">Tất cả sản phẩm<i class="lni lni-chevron-down"></i></a>
                <ul class="fHeader-menu1">
                  <li class="hasChild">
                    <a href="/collections/may-tinh">Điện máy - Gia dụng<i class="lni lni-chevron-right"></i></a>
                    <ul class="fHeader-menu2">
                      <li class="">
                        <a href="/collections/logitech"> Bếp - Lò </a>
                      </li>
                      <li class="">
                        <a href="/collections/microsoft"> Điện gia dụng </a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <a href="/collections/may-tinh">Laptop & Macbook</a>
                  </li>
                  <li class="">
                    <a href="/collections/phu-kien">Tivi - Màn hình TV</a>
                  </li>
                  <li class="">
                    <a href="/collections/may-anh">Điện thoại & Thiết bị thông
                      minh</a>
                  </li>
                  <li class="hasChild">
                    <a href="/collections/apple">PC - Máy tính đồng bộ<i class="lni lni-chevron-right"></i></a>
                    <ul class="fHeader-menu2">
                      <li class="">
                        <a href="/collections/microsoft"> PC theo thương hiệu
                        </a>
                      </li>
                      <li class="">
                        <a href="/collections/may-anh"> PC theo yêu cầu </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="">
                <a href="/blogs/news">Blog</a>
              </li>
              <li class="">
                <a href="/pages/frontpage">Kinh nghiệm mua sắm</a>
              </li>
              <li class="">
                <NuxtLink to="/return_policy" class="header-bottom-right-item" data-action="/contact">Chính sách - Hướng dẫn</NuxtLink>
              </li>
              <li class="">
                <NuxtLink to="/contact" class="header-bottom-right-item" data-action="/contact">Liên Hệ</NuxtLink>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>