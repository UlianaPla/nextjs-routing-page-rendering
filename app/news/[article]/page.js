export default function ArticlePage({ params }) {
    return (
        <>
            <h1>News Detail Page:</h1>
            <h2>{params.article}</h2>
        </>
    )
}