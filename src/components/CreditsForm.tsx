
import { Input } from "antd";

export function CreditsForm({ name, setName, link, setLink }: any) {
    return (
        <div className="space-y-2">
            <p className="font-medium">credits</p>
            <div>
                <p className="text-xs">nama</p>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    placeholder="john doe" />
            </div>
            <div>
                <p className="text-xs">
                    url sosial media mu (ketika nama di klik, opsional)
                </p>
                <Input
                    value={link}
                    maxLength={50}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://facebook.com/......." />
            </div>
        </div>
    );
}
