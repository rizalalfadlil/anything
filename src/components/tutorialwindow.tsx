import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Carousel, Image, Modal } from "antd";
import { useState } from "react";

export default function Tutorialwindow() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} ><InfoCircleOutlined /></Button>
      <Modal
        centered
        title="cara menambahkan url gambar (karena saya malas menambahkan input file 🗿)"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        open={open}
        footer={() => <></>}
      >
        <Carousel arrows>
          <div className="h-80 space-y-2">
            <p>1. cari gambar yang ada di internet</p>
            <Image src="./tutor/1.png" width={500}/>
          </div>
          <div className="h-80 space-y-2">
            <p>2. salin link gambar</p>
            <Image src="./tutor/2.png"/>
          </div>
          <div className="h-80 space-y-2">
            <p>3. tempel</p>
            <Image src="./tutor/3.png"/>
          </div>
        </Carousel>
      </Modal>
    </>
  );
}
