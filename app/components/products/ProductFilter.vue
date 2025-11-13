<template>
    <div class="collection-wrap-filter">
        <div class="filter-header">
            <div class="section-title-all">
                <h2>Bộ lọc (0 lựa chọn) <i class="lnil lni-plus"></i></h2>
            </div>
        </div>
        <div class="filter-body">
            <div class="cFilter">
                <h4>Loại sản phẩm</h4>
                <ul class="cFilter-list">
                    <li v-for="type in filters.types" :key="type">
                        <input type="checkbox" :id="type.id" :value="type.name" class="cFilter-list-checkbox"
                            :name="type.id">
                        <label :for="type.id">{{ type.name }}</label>
                    </li>
                    <li class="cFilter-more active" style="display: list-item;"><label>Xem thêm <i
                                class="lni lni-arrow-right"></i></label>
                    </li>
                </ul>
            </div>
            <div class="cFilter">
                <h4>Thương hiệu</h4>
                <ul class="cFilter-list">
                    <li v-for="brand in filters.brands" :key="type">
                        <input type="checkbox" :id="brand.id" :value="brand.name" class="cFilter-list-checkbox"
                            :name="brand.id">
                        <label :for="brand.id">{{ brand.name }}</label>
                    </li>
                    <li class="cFilter-more active" style="display: list-item;"><label>Xem thêm <i
                                class="lni lni-arrow-right"></i></label>
                    </li>
                </ul>
            </div>

            <div class="cFilter">
                <h4>Dung lượng</h4>
                <ul class="cFilter-list">
                    <li v-for="capacity in filters.capacities" :key="type">
                        <input type="checkbox" :id="capacity.id" :value="capacity.name" class="cFilter-list-checkbox"
                            :name="capacity.id">
                        <label :for="capacity.id">{{ capacity.name }}</label>
                    </li>

                </ul>
            </div>
            <div class="cFilter color">
                <h4>Màu sắc</h4>
                <ul class="cFilter-list">
                    <li v-for="color in filters.colors" :key="type">
                        <input type="checkbox" :id="color.id" :value="color.name" class="cFilter-list-checkbox"
                            :name="color.id">
                        <label :for="color.id">{{ color.name }}</label>
                    </li>
                    <li class="cFilter-more active" style="display: list-item;"><label>Xem thêm <i
                                class="lni lni-arrow-right"></i></label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const filters = {
    "types": [
        { "id": "type-1", "name": "Máy ảnh" },
        { "id": "type-2", "name": "Gaming Gear" },
        { "id": "type-3", "name": "Màn hình" },
        { "id": "type-4", "name": "Phụ kiện" },
        { "id": "type-5", "name": "Laptop" }
    ],
    "brands": [
        { "id": "brand-1", "name": "Logitech" },
        { "id": "brand-2", "name": "Sony" },
        { "id": "brand-3", "name": "Microsoft" },
        { "id": "brand-4", "name": "Apple" },
        { "id": "brand-5", "name": "Bose" },
        { "id": "brand-6", "name": "Asus" }
    ],
    "colors": [
        { "id": "color-1", "name": "Đen" },
        { "id": "color-2", "name": "Trắng" },
        { "id": "color-3", "name": "Hồng" },
        { "id": "color-4", "name": "Xanh" },
        { "id": "color-5", "name": "Đỏ" },
        { "id": "color-6", "name": "Vàng" }
    ],
    "capacities": [
        { "id": "cap-1", "name": "128GB" },
        { "id": "cap-2", "name": "256GB" },
        { "id": "cap-3", "name": "512GB" }
    ]
};

</script>