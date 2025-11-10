<template>
    <DefaultLayout>
        <div id="account-page">
            <div class="container">
                <div class="account-page-wrap">
                    <div class="account-page-sidebar">
                        <div class="account-sidebar-header">
                            <div class="account-sidevar-avatar">
                                <i class="lni lni-user"></i>
                            </div>
                            <h3>Hi, <b>Nguyễn Hào</b></h3>
                        </div>
                        <div class="account-sidebar-menu">
                            <ul>
                                <li>
                                    <NuxtLink to="/dashboard/account"
                                        :class="{ 'active-link': route.path.startsWith('/dashboard/account') }">Thông
                                        tin tài khoản</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dashboard/account/order_history"
                                        :class="{ 'active-link': route.path.startsWith('/dashboard/account/order_history') }">
                                        Lịch sử mua hàng</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dashboard/account/address_list"
                                        :class="{ 'active-link': route.path.startsWith('/dashboard/account/address_list') }">
                                        Danh sách địa chỉ</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="" active-class="active">Đăng xuất</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <NuxtPage />
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '~/layouts/default.vue'
import { useRoute } from 'vue-router'

const route = useRoute()   
</script>