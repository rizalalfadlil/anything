import { useState } from "react";
import { BaseLayout } from "./components/baseLayout";
import { Button, Card, Input, message } from "antd";
import { getIntFromString } from "./util/functions";
import { addData } from "./util/database";
import { Validation } from "./components/Validation";
import { ImagesForm } from "./components/ImagesForm";
import { ResultForm } from "./components/ResultForm";
import { AlgorithmForm } from "./components/AlgorithmForm";
import { CreditsForm } from "./components/CreditsForm";
import { ResultScreen } from "./components/ResultScreen";

export default function Maker() {
  const [messageApi, contextHolder] = message.useMessage();
  // 1. title
  const [title, setTitle] = useState("");

  // 2. algorithm
  const [algorithm, setAlgorithm] = useState("string based");

  // 3. offset
  const [offset, setOffset] = useState(0);
  const [offsetInput, setOffsetInput] = useState("john doe");

  // 4. text results
  const [results, setResults]: any[] = useState([]);
  //   const [results, setResults] = useState(["good", "bad"]);
  const [resultInput, setresultInput] = useState("");
  const Addresult = (title: string) => {
    const newResult = [...results];
    newResult.push(title);
    setResults(newResult);
    setresultInput("");
  };
  const deleteResult = (index: number) => {
    setResults((r: any[]) => {
      return r.filter((_: any, i: number) => i !== index);
    });
  };

  // 5. images result
  const [imgs, setImgs]: any[] = useState([
    // "https://picsum.photos/id/17/500/500",
    // "https://picsum.photos/id/13/200/300",
  ]);
  const [imgsInput, setImgsInput] = useState("");
  const addImgs = (url: string) => {
    const newImgs = [...imgs];
    newImgs.push(url);
    setImgs(newImgs);
    setImgsInput("");
  };
  const deleteImgs = (index: number) => {
    setImgs((r: any[]) => {
      return r.filter((_: any, i: number) => i !== index);
    });
  };

  //credits
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  //submit data
  const dataValidation = title !== "" && results.length > 1 && name !== "";
  const [finishUrl, setfinishUrl] = useState("");
  const submitData = async () => {
    const data = {
      title,
      algorithm,
      offset,
      results,
      imgs,
      name,
      link,
    };

    addData("tes", data)
      .then((docId: any) => {
        console.log("Document added with ID:", docId);
        setfinishUrl(
          window.location.href.replace("/create", "") + "?id=" + docId
        );
      })
      .catch((err: any) => console.error(err));
  };
  const copyLink = () => {
    navigator.clipboard.writeText(finishUrl);
    messageApi.open({
      type: "success",
      content: "disalin",
    });
  };
  return (
    <>
      <Card>
        {finishUrl === "" ? (
          <main className="space-y-4">
            <p className="text-lg font-bold">buat tes</p>
            <div className="space-y-2">
              <p className="font-medium">judul</p>
              <Input
                value={title}
                placeholder="seberapa ... kamu"
                maxLength={50}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <AlgorithmForm
              algorithm={algorithm}
              setAlgorithm={setAlgorithm}
              offset={offset}
              setOffset={setOffset}
              getIntFromString={getIntFromString}
              offsetInput={offsetInput}
              setOffsetInput={setOffsetInput}
            />
            <ResultForm
              deleteResult={deleteResult}
              resultInput={resultInput}
              setresultInput={setresultInput}
              Addresult={Addresult}
              results={results}
            />
            <ImagesForm
              deleteImgs={deleteImgs}
              imgsInput={imgsInput}
              setImgsInput={setImgsInput}
              addImgs={addImgs}
              imgs={imgs}
            />
            <CreditsForm
              name={name}
              setName={setName}
              link={link}
              setLink={setLink}
            />
            <Validation
              title={title}
              algorithm={algorithm}
              offset={offset}
              name={name}
              dataValidation={dataValidation}
              results={results}
              imgs={imgs}
            />
            <Button
              type="primary"
              className="w-full"
              onClick={submitData}
              disabled={!dataValidation}
            >
              buat
            </Button>
          </main>
        ) : (
          <ResultScreen finishUrl={finishUrl} copyLink={copyLink} />
        )}
      </Card>
      {contextHolder}
    </>
  );
}
