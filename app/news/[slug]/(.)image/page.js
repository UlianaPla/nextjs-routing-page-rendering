import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(item => item.slug === newsItemSlug);

    if (!newsItem) {
        return notFound();
    }

    return (
        <>
            <h2>Intercepted!</h2>
            <div className="fillscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </>
    )
}