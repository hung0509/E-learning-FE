import { useState } from "react";
import DiscountDto from "../../dto/discount-dto";
import { useDiscount } from "../../hook/useDiscount";

const DiscountAddForm = ({ closeModal, addDiscount }) => {
    const [discount, setDiscount] = useState(new DiscountDto());
    const { handleAddDiscount } = useDiscount();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDiscount({ ...discount, [name]: value });
    };

    const handleSubmit = async () => {
        const result = await handleAddDiscount(discount);
        const discountAddition = DiscountDto.fromJson(result);
        addDiscount(discountAddition);
        closeModal();
    };

    return (
        <form >
            <h3 className="p-3 color-common text-center">Thêm phiếu giảm giá</h3>
            <div className="mb-3">
                <label className="form-label fw-bold">Mã code phiếu giảm giá</label>
                <input
                    type="text"
                    name="discountCode"
                    value={discount.discountCode}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập mã code"
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Mô tả</label>
                <textarea
                    name="description"
                    value={discount.discountDescription}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    placeholder="Nhập mô tả phiếu giảm giá"
                    rows="4"
                ></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Phần trăm giảm giá</label>
                <input
                    type="text"
                    name="discountRate"
                    value={discount.discountRate}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập mã code"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Ngày hết hạn</label>
                <input
                    type='date'
                    className="form-control"
                    value={discount.expiredDate}
                    name="expiredDate"
                    onChange={(e) => handleChange(e)}
                />
            </div>


            <div className="d-flex justify-content-end mt-4">
                <div className="btn btn-danger" onClick={closeModal}> Hủy bỏ</div>
                <div onClick={handleSubmit} type="submit" className="btn btn-outline-primary px-4">
                    Lưu thay đổi
                </div>
            </div>
        </form>
    )
}


export default DiscountAddForm;