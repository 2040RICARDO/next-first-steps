import type { Metadata } from "next";

//Es impottante para el seo de cada pagina
export const metadata:Metadata = {
 title: 'About',
 description: 'About',
 keywords:['Unsxx','Siaa']
};
//Es impottante para el seo de cada pagina

export default function AboutPage(){
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About page </span>
        </main>
    )
};