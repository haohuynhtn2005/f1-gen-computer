<template>
    <div class="collection">
        <div class="container">
            <div class="collection-wrap">
                <ProductsProductFilter />

                <div class="collection-wrap-sort">
                    <div class="sort-header">
                        <div class="section-title-all">
                            <h2>Sắp xếp <i class="lnil lni-plus"></i></h2>
                        </div>
                    </div>
                    <div class="sort-body">
                        <div class="cSort">
                            <h4>Sắp xếp theo</h4>
                            <ul class="cSort-list">
                                <li>
                                    <input type="radio" id="data-sort-p1" value="price-ascending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p1">Giá: Tăng dần</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p2" value="price-descending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p2">Giá: Giảm dần</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p3" value="title-ascending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p3">Tên: A-Z</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p4" value="title-descending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p4">Tên: Z-A</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p5" value="created-ascending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p5">Cũ nhất</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p6" value="created-descending"
                                        class="cSort-list-radio" name="sortFilter">
                                    <label for="data-sort-p6">Mới nhất</label>
                                </li>
                                <li>
                                    <input type="radio" id="data-sort-p7" value="best-selling" class="cSort-list-radio"
                                        name="sortFilter">
                                    <label for="data-sort-p7">Bán chạy nhất</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collection-wrap-product">
                    <div class="collection-wrap-product-header">
                        <div class="section-title-all">
                            <h2>máy ảnh</h2>
                        </div>
                    </div>
                    <div class="collection-wrap-product-list">
                        <ProductsProductList :products="products" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import ProductsProductFilter from '~/components/products/ProductFilter.vue';
import ProductsProductList from '~/components/products/ProductList.vue';

const apiUrl = "https://raw.githubusercontent.com/viehao38/my-training-api/refs/heads/main/products.json";
const products = ref([]);

const fetchProducts = async () => {
    try {
        const res = await $fetch(apiUrl);
        products.value = JSON.parse(res);;
    } catch (err) {
        console.log(err);
    }
}

onMounted(() => {
    fetchProducts();
});
</script>