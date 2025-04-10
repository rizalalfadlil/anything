import { MinusOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Progress, Segmented, theme } from "antd";
const { useToken } = theme;
export function AlgorithmForm({
  algorithm,
  setAlgorithm,
  offset,
  setOffset,
  getIntFromString,
  offsetInput,
  setOffsetInput,
}: any) {
  const { token } = useToken();
  return (
    <>
      {" "}
      <div className="space-y-2">
        <p className="font-medium">Algortima</p>
        <Segmented
          options={["konversi huruf ke angka", "random"]}
          value={algorithm}
          onChange={setAlgorithm}
        />
      </div>
      {algorithm === "konversi huruf ke angka" && (
        <div className="space-y-2">
          <p className="font-medium">Offset</p>
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="text-xs">
              <p>offset</p>
              <div className="flex gap-2">
                <InputNumber
                  className="grow"
                  placeholder="offset"
                  type="number"
                  value={offset}
                  max={9999}
                  min={-9999}
                  onChange={(e) => setOffset(e || 0)}
                />
                <Button
                  onClick={() =>
                    setOffset(offset > -9999 ? offset - 1 : offset)
                  }
                >
                  <MinusOutlined />
                </Button>
                <Button
                  onClick={() => setOffset(offset < 9999 ? offset + 1 : offset)}
                >
                  <PlusOutlined />
                </Button>
                <Button
                  onClick={() => setOffset(Math.floor(Math.random() * 100))}
                >
                  ∞
                </Button>
              </div>
            </div>
            <div className="row-span-2 grid place-content-center">
              <Progress
                percent={getIntFromString(offsetInput, offset)}
                strokeColor={token.colorPrimary}
                type="circle"
                format={(n) => n}
              />
            </div>
            <div>
              <p className="text-xs">contoh input</p>
              <Input
                placeholder="contoh input"
                value={offsetInput}
                onChange={(e) => setOffsetInput(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
