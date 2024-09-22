
import { Button, Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export function ResultForm({
  deleteResult,
  resultInput,
  setresultInput,
  Addresult,
  results,
}: any) {
  return (
    <div className="space-y-2">
      <p className="font-medium">list hasil</p>
      {results.map((r: any, i: number) => (
        <Tag key={i} onClick={() => deleteResult(i)}>{`${r} (${(
          (100 / results.length) * i +
          1
        ).toFixed(0)} - ${((100 / results.length) * (i + 1)).toFixed(
          0
        )})`}</Tag>
      ))}
      <div className="w-full flex gap-2">
        <Input
          value={resultInput}
          onChange={(e) => setresultInput(e.target.value)}
          maxLength={20}
          placeholder="karbit"
        />
        <Button
          type="primary"
          onClick={() => Addresult(resultInput)}
          disabled={resultInput == ""}
        >
          <PlusOutlined />
        </Button>
      </div>
    </div>
  );
}
