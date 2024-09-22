
import { Alert } from "antd";

export function Validation({
    title, algorithm, offset, name, dataValidation, results, imgs,
}: any) {
    return (
        <div className="space-y-2">
            <p className="font-medium">validasi</p>
            {title === "" && (
                <Alert message="judul tidak boleh kosong" showIcon type="error" />
            )}
            {algorithm === "string based" ? offset == 0 && (
                <>
                <Alert message="algoritma string based, hasil akan selalu sama jika nama yang di inputkan sama" type="info" showIcon closable/>
                <Alert
                    message="offset 0, mungkin bakal sama dengan orang lain"
                    showIcon
                    type="warning"
                    closable />
                    </>
            ):(<Alert message="algoritma random, hasil akan berbeda jika diulang dengan nama sama" type="info" showIcon closable/>)}
            {results.length <= 1 && (
                <Alert message="hasil harus lebih dari 1" showIcon type="error" />
            )}
            {imgs.length <= 1 && (
                <Alert
                    message="gambar kurang dari 2, mungkin bakal membosankan"
                    showIcon
                    type="warning"
                    closable />
            )}
            {name == "" && <Alert message="nama kosong" showIcon type="error" />}
            {dataValidation && <Alert message="semua ok" type="success" showIcon />}
        </div>
    );
}
