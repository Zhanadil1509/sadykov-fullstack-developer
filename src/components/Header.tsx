import NavBar from "@/components/NavBar";

type Props = {};
export default async function Header({}: Props) {

    return (
        <header className="top-0 z-50 mx-auto md:sticky md:top-4"><NavBar /></header>
    );
};
