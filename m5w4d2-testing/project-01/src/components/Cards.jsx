function Cards() {
    const posts = [
        {
            id: 1,
            title: 'Ciao',
        },
        {
            id: 2,
            title: 'Bo',
        },
        {
            id: 3,
            title: 'Amici',
        },
    ];

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} data-testid="mieCard">
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default Cards;
