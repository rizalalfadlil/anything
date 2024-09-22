import { Button, Input, Result } from "antd";

export function ResultScreen({ finishUrl, copyLink }: any) {
    return (
        <Result
            status="success"
            title="berhasil membuat tes"
            extra={<div className="grid grid-cols-2 gap-2">
                <Input value={finishUrl} className="col-span-2" />
                <Button type="primary" onClick={copyLink}>
                    salin link
                </Button>
                <Button onClick={() => (window.location.href = finishUrl)}>
                    buka
                </Button>
            </div>} />
    );
}
