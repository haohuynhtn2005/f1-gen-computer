<template>
    <div v-for="product in products" :key="product.id" class="pro-loop">
        <div class="pro-loop-wrap">
            <div class="pro-loop-image">
                <a href="/products/canon-eos-850d-18-55-f3-5-5-6-stm">
                    <picture v-for="image in product.images">
                        <source :srcset="image.medium" :data-srcset="image.medium" media="(max-width: 767px)">
                        <img class=" lazyloaded" :src="image.large" :data-src="image.large" :alt="name">
                    </picture>
                </a>
            </div>
            <span class="pro-loop-vendor">{{ product.vendor }}</span>
            <h3 class="pro-loop-name">
                <a href="/products/canon-eos-850d-18-55-f3-5-5-6-stm" title="Canon EOS 850D 18-55 F3.5-5.6 STM"> {{
                    product.name }}</a>
            </h3>
            <div class="pro-loop-price">
                <strong>Giá: {{ product.price }} ₫</strong>
            </div>
            <div class="pro-loop-action">
                <button type="button" class="f-button setAddCartLoop" data-type="add-cart" data-id="1069459362"><i
                        class="lnil lni-shopping-basket"></i> Thêm vào
                    giỏ</button>
                <div class="pro-loop-action-wrap">
                    <button type="bytton" class="f-button" data-type="show-action" title="Lựa chọn"><img
                            src="https://file.hstatic.net/200000306751/file/settings__3__3728a2ca7f88406b8b65caa10220bb82.png"
                            alt="show-more"></button>
                    <div>
                        <button type="button" title="Xem nhanh" class="f-button setQuickview" data-type="quickview"
                            data-url="/products/canon-eos-850d-18-55-f3-5-5-6-stm"
                            data-handle="canon-eos-850d-18-55-f3-5-5-6-stm" data-toggle="modal"
                            data-target="#quickviewLogin" data-whatever="@quickviewLogin"><i
                                class="lnil lni-search-alt"></i></button>
                        <button type="button" title="Yêu thích" class="f-button setWishlist" data-type="wishlist"
                            data-handle="canon-eos-850d-18-55-f3-5-5-6-stm"><i class="lnil lni-heart"></i></button>
                        <button type="button" title="So sánh" class="f-button setCompare" data-type="compare"
                            data-handle="canon-eos-850d-18-55-f3-5-5-6-stm"><i class="lni lni-shuffle"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    products: Object,
    default: []
});
import { ref, onMounted } from 'vue';


</script>