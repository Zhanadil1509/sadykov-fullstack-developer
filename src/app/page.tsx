import { Metadata } from "next";
import HomePage from "@/components/homePage";

export default async function Page() {
    return <HomePage />
}

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "",
        description: "",
    };
}
