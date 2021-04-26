import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
const  repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RespositoryList() {
    return (
        <section className="respository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}