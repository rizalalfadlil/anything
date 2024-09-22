import {
    Button, Image,
    Input
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Tutorialwindow from "./tutorialwindow";

export function ImagesForm({
    deleteImgs, imgsInput, setImgsInput, addImgs, imgs,
}: any) {
    return (
        <div className="space-y-2">
            <p className="font-medium">images</p>
            <div className="flex flex-wrap gap-2">
                {imgs.map((m: string | undefined, i: number) => (
                    <div key={i}>
                        <Image src={m} width={100} height={100} />
                        <div className="grid">
                            <p className="text-center">{`${(
                                (100 / imgs.length) * i +
                                1
                            ).toFixed(0)} - ${((100 / imgs.length) * (i + 1)).toFixed(
                                0
                            )}`}</p>
                            <Button danger onClick={() => deleteImgs(i)}>
                                hapus
                            </Button>
                        </div>
                    </div>
                ))}
                <div className="w-full flex gap-2">
                    <Input
                        value={imgsInput}
                        onChange={(e) => setImgsInput(e.target.value)}
                        placeholder="https://example.com/image.jpg" />
                    <Button
                        type="primary"
                        onClick={() => addImgs(imgsInput)}
                        disabled={imgsInput == ""}
                    >
                        <PlusOutlined />
                    </Button>
                    <Tutorialwindow />
                </div>
            </div>
        </div>
    );
}
