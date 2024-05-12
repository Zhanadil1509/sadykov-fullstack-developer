import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";

type Props = {};
export default async function Header({}: Props) {
    const client = createClient()
    const settings = await client.getSingle("settings")
    console.log(settings)

    return (
        <header className="top-0 z-50 mx-auto md:sticky md:top-4"><NavBar settings={settings} /></header>
    );
};
