import { Button, Card, ConfigProvider, Input, Progress } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import { getIntFromString } from "./util/functions";
import { getData } from "./util/database";
import { LoadingOutlined } from "@ant-design/icons";

export default function App() {
  const [text, setText] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [failed, setFailed] = useState(false);
  const [algorithm, setalgorithm] = useState("");
  const [creator, setCreator] = useState({ name: "", url: "" });
  const [options, setoptions] = useState([
    "bad",
    "normal",
    "good",
    "great",
    "perfect",
  ]);
  const [imgs, setimgs] = useState([
    "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png",
  ]);
  const [offset, setoffset] = useState(0);
  useEffect(() => {
    getParamsData();
  }, []);

  const getParamsData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    getDataFromId(urlParams.get("id") || id);
    setId(urlParams.get("id") || id);
  };
  const getDataFromId = async (id: string) => {
    try {
      const result: any = await getData("tes", id);
      setTitle(result.title);
      setoptions(result.results);
      setimgs(result.imgs);
      setalgorithm(result.algorithm);
      setoffset(result.offset);
      setCreator({ name: result.name, url: result.link });
    } catch (e) {
      setFailed(true);
      console.error("error");
    }
  };
  const [number, setNumber] = useState(0);
  const result: any = () => {
    const count = Math.floor((options.length * number) / 100);
    if (count < 0) return 0;
    else if (count == options.length) return count - 1;
    else return count;
  };
  const imgResult: any = () => {
    const count = Math.floor((imgs.length * number) / 100);
    if (count < 0) return 0;
    else if (count == imgs.length) return count - 1;
    else return count;
  };
  const [loading, setloading] = useState(false);
  function reset() {
    setNumber(0);
    setText("");
    setshowResult(false);
  }
  const test = () => {
    const value =
      algorithm === "string based"
        ? getIntFromString(text, offset)
        : (Math.random() * 100).toFixed(0);
    setloading(true);
    setTimeout(() => {
      setshowResult(true);
      setTimeout(() => {
        setNumber(Number(value));
        setloading(false);
      }, 500);
    }, 1000);
  };
  return (
    <ConfigProvider theme={{ token: {} }}>
      <div className="grid content-center h-full">
        {failed ? (
          <Card className="text-center">
            <p className="text-2xl">404</p>
            <p>data tidak ditemukan</p>
          </Card>
        ) : showResult ? (
          <>
            <Card>
              <div className="flex gap-4 flex-col items-center">
                <p className="font-bold text-lg">{text}</p>
                <Progress
                  percent={number}
                  status="normal"
                  format={(n) => n}
                  size={{ height: 20 }}
                />
                <p className="font-bold text-lg">{options[result()]}</p>
                <div
                  className="h-40 w-40 border bg-slate-50 bg-center bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url('${imgs[imgResult()]}')` }}
                />
                <Button onClick={reset} className="w-full">
                  reset
                </Button>
              </div>
            </Card>
            <Card className="mt-4">
              <div className="flex justify-between">
                <p>dibuat oleh</p>
                <a
                  href={creator.url}
                  className={`${
                    creator.url && "border-b-blue-400 text-blue-400"
                  }`}
                >
                  {creator?.name}
                </a>
              </div>
            </Card>
          </>
        ) : (
          <Card>
            <div className="space-y-4 text-center">
              <p className="font-bold text-lg">{title}</p>
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="input"
              />
              <Button
                type="primary"
                disabled={loading || text == ""}
                className="w-full"
                onClick={test}
              >
                {loading ? <LoadingOutlined spin /> : "coba"}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </ConfigProvider>
  );
}
