import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Progress, Segmented } from "antd";

export function AlgorithmForm({
  algorithm,
  setAlgorithm,
  offset,
  setOffset,
  getIntFromString,
  offsetInput,
  setOffsetInput,
}: any) {
  return (
    <>
      {" "}
      <div className="space-y-2">
        <p className="font-medium">algortima</p>
        <Segmented
          options={["string based", "random"]}
          value={algorithm}
          onChange={setAlgorithm}
        />
      </div>
      {algorithm === "string based" && (
        <div className="space-y-2">
          <p className="font-medium">offset</p>
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="text-xs">
              <p>offset</p>
              <div className="flex gap-2">
                <Button onClick={()=>setOffset(offset > -9999 ? offset + 1 : offset)}>
                  <MinusOutlined />
                </Button>
                <InputNumber
                className="grow"
                  placeholder="offset"
                  type="number"
                  value={offset}
                  max={9999}
                  min={9999}
                  onChange={(e) => setOffset(e || 0)}
                />
                <Button onClick={()=>setOffset(offset < 9999 ? offset + 1 : offset)}><PlusOutlined/></Button>
              </div>
            </div>
            <div className="row-span-2 grid place-content-center">
              <Progress
                percent={getIntFromString(offsetInput, offset)}
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
