import Link from "next/link"

const dummyNews = [
    {
        id: 1,
        name: 'First News Item',
        url: '/news/first-news',
    },
    {
        id: 2,
        name: 'Second News Item',
        url: '/news/second-news',
    },
    {
        id: 3,
        name: 'Third News Item',
        url: '/news/third-news',
    },
]

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                {dummyNews.map(item =>
                    <li key={item.id}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>)}
            </ul>
        </>
    )

}