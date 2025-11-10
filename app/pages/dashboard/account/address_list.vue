<template>
	<div class="account-page-content">
		<h1>
			<span>Danh sách địa chỉ</span>
		</h1>
		<div class="account-page-detail account-page-addresses">
			<div class="row">
				<div class="col-md-7 col-12">
					<div class="address-tables">
						<h2>
							Địa chỉ mặc định
						</h2>
						<div class="address-item">
							<div id="view_address_10256976666" class="view-address">
								<div class="row">
									<div class="col-9">
										<div class="address-name">Nguyễn Hào</div>
									</div>
									<div class="col-3 text-right">
										<a href="#"
											onclick="Haravan.CustomerAddress.toggleForm(10256976666);return false"><i
												class="las la-user-edit"></i></a>
									</div>
								</div>
								<div class="row">
									<div class="col-4">
										Địa chỉ:
									</div>
									<div class="col-8">
										289/13 Ung Van Khiem

										, 289/13 Ung Van Khiem

										, Vietnam
									</div>
								</div>
								<div class="row">
									<div class="col-4">
										Điện thoại:
									</div>
									<div class="col-8">
										0946040072
									</div>
								</div>
								<div class="row">
									<div class="col-4">
										Công ty:
									</div>
									<div class="col-8">
										TTR
									</div>
								</div>
							</div>
							<div id="edit_address_10256976666" class="edit-address" style="display:none;">

								<div class="address-item">
									<div id="view_address_10256976550" class="view-address">
										<div class="row">
											<div class="col-9">
												<div class="address-name">Nguyễn Hào</div>
											</div>
											<div class="col-3 text-right">
												<a href="#"
													onclick="Haravan.CustomerAddress.toggleForm(10256976550);return false"><i
														class="las la-user-edit"></i></a>
												<a href="#"
													onclick="Haravan.CustomerAddress.destroy(10256976550);return false"><i
														class="las la-trash-alt"></i></a>
											</div>
										</div>
										<div class="row">
											<div class="col-4">
												Địa chỉ:
											</div>
											<div class="col-8">
												a
												, Thị xã An Khê
												, Gia Lai
												, Vietnam
											</div>
										</div>
										<div class="row">
											<div class="col-4">
												Điện thoại:
											</div>
											<div class="col-8">
												0946040072
											</div>
										</div>
										<div class="row">
											<div class="col-4">
												Công ty:
											</div>
											<div class="col-8">

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-5 col-12">
					<div class="new-address-btn">
						<a href="#" onclick="Haravan.CustomerAddress.toggleNewForm(); return false;">Nhập địa chỉ
							mới</a>
					</div>
					<!-- <div id="add_address" class="new-address">
						<form action="" class="address_form_new">

							<div class="form-group">
								<label for="address_last_name_new">Họ của bạn</label>
								<input class="form-control" type="text" id="address_last_name_new"
									name="address[last_name]" value="">
							</div>
							<div class="form-group">
								<label for="address_first_name_new">Tên của bạn</label>
								<input class="form-control" type="text" id="address_first_name_new"
									name="address[first_name]" value="">
							</div>
							<div class="form-group">
								<label for="address_company_new">Công ty</label>
								<input class="form-control" type="text" id="address_company_new" name="address[company]"
									value="">
							</div>
							<div class="form-group">
								<label for="address_phone_new">Số điện thoại</label>
								<input class="form-control" type="text" id="address_phone_new" name="address[phone]"
									value="">
							</div>
						</form>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'account'
})
</script>