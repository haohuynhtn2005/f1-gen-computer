<template>
    <div class="account-page-content">
        <h1>
            <span>Lịch sử mua hàng</span>
        </h1>
        <div class="account-page-detail account-page-order-list">
            <div class="table-responsive">

                <table class="table">
                    <thead>
                        <tr>
                            <th>TT</th>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><a href="/account/orders/795d2ae228914589b7d4c9324c7fd01a" title="">#100009</a></td>
                            <td>10/11/2025</td>
                            <td>
                                - <a href="" title="">Tai Nghe Logitech G633S Lightsync 7.1</a> <br>
                            </td>
                            <td>3,490,000₫</td>
                            <td>Chờ xử lý</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'account'
})
</script>