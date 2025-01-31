import NewsList from "@/components/news-list";
import { getNewsForYear } from '@/lib/news';

export default function FilteredNewsPage({ params }) {
    const filteredNews = getNewsForYear(params.year);

    return (
        <NewsList news={filteredNews} />
    )
}